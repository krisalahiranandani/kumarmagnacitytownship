export function useRouter() {
  return {
    push: (url: string) => { if (typeof window !== 'undefined') window.location.href = url; },
    replace: (url: string) => { if (typeof window !== 'undefined') window.location.replace(url); },
    prefetch: () => {},
    back: () => { if (typeof window !== 'undefined') window.history.back(); },
    forward: () => { if (typeof window !== 'undefined') window.history.forward(); },
    refresh: () => { if (typeof window !== 'undefined') window.location.reload(); },
  };
}

export function usePathname() {
  if (typeof window !== 'undefined') return window.location.pathname;
  return '/';
}

export function useSearchParams() {
  if (typeof window !== 'undefined') return new URLSearchParams(window.location.search);
  return new URLSearchParams();
}

export function useParams() {
  return {};
}

export function notFound(): never {
  const error = new Error("NEXT_NOT_FOUND");
  (error as any).digest = "NEXT_NOT_FOUND";
  throw error;
}

export function redirect(url: string): never {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
  const error = new Error(`NEXT_REDIRECT: ${url}`);
  (error as any).digest = `NEXT_REDIRECT;${url}`;
  throw error;
}

export function useSelectedLayoutSegment() {
  return null;
}

export function useSelectedLayoutSegments() {
  return [];
}
