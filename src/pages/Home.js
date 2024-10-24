import React from 'react'
import Banner from '../components/Banner'
import ServiceCard from '../components/ServiceCard';
import {Sdata} from '../components/Sdata';
import AboutUs from '../components/AboutUs'
import Teams from '../components/Teams'
import { Helmet } from 'react-helmet';

const Home = () => {
  let heading = "Our Services";
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>web development</title>
      <meta name="description" content="Web site created using create-react-app"/>  
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div>
        <Banner title="Welcome to our Website"/>
        <AboutUs/>
        <Teams/>
        <section className='py-5'>
                <div className='container'>
                    <h2 className='text-center  fw-bold'>{heading}</h2>
                     <ServiceCard Sdata = {Sdata}/>
                </div>
        </section>
    </div>
    </>
  )
}

export default Home
