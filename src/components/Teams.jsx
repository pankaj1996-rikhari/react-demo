import React from 'react'
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { TeamData } from './Sdata';
const Teams = () => {
  return (
     <>
       <section className='team_sec py-5'>
                <div className="container">
                 <h2 className='fw-bold text-center mb-4'>Our team is always here to help</h2>
                    <div className='row align-items-center'>
                        {
                            TeamData.map((team ,i)=>{
                                return(
                                    <div className="col-md-3" key={i}>
                                    <div className='member'>
                                       <img src={team.memberimg} className='img-fluid' alt='img' />
                                      <div className="member-info">
                                          <div className='member-info-content'>
                                              <h5 className='mb-0'>{team.name}</h5>
                                              <span><i>{team.design}</i></span>
                                          </div>
                                          <div className='socials'>
                                              <a href=""><FaFacebookF/></a>
                                              <a href=""><FaInstagramSquare /></a>
                                              <a href=""><FaLinkedinIn /></a>
                                              <a href=""><FaYoutube /></a>
                                          </div>
                                      </div>
                                    </div>
                              </div>
                                )
                            })
                        }
                       
                    </div>
                </div>
            </section>
     </>
  )
}

export default Teams;
