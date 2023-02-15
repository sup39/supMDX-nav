"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBase = void 0;
var NavEntry_1 = require("./NavEntry");
function NavBase(_a) {
    var children = _a.children, headings = _a.headings, pathname = _a.pathname, entries = _a.entries, className = _a.className;
    var headingsJSX = <ul className=''>{headings.map(function (_a) {
            var label = _a.label, id = _a.id;
            return <li key={id}>
    <a href={'#' + id}>{label}</a>
  </li>;
        })}</ul>;
    return <nav className={className}>
    {children}
    <div className='nav-root'>
      {entries.map(function (entry) { return <NavEntry_1.NavEntry key={entry.link} entry={entry} dir={'/'} here={pathname}/>; })}
      {headingsJSX}
    </div>
  </nav>;
}
exports.NavBase = NavBase;
