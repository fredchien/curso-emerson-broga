"use server";

import {isValid, z, ZodError} from "zod";
import UsersServices from "@/services/Users";
import { redirect } from "next/navigation";
import { getZodErros } from "@/helpers/zod";

export type SignInError = {
    email?: string,
    password?: string,
}

export type SignInState = {
    isValid?: boolean,
    errors: SignInError
}



const validateSignInForm = (formdata: FormData) => {
    
    const userSchema = z.object({
        email: z.string().email(),
        password: z.string().min(10),
    });

    try {
        userSchema.parse(Object.fromEntries(formdata));
        return {isValid: true, errors: {}}
    } catch (error: unknown) {
        
        const zodErros = getZodErros(error)

        return {isValid: false, errors: zodErros || {}}

    }
}

export const handleSignInForm = async (prevState: any, formData: FormData) => {

    const validation = validateSignInForm(formData);

    if(!validation.isValid){
        return {...prevState, ...validation};
    }
    
    const data = {
        email: String(formData.get("email")),
        password: String(formData.get("password")),
    }

    // await UsersServices.signUp(data);
    // redirect('/');

    console.log('data', data);
    return {isValid: true, errors: {}};
}