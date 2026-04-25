/**
 * Wandelt einen beliebigen String in einen URL-tauglichen Slug um.
 * Behandelt deutsche Umlaute korrekt (ä→ae, ö→oe, ü→ue, ß→ss).
 */
export function toSlug(input: string): string {
  return input
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Stellt sicher, dass ein Slug erlaubt ist (nur a-z, 0-9, -). */
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

/** Erzeugt aus zwei Anbieternamen einen kanonischen "vs"-Slug. */
export function vsSlug(a: string, b: string): string {
  const left = toSlug(a);
  const right = toSlug(b);
  return [left, right].sort().join('-vs-');
}
