import { PageWrapper, SubmitButton, TextInput } from "@/components";
import SignInForm from "./SignInForm";
import Link from "next/link";

export default async function SigninPage(){
    return(
        <PageWrapper>
            <div className="flex-center w-full min-h-screen">
                <div className="w-1/3 mx-auto border border-slate-800 rounded-lg p-8">
                    <h1 className="text-3xl">Login</h1>
                    <SignInForm/>

                    <div className="pt-8">
                        <Link href="/auth/sign-up">Dont have an account? Sing up</Link>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}