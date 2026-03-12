export function GET() {
  return new Response(
    ["User-agent: *", "Allow: /", "Sitemap: https://government-shutdown.com/sitemap-index.xml"].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    }
  );
}
