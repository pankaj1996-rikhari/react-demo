import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner';
import {Sdata} from '../components/Sdata';
import axios from 'axios';
import UserApiData from '../components/UserApiData';
import ServiceCard from '../components/ServiceCard';
import Todo from '../components/todoApp/Todo';
const Service = () => {
    let heading = "Our Services";
    const [Userdata, setUserdata] = useState([]);
    const loadData = async ()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUserdata(res.data);
            // console.log(res.data);
    }
    
    useEffect(()=>{
        loadData()
    },[])
    // console.log(Userdata);
    return (
        <>
            <Banner title="Our Services"/>

            <section className='py-5'>
                <div className='container'>
                    <h2 className='text-center mb-3 fw-bold'>{heading}</h2>
                     <ServiceCard Sdata = {Sdata}/>
                </div>
            </section>
            
            <Todo/>

            <section className='py-5'>
                <div className='container'>
                <h2 className='text-center mb-4 fw-bold fs-1'>User Details</h2>
                    <UserApiData Userdata = {Userdata}/>
                </div>
            </section>
        </>
    )
}

export default Service;
