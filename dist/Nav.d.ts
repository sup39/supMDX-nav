import React from 'react';
import type { NavEntryInfo } from './NavEntry';
import { HeadingInfo } from './NavBase';
import { NavHeaderConfig } from './NavHeader';
export type NavConfig = {
    site: NavHeaderConfig;
    nav: NavEntryInfo[];
};
export type NavProps = {
    children?: React.ReactNode;
    headings: HeadingInfo[];
    pathname: string;
    config: NavConfig;
};
export declare function Nav({ config, children, ...props }: NavProps): JSX.Element;
