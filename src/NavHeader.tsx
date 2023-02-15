import React from 'react';
import Link from 'next/link';

export type NavHeaderConfig = {
  title: string
  subtitle?: string
  icon?: string | {
    href: string
    alt?: string
    size?: number
    width?: number
    height?: number
  }
};

export function NavHeader({config, onToggleFold}: {
  config: NavHeaderConfig
  onToggleFold?: ()=>void
}) {
  const {title, subtitle, icon: icon0} = config;
  const icon = typeof icon0 === 'string' ? {href: icon0} : icon0;
  return <header>
    <Link href="/" id="icon-link">
      {icon?.href && <img className="icon"
        src={icon?.href}
        alt={icon?.alt ?? 'icon'}
        width={icon?.width ?? icon?.size ?? 96}
        height={icon?.height ?? icon?.size ?? 96}
      />}
      <div className="icon-text">
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
    </Link>
    <div className="menu-toggle" onClick={onToggleFold} />
  </header>;
}
