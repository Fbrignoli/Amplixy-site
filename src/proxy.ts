import { NextResponse, type NextRequest } from "next/server";
import { markdownPages, htmlOnlyPaths, notFoundMarkdown } from "./lib/agent-content";
import { preferredRepresentation, varyAccept } from "./lib/negotiation.mjs";

export function proxy(request: NextRequest) {
  // Ne pas négocier les actions, les données RSC ni les chargements internes.
  if (!["GET", "HEAD"].includes(request.method) || request.headers.has("rsc") || request.nextUrl.searchParams.has("_rsc")) {
    return NextResponse.next();
  }

  const path = request.nextUrl.pathname;
  const explicitMarkdown = path.endsWith(".md");
  const pagePath = path === "/index.md" ? "/" : explicitMarkdown ? path.slice(0, -3) : path;
  const markdown = Object.hasOwn(markdownPages, pagePath) ? markdownPages[pagePath] : undefined;
  const htmlOnly = htmlOnlyPaths.includes(path);
  const response = NextResponse.next();
  response.headers.set("Vary", varyAccept(response.headers.get("Vary")));
  response.headers.set("Link", '</llms.txt>; rel="describedby"');

  // Les anciennes pages gardent leur rendu et leurs sémantiques de réponse.
  if (htmlOnly) return response;

  const representation = explicitMarkdown ? "text/markdown" : preferredRepresentation(request.headers.get("accept"));
  // Une ressource absente reste une 404 Next pour les autres clients.
  if (!markdown && !explicitMarkdown && representation !== "text/markdown") return response;
  if (markdown && !explicitMarkdown) {
    response.headers.append("Link", `<${path === "/" ? "/index.md" : `${path}.md`}>; rel="alternate"; type="text/markdown"`);
  }
  if (representation === "text/html") return response;

  const status = representation === null ? 406 : markdown === undefined ? 404 : 200;
  const body = status === 406
    ? "Représentation non disponible. Formats acceptés : text/html et text/markdown.\n"
    : markdown ?? notFoundMarkdown;
  const headers = new Headers(response.headers);
  // Le marqueur NextResponse.next() ne doit pas accompagner une réponse finale.
  headers.delete("x-middleware-next");
  headers.set("Content-Type", status === 406 ? "text/plain; charset=utf-8" : "text/markdown; charset=utf-8");
  headers.set("Cache-Control", "no-store");
  return new NextResponse(request.method === "HEAD" ? null : body, { status, headers });
}

export const config = {
  // Les ressources publiques, API et métadonnées gardent leurs types natifs.
  matcher: ["/((?!api(?:/|$)|_next(?:/|$)|img(?:/|$)|llms\\.txt$|agent-instructions\\.md$|robots\\.txt$|sitemap\\.xml$|opengraph-image(?:/|$)|favicon\\.ico$).*)"],
};
