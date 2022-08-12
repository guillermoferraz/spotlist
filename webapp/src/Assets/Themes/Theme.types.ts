export type ThemeGlobalTypes = {
    minHeight: string;
    padding?: number | string;
    margin?: number | string;
    minWidth: number;
    errorPrimary: string;
    successPrimary: string;
};

export interface ThemeTypes extends ThemeGlobalTypes {
    bgPrimary: string;
    bgSecondary: string;
    bgLight: string,
    colorPrimary: string;
    colorHover: string;
    colorPalletPrimary: string;
    bgHover: string;
    darkMode: string;
    lightMode: string;
    error?: boolean;
    width?: number | string;
    inputMargin?: number | string;
    backgroundLoding: string;
};
