"use client";

import { useEffect, useState } from "react";

export function FilmGrain() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="film-grain"
      aria-hidden="true"
    />
  );
}
