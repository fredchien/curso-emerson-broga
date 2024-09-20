"use server";

import UsersServices from "@/services/Users";

export const handleSignUpForm = async (prevState: any, formData: FormData) => {
    
    const data = {
        name: String(formData.get("name")),
        email: String(formData.get("email")),
        password: String(formData.get("password")),
    }

    const record = await UsersServices.signUp(data);
    console.log('recotf', record);

    return {}
}