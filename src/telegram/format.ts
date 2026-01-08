import MarkdownIt from "markdown-it";

export function markdownToTelegramHtml(markdown: string): string {
  const md = new MarkdownIt();
  const html = md.render(markdown);
  // Strip markdown-it's default wrapping <p>...</p> for Telegram.
  return html.replace(/^<p>|<\/p>\n?$/g, "");
}
