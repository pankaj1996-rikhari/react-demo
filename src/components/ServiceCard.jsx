import React from 'react'

const ServiceCard = ({ Sdata }) => {
    return (
        <>
            <div className='row mt-5'>
                {
                    Sdata.map((ele, i) => {
                        return (
                            <div className='col-md-4' key={i}>
                                <div className="card" >
                                    <img src={ele.imgscr} className='card-img-top img-fluid' alt='img' style={{ minHeight: "236px" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{ele.title}</h5>
                                        <p className="card-text">
                                            {ele.description.slice(0, 150)}...
                                        </p>
                                        <a href={ele.link} className="btn btn-primary">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default ServiceCard;
