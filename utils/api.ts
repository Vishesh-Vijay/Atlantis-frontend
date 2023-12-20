import axios from "axios";

interface RegisterUserParams {
  name: string;
  email: string;
  password: string;
  username: string;
}

interface LoginUserParams {
    email: string; 
    password: string;
}
export default async function RegisterUser({name,email,password,username}:RegisterUserParams): Promise<void> {
    try {
        const response = await axios.post("http://localhost:5000/user/register", {
            name,
            username,
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        return error.message;
    }
}

export async function LoginUser({email,password}:LoginUserParams): Promise<void> {
    try {
        const response = await axios.post("http://localhost:5000/user/login", {
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        return error.message;
    }
}

export async function ForgotPassword(email:string): Promise<void> {
    try {
        const response = await axios.post("http://localhost:5000/user/forgotpassword", {
            email,
        });
        return response.data;
    } catch (error: any) {
        return error.message;
    }
}
