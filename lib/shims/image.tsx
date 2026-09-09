import React from 'react';

export default function Image({ src, alt, width, height, className, priority, fill, style, ...props }: any) {
  const resolvedSrc = typeof src === 'object' ? src?.src || '' : src || '';
  const imageStyle = fill
    ? { position: 'absolute' as const, height: '100%', width: '100%', inset: 0, objectFit: 'cover' as const, ...style }
    : style;

  return (
    <img
      src={resolvedSrc}
      alt={alt || ''}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={imageStyle}
      {...props}
    />
  );
}
