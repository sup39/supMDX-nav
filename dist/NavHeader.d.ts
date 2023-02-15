/// <reference types="react" />
export type NavHeaderConfig = {
    title: string;
    subtitle?: string;
    icon?: string | {
        href: string;
        alt?: string;
        size?: number;
        width?: number;
        height?: number;
    };
};
export declare function NavHeader({ config, onToggleFold }: {
    config: NavHeaderConfig;
    onToggleFold?: () => void;
}): JSX.Element;
