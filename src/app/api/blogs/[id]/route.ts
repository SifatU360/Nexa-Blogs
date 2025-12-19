import { NextResponse } from "next/server";
import { blogs } from "../route";

export const GET = async(request: Request, { params }: { params: { id: string } }) => {
    const { id } = await params;
    const blog = blogs.find(b => b.id === id);
    return NextResponse.json(blog, {
        status: blog ? 200 : 404,
        headers: { 'Content-Type': 'application/json' }
    });
}