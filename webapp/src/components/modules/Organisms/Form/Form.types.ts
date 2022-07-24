interface StyleTypes {
  padding?: number | string;
  width?: number | string;
  margin?: number | string;
  inputMargin?: number | string;
};

export interface FormTypes {
  onSubmit?: () => void;
  action?: string;
  styleProps?: StyleTypes;
  submitElement?: JSX.Element | JSX.Element[]; 
};
export interface EntryTypes {
  id: string;
  name: string;
  label: string;
  error: boolean;
  helperText: string;
  autocomplete: boolean;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};