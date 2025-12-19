import BlogDetailsCard from '@/components/ui/BlogDetailsCard';
import React from 'react';

const BlogDetailsPage = async({params} : {params: Promise<{blogId: string}>}) => {
    const {blogId} = await params;
    const res = await fetch(`http://localhost:5000/blogs/${blogId}`,{
        cache: 'no-store',
    });
    const blog =  await res.json();
    return (
        <div className='my-10'>
            <BlogDetailsCard blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;