import { NextRequest, NextResponse } from "next/server";
import { updateSessions } from "./helpers/session";

export async function middleware(request: NextRequest) {
    const updatedSessions = await updateSessions();
    if(!updatedSessions) return;

    const res = NextResponse.next();
    res.cookies.set(updatedSessions);
    return res;
}