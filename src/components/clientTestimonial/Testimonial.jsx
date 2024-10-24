import React from 'react'
import img22 from "../../images/img22.png";
import { TestimonialData } from '../Sdata';
import TestimonialItems from './TestimonialItems';
// console.log(TestimonialData)
const Testimonial = () => {


    return (
        <>


            <section className='client-test_sec py-5'>
                <div className="container">
                    <h2 className="fw-bold text-center mb-3">CLIENTS TESTIMONIAL</h2>
                    <p className='text-center mb-5'>Et optio praesent et! Eligendi ab, irure impedit rhoncus, doloremque! Pretium nobis nobis modi ullamco excepturi recusandae et! Nec scelerisque, natus gravida.</p>
                    <div className="row">
                        {TestimonialData.map((v,i) => {
                            return (
                                <> <div key={i}>
                                      <TestimonialItems v= {v} i={i} img22 = {img22}/>
                                    </div>
                                </>
                            )
                        })}


                    </div>
                </div>
                <div className='overlay'></div>
            </section>

        </>
    )
}

export default Testimonial;
