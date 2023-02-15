import React, {useState} from 'react';
import type {NavEntryInfo} from './NavEntry';
import {NavBase, HeadingInfo} from './NavBase';
import {NavHeader, NavHeaderConfig} from './NavHeader';

export type NavConfig = {
  site: NavHeaderConfig
  nav: NavEntryInfo[]
}
export type NavProps = {
  children?: React.ReactNode
  headings: HeadingInfo[]
  pathname: string
  config: NavConfig
};

export function Nav({config, children, ...props}: NavProps) {
  const [navFold, setNavFold] = useState(false);
  return (
    <NavBase className={navFold ? 'open' : ''} entries={config.nav} {...props}>
      <NavHeader config={config.site} onToggleFold={()=>setNavFold(e=>!e)} />
      {children}
    </NavBase>
  );
}
