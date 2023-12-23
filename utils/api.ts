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
interface VerifyProps {
  email_id: string;
  code: string;
}
interface ResetPasswordProps {
  code: string;
  password: string;
}

interface UpdateProfileProps {
  username: string;
  email: string;
  bio: string;
  file: File;
  userId: string;
  token: string;

}
export default async function RegisterUser({
  name,
  email,
  password,
  username,
}: RegisterUserParams): Promise<void> {
  try {
    const response: any = await axios.post(
      "http://localhost:5000/user/register",
      {
        name,
        username,
        email,
        password,
      }
    );
    return response;
  } catch (error: any) {
    return error.message;
  }
}

export async function LoginUser({
  email,
  password,
}: LoginUserParams): Promise<void> {
  try {
    const response: any = await axios.post("http://localhost:5000/user/login", {
      email,
      password,
    });
    console.log(response.data);
    return response;
  } catch (error: any) {
    return error.message;
  }
}

export async function Verify({ email_id, code }: VerifyProps): Promise<void> {
  try {
    const response: any = await axios.post(
      "http://localhost:5000/user/verify",
      {
        email: email_id,
        code,
      }
    );
    return response;
  } catch (error: any) {
    return error.message;
  }
}
export async function ForgotPassword(email: string): Promise<void> {
  try {
    const response = await axios.post(
      "http://localhost:5000/user/forgotpassword",
      {
        email,
      }
    );
    return response.data;
  } catch (error: any) {
    return error.message;
  }
}

export async function ResetPassword({ code, password }: ResetPasswordProps) {
  try {
    const response = await axios.post(
      "http://localhost:5000/user/resetpassword",
      {
        code,
        password,
      }
    );
    return response.data;
  } catch (error: any) {
    return error.message;
  }
}

export async function getUserDataByToken(token: string): Promise<void> {
    try{
        const response:any = await axios.get("http://localhost:5000/user/profile",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    }
    catch(error: any){
        return error.message
    }
}

export async function updateProfileById({username,email,bio,file,userId,token}:UpdateProfileProps){
    try{
        console.log({username,email,bio,userId,token})
        const response:any = await axios.put(`http://localhost:5000/user/edit/${userId}`,{
            username,
            email,
            bio,
            file
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    }
    catch(error:any){
        return error.message
    }
}