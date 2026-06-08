import { getApi, postApi } from "@Utils/config/apis";


const API_SERVER_URL=process.env.REACT_APP_API_SERVER_URL


export const SignUpAuth=(data)=>{
    return postApi(`${API_SERVER_URL}/auth/sign-up`,data)
}

export const SignInAuth=(data)=>{
    return postApi(`${API_SERVER_URL}/auth/sign-in`,data)
}

export const SendOtpAuth=(data)=>{
    return postApi(`${API_SERVER_URL}/auth/send-otp`,data)
}

export const UpdatePasswordpAuth=(data)=>{
    return postApi(`${API_SERVER_URL}/auth/update-password`,data)
}

export const LogoutpAuth=()=>{
    return postApi(`${API_SERVER_URL}/auth/logout`,{})
}


