import React from 'react';
import {NavEntry, NavEntryInfo} from './NavEntry';

export type HeadingInfo = {
  tagName: string;
  label: string;
  id: string;
};
export type NavBaseProps = {
  children?: React.ReactNode
  headings: HeadingInfo[]
  pathname: string
  entries: NavEntryInfo[]
  className?: string
}

export function NavBase({
  children, headings, pathname, entries, className,
}: NavBaseProps) {
  const headingsJSX = <ul className="">{headings.map(({label, id}) => <li key={id}>
    <a href={'#'+id}>{label}</a>
  </li>)}</ul>;

  return <nav className={className}>
    {children}
    <div className="nav-root">
      {entries.map(entry => <NavEntry key={entry.path} entry={entry} dir={'/'} here={pathname} />)}
      {headingsJSX}
    </div>
  </nav>;
}
