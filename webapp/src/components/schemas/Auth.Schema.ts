export interface SigninTypes {
    email: string;
    password: string;
};
export interface SignupTypes extends SigninTypes {
    confEmail: string;
    confPassword: string;
    validEmail: boolean;
    validConfEmail: boolean;
    validPassword: boolean;
    validConfPassword: boolean;
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
