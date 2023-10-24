// markdownUtils.js

export function stripMarkdown(markdown) {
  // Replace headers, links, inline codes, images, and bold/italic styles with an empty string
  const stripped = markdown
    .replace(/#+\s*([^\n]+)?/g, '$1') // replace headers
    .replace(/\!\[[^\]]*\]\([^)]*\)/g, '') // remove image links
    .replace(/\[[^\]]*\]\([^)]*\)/g, '$1') // remove inline links
    .replace(/`[^`]+`/g, '$1') // remove inline code
    .replace(/\*\*([^*]+)\*\*/g, '$1') // remove bold
    .replace(/\*([^*]+)\*/g, '$1'); // remove italic
  return stripped;
}
