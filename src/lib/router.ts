/**
 * Route mapping utilities for hash-based navigation
 */

const hashToPage: Record<string, string> = {
  "": "home",
  "#": "home",
  "#home": "home",
  "#services": "services",
  "#references": "references",
  "#about": "about",
  "#contact": "contact",
  "#imprint": "imprint",
};

/**
 * Convert URL hash to page ID
 * Defaults to "home" for unknown hashes
 */
export function getPageFromPath(hash: string): string {
  return hashToPage[hash] ?? "home";
}

/**
 * Convert page ID to URL hash
 */
export function getPathFromPage(pageId: string): string {
  return pageId === "home" ? "#" : `#${pageId}`;
}
