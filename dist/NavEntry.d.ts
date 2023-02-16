/// <reference types="react" />
export type NavEntryInfo = {
    label: string;
    path: string;
    children?: NavEntryInfo[];
};
export declare function NavEntry<Body>({ entry: { label, path, children }, dir, here, children: childrenJSX, }: {
    entry: NavEntryInfo;
    dir: string;
    here: string;
    children?: Body;
}): JSX.Element;
