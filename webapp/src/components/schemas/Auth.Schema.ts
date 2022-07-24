export interface SigninTypes {
    email: string;
    password: string;
};
export interface SignupTypes extends SigninTypes {
    confEmail: string;
    confPassword: string;
};

type ConstansTypes  = {
    email: string;
    confEmail: string;
    password: string;
    confPassword: string;
};

export const  CONSTANTS_ENTRY: ConstansTypes = {
    email: 'email',
    confEmail: 'confEmail',
    password: 'password',
    confPassword: 'confPassword'
};
