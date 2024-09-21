"use server";

import {isValid, z, ZodError} from "zod";
import UsersServices from "@/services/Users";
import { redirect } from "next/navigation";
import { getZodErros } from "@/helpers/zod";
import { encrypt } from "@/helpers/jwt";
import { cookies } from "next/headers";
import { createSession } from "@/helpers/session";
import { revalidatePath } from "next/cache";

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
        password: z.string().min(4),
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

    const user = await UsersServices.signIn(data);
    if(!user) return {isValid: false, errors: {}};

    const payload = {
        uuid: user.uuid,
        name: user.name,
        email: user.email
    }
    const jwt = await encrypt(payload);
    createSession(jwt);

    revalidatePath("/");    
    return redirect('/');
}