"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Fires a single analytics event when a page mounts (e.g. case study viewed). */
export function TrackView({ event, params }: { event: string; params?: Record<string, string> }) {
  useEffect(() => {
    // small delay so GA (loaded after consent) has a chance to initialise
    const t = setTimeout(() => trackEvent(event, params), 800);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);
  return null;
}
