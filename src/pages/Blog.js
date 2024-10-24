import React from 'react';
import BlogItem from '../components/BlogItem';

const Blog = () => {
    return (
        <>
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <BlogItem/> 
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;
