import React from 'react';
import heroimg from "../images/hero-img.png";

export default function Banner({title}) {
  return (
    <>
     <section className='hero_sec py-5'>
        <div className="container">
           <div className='row align-items-center'>
            <div className="col-md-6">
               <div className='hero_left_contant'>
                 <h1 className='fw-bold'>Bettter digital experience with Ninestars</h1>
                 <p>We are team of talented designers making websites with Bootstrap. The last example can also be rewritten using an object as the only parameter</p>
                 <div>
                   <a href="" className='btn btn-danger'>Get Started</a>
                 </div>
               </div>
            </div>
            <div className="col-md-6">
              <div className='hero_right_contant'>
                  <img src={heroimg} alt="banner" className='img-fluid'/>
              </div>
            </div>
           </div>
        </div>
     </section>
    </>
  )
}
