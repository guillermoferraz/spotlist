export interface TextfieldTypes {
    label: string;
    id: string;
    error: boolean;
    helperText: string | null;
    autocomplete: boolean | null;
    type: string | null;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}