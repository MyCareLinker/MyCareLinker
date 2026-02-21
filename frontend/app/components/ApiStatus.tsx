"use client";

import { useEffect, useState } from "react";

function getApiBaseUrl(): string {
  if (typeof window !== "undefined") {
    const env = process.env.NEXT_PUBLIC_API_URL;
    if (env) return env.replace(/\/$/, "");
    return `${window.location.protocol}//${window.location.hostname}:4000`;
  }
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
}

export default function ApiStatus() {
  const [status, setStatus] = useState<"checking" | "up" | "down">("checking");

  useEffect(() => {
    let cancelled = false;
    setStatus("checking");
    const apiUrl = getApiBaseUrl();
    fetch(`${apiUrl}/`, { method: "GET" })
      .then((res) => (res.ok ? "up" : "down"))
      .catch(() => "down")
      .then((s: "up" | "down") => {
        if (!cancelled) setStatus(s);
      });
    return () => { cancelled = true; };
  }, []);

  if (status === "checking") {
    return (
      <span className="flex items-center gap-1.5 text-xs text-slate-500">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
        API checking…
      </span>
    );
  }
  if (status === "up") {
    return (
      <span className="flex items-center gap-1.5 text-xs text-emerald-600">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        API connected
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-xs text-rose-600" title="Backend unreachable">
      <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
      API offline
    </span>
  );
}
