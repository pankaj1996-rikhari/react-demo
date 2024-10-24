import React from 'react';
import { useParams } from 'react-router-dom';
import { BlogData } from '../components/Sdata';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = BlogData.find((b) => b.id == id)
  return (
    <>
      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <BlogDetailList blog = {blog}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetails;

const BlogDetailList = ({blog})=>{
  return(
    <>
       <div className='col-md-4'>
              <div className='border'>
                <img src={blog.memberimg} alt="blog-img" className='w-100' style={{ height: "200px", objectFit: "cover" }} />
                <div className='p-3'>
                  <h5><b>{blog.title}</b></h5>
                  <p>{blog.description}</p>
                </div>

              </div>
            </div>
    </>
  )
}
