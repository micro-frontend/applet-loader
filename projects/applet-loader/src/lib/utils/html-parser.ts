export function parse(html: string): Document {
  return new DOMParser().parseFromString(html, 'text/html');
}
