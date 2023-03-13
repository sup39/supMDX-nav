import React, {useState} from 'react';
export type NavEntryInfo = {
  label: string
  path: string
  children?: NavEntryInfo[]
};

const addTrailingSlash = (url: string) => url.endsWith('/') ? url : url+'/';
export function NavEntry<Body, >({
  entry: {label, path, children}, dir, here, children: childrenJSX,
}: {entry: NavEntryInfo, dir: string, here: string, children?: Body}) {
  // if path is not URL, prepend dir (and trailing slash)
  const href = path.includes('://') ? path : addTrailingSlash(dir)+path;
  const hrefDir = addTrailingSlash(href);
  const isHere = hrefDir===addTrailingSlash(here); // compared with trailing slash
  const isRHere = isHere || here.startsWith(hrefDir); // here OR children

  const [toggle, setToggle] = useState(isRHere);
  const entryCls = 'nav-entry'+(isHere ? ' nav-here' : '');
  return children?.length ? <div className={'nav-dir'+(toggle ? ' nav-fold-open' : '')}><>
    <div className={entryCls}>
      <a href={href}>{label}</a>
      <svg viewBox="0 0 8 8" onClick={()=>setToggle(e=>!e)}><polyline points="6 3 4 5 2 3"></polyline></svg>
    </div>
    {isHere ? childrenJSX : <></>}
    <div className='nav-dir-child'>{children.map(entry =>
      <NavEntry key={entry.path} entry={entry} dir={hrefDir} here={here}>{childrenJSX}</NavEntry>)
    }</div>
  </></div> : <div className={entryCls}>
    <a href={href}>{label}</a>
  </div>;
}
