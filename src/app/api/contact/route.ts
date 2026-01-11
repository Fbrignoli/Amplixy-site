import { NextResponse } from 'next/server';

// Simple in-memory rate limiting (for production, use Redis or similar)
const RATE_LIMIT = new Map<string, { count: number; resetTime: number }>();
const MAX_REQUESTS = 3; // Max 3 requests
const WINDOW_MS = 60000; // Per 1 minute

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of RATE_LIMIT.entries()) {
    if (now > value.resetTime) {
      RATE_LIMIT.delete(key);
    }
  }
}, 300000);

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = RATE_LIMIT.get(identifier);

  if (!record || now > record.resetTime) {
    RATE_LIMIT.set(identifier, {
      count: 1,
      resetTime: now + WINDOW_MS
    });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

function sanitizeInput(input: string): string {
  // Remove potential XSS attempts
  return input
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 1000); // Limit length
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    // Rate limiting based on IP
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer dans quelques instants.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type doit être application/json' },
        { status: 400 }
      );
    }

    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.company) {
      return NextResponse.json(
        { error: 'Les champs nom, email et société sont requis.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide.' },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      company: sanitizeInput(data.company),
      website: data.website ? sanitizeInput(data.website) : '',
      social: data.social ? sanitizeInput(data.social) : '',
      message: data.message ? sanitizeInput(data.message) : '',
    };

    // TODO: Integrate with email service (SendGrid, Resend, Nodemailer, etc.)
    // Example with environment variables:
    // const emailService = process.env.EMAIL_SERVICE;
    // await sendEmail(sanitizedData);

    // For now, log to console (remove in production)
    console.log('Contact form submission:', {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      ip
    });

    // Return success
    return NextResponse.json(
      {
        success: true,
        message: 'Votre demande a été envoyée avec succès. Nous vous répondrons sous 24h.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);

    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}

// Reject other methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
