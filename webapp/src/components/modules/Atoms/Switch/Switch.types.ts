export interface SwitchTypes {
    LeftIcon?: JSX.Element|JSX.Element[];
    RightIcon?: JSX.Element|JSX.Element[];
    onChange: () => void;
    label: string;
    checked: boolean;
};