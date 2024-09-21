import { PageWrapper, SubmitButton, TextInput } from "@/components";
import SignInForm from "./SignInForm";

export default async function SigninPage(){
    return(
        <PageWrapper>
            <div className="flex-center w-full min-h-screen">
                <div className="w-1/3 mx-auto border border-slate-800 rounded-lg p-8">
                    <h1 className="text-3xl">Login</h1>
                    <SignInForm/>
                </div>
            </div>
        </PageWrapper>
    );
}