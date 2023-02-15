/// <reference types="react" />
export type NavEntryInfo = {
    label: string;
    link: string;
    children?: NavEntryInfo[];
};
export declare function NavEntry<Body>({ entry: { label, link, children }, dir, here, children: childrenJSX, }: {
    entry: NavEntryInfo;
    dir: string;
    here: string;
    children?: Body;
}): JSX.Element;
