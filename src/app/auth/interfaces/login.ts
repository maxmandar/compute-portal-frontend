export interface Login {
    username: string;
    password: string;
}


export interface User {
    id: number;
    username: string;
    email: string;
    full_name: string;
  }

export interface LoginResponse {
    access_token: string;
    refresh_token: string;
}