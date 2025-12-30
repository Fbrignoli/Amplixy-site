#
# Production Dockerfile for Next.js (App Router)
# - Uses multi-stage build to keep the runtime image small
# - Works well on Railway and avoids Nixpacks build timeouts
#

FROM node:22-alpine AS deps
WORKDIR /app

# Install dependencies based on lockfile
COPY package.json package-lock.json ./
RUN npm ci


FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build


FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Railway provides PORT; default to 3000 for local runs
ENV PORT=3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# Bind to 0.0.0.0 so Railway can route traffic to the container
CMD ["sh", "-c", "npm run start -- -p ${PORT} -H 0.0.0.0"]


