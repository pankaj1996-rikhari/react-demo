import React from 'react'

const TestimonialItems = ({ v, i, img22 }) => {
    return (
        <>
            <div className="col-md-6" key={v.i}>
                <div className='clent-container'>
                    <div className='client-img'>
                        <img src={v.memberimg} alt="client" className='img-fluid' />
                    </div>
                    <p className='mb-0 text-justify'>{v.review}</p>
                    <div className='client-icons'>
                        <img src={img22} alt="icons" className='img-fluid' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialItems;
