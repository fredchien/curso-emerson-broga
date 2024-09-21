"use server";

import {isValid, z, ZodError} from "zod";
import UsersServices from "@/services/Users";
import { error } from "console";
import { redirect } from "next/navigation";
import { getZodErros } from "@/helpers/zod";

export type SignUpError = {
    name?: string,
    email?: string,
    password?: string,
    passwordConfirmation?: string,
}

export type SignUpState = {
    isValid?: boolean,
    errors: SignUpError
}

const validateSignUpForm = (formdata: FormData) => {
    const checkPasswords = (data: any) => data.password === data.passwordConfirmation;
    const checkPasswordsErros = {message: "Passwords dont match", path: ["passwordConfirmation"]};

    const userSchema = z.object({
        name: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(4),
        passwordConfirmation: z.string().min(4),
    }).refine(checkPasswords, checkPasswordsErros);

    try {
        userSchema.parse(Object.fromEntries(formdata));
        return {isValid: true, errors: {}}
    } catch (error: unknown) {
        
        const zodErros = getZodErros(error)

        return {isValid: false, errors: zodErros || {}}

    }
}

// const validateSignUpForm = (formdata: FormData) => {
//     const errors: SignUpError = {
//         name: undefined,
//         email: undefined,
//         password: undefined,
//         passwordConfirmation: undefined,
//     }

//     const name = String(formdata.get("name"));
//     const email = String(formdata.get("email"));
//     const password = String(formdata.get("password"));
//     const passwordConfirmation = String(formdata.get("passwordConfirmation"));

//     try {
//         if(!name){
//             errors.name = "Name is required";
//         }

//         if(!email){
//             errors.email = "Emails is required";
//         }

//         if(!email.includes('@')){
//             errors.email = "Emails is not valid";
//         }

//         if(password.length < 10){
//             errors.password = "Password should have 10 chars";
//         }

//         if(!password || password !== passwordConfirmation){
//             errors.passwordConfirmation = "Password Confirmation doesnt match";
//         }

//         const isValid = Object.values(errors).every((value) => value === undefined);
        
//         return {isValid, errors}
//     } catch (error) {
//         return {isValid: false, errors}
//     }
// }

export const handleSignUpForm = async (prevState: any, formData: FormData) => {

    const validation = validateSignUpForm(formData);

    if(!validation.isValid){
        return {...prevState, ...validation};
    }
    
    const data = {
        name: String(formData.get("name")),
        email: String(formData.get("email")),
        password: String(formData.get("password")),
    }

    await UsersServices.signUp(data);
    redirect('/');
}