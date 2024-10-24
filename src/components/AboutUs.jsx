import React from 'react'

const AboutUs = () => {
    return (
        <>
            <section className='about_sec py-5'>
                <div className="container">
                    <div className='row align-items-center'>
                        <div className="col-md-6">
                            <div className='hero_right_contant'>
                                <img src={require('../images/about-img.png')} className='img-fluid' alt='img' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h2 className='fw-bold'>Voluptatem dignissimos provident quasi Voluptatem dignissimos</h2>
                                <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eius a debitis molestias nihil accusantium quasi suscipit possimus ducimus veniam est quisquam culpa placeat ex ratione explicabo eveniet magnam officia harum aspernatur laboriosam enim, numquam at. Cumque officiis vero perferendis, quo ipsa illum beatae officia aliquam et, natus dignissimos nihil, nemo ex ipsum ab fugit quae totam. Voluptatum laborum ipsa culpa voluptatem ad dolor, eum odit numquam quam accusamus, laboriosam ex voluptates voluptas nihil illo incidunt delectus, mollitia ducimus? Repellendus ad soluta, eos sed libero sit? Minima doloremque quaerat, magni dolor nostrum laudantium, praesentium quae soluta ex sed voluptas harum?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;
