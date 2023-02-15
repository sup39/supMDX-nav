import React, {useState} from 'react';
import Link from 'next/link';
export type NavEntryInfo = {
  label: string
  link: string
  children?: NavEntryInfo[]
};

export function NavEntry<Body, >({
  entry: {label, link, children}, dir, here, children: childrenJSX,
}: {entry: NavEntryInfo, dir: string, here: string, children?: Body}) {
  const href = dir+link;
  const isHere = href.replace(/\/$/, '')===here; // remove trailing slash
  const isRHere = isHere || here.startsWith(href); // here or is children

  const [toggle, setToggle] = useState(isRHere);
  const entryCls = 'nav-entry'+(isHere ? ' nav-here' : '');
  return children?.length ? <div className={'nav-dir'+(toggle ? ' nav-fold-open' : '')}><>
    <div className={entryCls}>
      <Link href={href}>{label}</Link>
      <svg viewBox="0 0 8 8" onClick={()=>setToggle(e=>!e)}><polyline points="6 3 4 5 2 3"></polyline></svg>
    </div>
    {isHere ? childrenJSX : <></>}
    <div className='nav-dir-child'>{
      children.map(entry => <NavEntry key={entry.link} entry={entry} dir={href} here={here}>{childrenJSX}</NavEntry>)
    }</div>
  </></div> : <div className={entryCls}>
    <Link href={href}>{label}</Link>
  </div>;
}
