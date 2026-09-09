import React, { lazy, Suspense } from 'react';

export default function dynamic(
  loader: () => Promise<any>,
  options: { ssr?: boolean; loading?: () => React.ReactNode } = {}
) {
  const LazyComponent = lazy(async () => {
    try {
      const mod = await loader();
      return { default: mod.default || mod };
    } catch (err) {
      console.warn("dynamic import fallback:", err);
      return { default: () => null };
    }
  });

  return function DynamicComponent(props: any) {
    const Fallback = options.loading ? options.loading : () => null;
    return (
      <Suspense fallback={<Fallback />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}
