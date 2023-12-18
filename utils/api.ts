import axios from "axios";

interface RegisterUserParams {
    name: string;
    email: string;
    password: string;
}

interface LoginUserParams {
    email: string;
    password: string;
}
export default async function RegisterUser({name,email,password}:RegisterUserParams): Promise<void> {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/register", {
            name,
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
}

export async function LoginUser({email,password}:LoginUserParams): Promise<void> {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        return error.response.data;
    }
}
