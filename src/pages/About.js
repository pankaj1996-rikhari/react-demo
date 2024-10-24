import React, { useState } from 'react'
import Banner from '../components/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Sdata } from '../components/Sdata';
import Testimonial from '../components/clientTestimonial/Testimonial';
export default function About() {
  const [add, setAdd] = useState('');
  const [item, setItem] = useState([]);
  // console.log(add);
  const addItem = ()=>{
    setItem([...item, add]);
    console.log(item);
  }
  const deleleItem = (id)=>{
    const updateItems = item.filter((elm, i)=>{
      return i !== id;
   })
   setItem(updateItems);
   console.log(updateItems);
  }
  return (
    <>


         <section style={{ padding: "30px", backgroundColor: "#000" }}>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-8 m-auto'>
                            <div className='todo-container'>
                                <h2 className='text-white mb-4 text-center'>Todo List Here</h2>
                                <div className='add-items mb-4'>
                                    <input type="text" className='form-control' placeholder='add items' value={add} onChange={(e)=>setAdd(e.target.value)}/>
                                    <button className='btn btn-primary ms-4' onClick={addItem}>Add</button>
                                </div>
                                <div className='show-items mb-4'>
                                  {
                                    item.map((v,i)=>{
                                      return(
                                        <div className='each-items mb-3' key={i}>
                                          <h5 className='text-white'>{v}</h5>
                                          <button className='btn btn-primary ms-4' onClick={()=>deleleItem(i)}>Delete</button>
                                        </div>
                                      )
                                    })
                                  }
                               
                                </div>
                                
                                <div className='clear-all text-center'>
                                    <button className='btn btn-danger '>Clear All</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
    </section>






      <Banner title="About us" />
      <Testimonial/>

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div>
                <h2 className='text-center mb-3 fw-bold'>About Us</h2>
                <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container pb-5'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
         {Sdata.map((v, i)=>{
              return(
                <SwiperSlide>
                <div className="card" key={v.i}>
                  <img src={v.imgscr} className='card-img-top img-fluid' alt='img' style={{ minHeight: "236px" }} />
                  <div className="card-body">
                    <h5 className="card-title">{v.title}</h5>
                    <p className="card-text">
                    {v.description.slice(0, 150)}...
                    </p>
                    <a href={v.link} className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              )
         })}
         
          


        </Swiper>
      </div>

    </>
  )
}
