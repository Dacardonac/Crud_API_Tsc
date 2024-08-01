export interface BodyRequestLogin {
    email: string;
    password: string;
}

export interface BodyResponseLogin {
    token: string;
}