"use server";

import { logout } from "@/helpers/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const handleSingOutForm = async () => {
    await logout();
    
    return redirect('/');
}