import React from 'react';

export default function Link({ href, children, className, style, target, rel, ...props }: any) {
  const url = typeof href === 'object' ? href?.pathname || '/' : href || '#';
  return (
    <a href={url} className={className} style={style} target={target} rel={rel} {...props}>
      {children}
    </a>
  );
}
