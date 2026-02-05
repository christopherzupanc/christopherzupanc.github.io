import { useState, useEffect, useCallback } from "react";
import { getPageFromPath, getPathFromPage } from "../lib/router";

interface UseRouterReturn {
  currentPage: string;
  navigate: (pageId: string) => void;
}

/**
 * Custom hook for hash-based navigation
 */
export function useRouter(): UseRouterReturn {
  // Initialize state from current URL hash
  const [currentPage, setCurrentPage] = useState(() =>
    getPageFromPath(window.location.hash)
  );

  // Handle hash changes (browser back/forward or direct hash change)
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromPath(window.location.hash));
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Navigate to a page by ID
  const navigate = useCallback((pageId: string) => {
    const hash = getPathFromPage(pageId);

    // Update the hash (this will trigger hashchange event)
    window.location.hash = hash;
  }, []);

  return { currentPage, navigate };
}
