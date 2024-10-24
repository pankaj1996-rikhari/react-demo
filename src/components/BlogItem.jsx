import React from 'react'
import { BlogData } from '../components/Sdata';
import { Link } from 'react-router-dom';
const BlogItem = () => {
    return (
        <>
            {BlogData.map((bvale, index) => {
                return (
                    <div className='col-md-4' key={index}>
                        <div className='border'>

                            <img src={bvale.memberimg} alt="blog-img" className='w-100' style={{ height: "200px", objectFit: "cover" }} />

                            <div className='p-3'>
                                <h5><b>{bvale.title}</b></h5>
                                <p>{bvale.description}</p>
                                <Link to={`/blog/${bvale.id}`} className='btn btn-primary'>Read More</Link>
                            </div>

                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default BlogItem
