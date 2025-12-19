import BlogDetailsCard from '@/components/ui/BlogDetailsCard';
import { Blog } from '@/types';
import React from 'react';

export const generateStaticParams = async() => {
    const res = await fetch("http://localhost:5000/blogs");
    const blogs = await res.json();
    return blogs.slice(0,3).map((blog : Blog) => ({blogId : blog.id}));
}

const BlogDetailsPage = async({params} : {params: Promise<{blogId: string}>}) => {
    const {blogId} = await params;
    const res = await fetch(`http://localhost:5000/blogs/${blogId}`,{
        cache: 'no-store',
    });
    const blog =  await res.json();
    return (
        <div className='my-10 px-5 md:px-0'>
            <BlogDetailsCard blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;