import { NextResponse } from "next/server"

export const blogs = [
    {
        "id": "1",
        "title": "NexaBlog",
        "author_name": "Sifat",
        "publish_date": "2025-12-19",
        "total_likes": "999",
        "blog_image": "https://framerusercontent.com/images/YUDW6HdsEPF8aAOHenqXlAuFA.png",
        "description": "NexaBlog is a creative innovation made by AA."
    },
    {
        "id": "2",
        "title": "The Future of AI: Trends to Watch in 2024",
        "author_name": "Jane Smith",
        "publish_date": "2024-11-10",
        "total_likes": "850",
        "blog_image": "https://framerusercontent.com/images/2b0Y1gXoQxXoX1YJH4F6vD1gkA.png",
        "description": "Explore the latest trends in artificial intelligence and how they will shape our future."
    },
    {
        "id": "3",
        "title": "Understanding Blockchain Technology",
        "author_name": "John Doe",
        "publish_date": "2024-10-05",
        "total_likes": "920",
        "blog_image": "https://framerusercontent.com/images/3c1Z2gYpRxXpY2ZJH5G7wE2hLQ.png",
        "description": "A comprehensive guide to blockchain technology and its applications."
    }
];

export const GET = async() => {
    return NextResponse.json(blogs);
};

export const POST = async(request: Request) => {
    const blogData = await request.json();
    const newBlog = {
        ...blogData,
        id: blogs.length + 1 
    }
    blogs.push(newBlog);
    return new NextResponse(JSON.stringify(newBlog), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
}