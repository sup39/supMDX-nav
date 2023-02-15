import React from 'react';
import { NavEntryInfo } from './NavEntry';
export type HeadingInfo = {
    tagName: string;
    label: string;
    id: string;
};
export type NavBaseProps = {
    children?: React.ReactNode;
    headings: HeadingInfo[];
    pathname: string;
    entries: NavEntryInfo[];
    className?: string;
};
export declare function NavBase({ children, headings, pathname, entries, className, }: NavBaseProps): JSX.Element;
