export type ILogo = {
    url: string;
};

export type ISiteInfo = {
    logo: ILogo;
    logo_white?: ILogo;
    site_name: string;
};

export interface ISubMenu {
    name: string;
    url: string;
}

export interface IMenu {
    name: string;
    submenus: ISubMenu[];
}

export interface IMenuGroup {
    name: string;
    url?: string;
    menus?: IMenu[];
}

export interface IMenuData {
    menuGroups: IMenuGroup[];
}

export interface IMenuGroup {
    name: string;
    url?: string;
    menus?: IMenu[];
}

export interface IImage {
    url: string;
    alt: string;
}

export interface IButton {
    label: string;
    onClick: () => void;
}

export interface IBanner {
    title: string;
    description: string;
    image: IImage;
    button: IButton;
    abrir_simulador?: boolean;
}
