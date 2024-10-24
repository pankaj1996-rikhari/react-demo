import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const Contact = () => {

    let Userdata =  {name: "", email: "", phone: "", city: "", message: ""}
    const [Inputdata, setInputdata] = useState(Userdata);
    const navigate = useNavigate();
const InputHandle = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputdata({...Inputdata, [e.target.name]: e.target.value});
    console.log(value);
}
const FormSubmit = (e)=>{
  e.preventDefault();
  
  if(Inputdata.name ==""){
    swal({
        title: "Enter Name",
        icon: "error",
      });  
  }else if(Inputdata.email ==""){
    swal({
        title: "Enter Email",
        icon: "error",
      });  
  }else if(Inputdata.phone ==""){
    swal({
        title: "Enter phone",
        icon: "error",
      });  
  }else if(Inputdata.city ==""){
    swal({
        title: "Select city",
        icon: "error",
      });  
  }else if(Inputdata.message ==""){
    swal({
        title: "Enter message",
        icon: "error",
      });  
  }else{
    swal({
        title: "Successfully Submitted",
        icon: "success",
      });

    axios.post('https://jsonplaceholder.typicode.com/users', Inputdata)
    .then((resp)=>{
        navigate('/');
       
    //    console.log(resp);
    })
    setInputdata({name:"",email:"", phone:"", city:"", message:""});
  
  }


 


//   console.log(Inputdata);
}
// const btnClick = ()=>{
//     swal({
//         title: "Good job!",
//         text: "You clicked the button!",
//         icon: "success",
//       });
      
// }
  return (
    <>
    <section className='py-5 contact-form' style={{backgroundColor: "#f8f9fa"}}>
        <div className='container'>
           <div className='row align-items-center'>
              <div className='col-md-6'>
                 <form onSubmit={FormSubmit}>
                    <div className='row'>
                       <div className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" id="name" name='name' value={Inputdata.name} onChange={InputHandle} />
                        </div>
                       </div>
                       <div className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input type="email" className="form-control" id="email" name='email' value={Inputdata.email} onChange={InputHandle} />
                        </div>
                       </div>
                       <div className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone
                            </label>
                            <input type="text" className="form-control" id="phone" name='phone' value={Inputdata.phone} onChange={InputHandle} />
                        </div>
                       </div>
                       <div className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">
                                City
                            </label>
                            <select className="form-select" id='city' name='city' value={Inputdata.city} onChange={InputHandle} >
                                <option>Select Your city</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Noida">Noida</option>
                                <option value="Gurugram">Gurugram</option>
                            </select>
                        </div>
                       </div>
                       <div className='col-md-12'>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea className="form-control" id="message" rows="3" name='message' value={Inputdata.message} onChange={InputHandle} ></textarea>
                        </div>
                       </div>
                       <div className='col-md-12 text-center mt-4'>
                          <button type="submit" className="btn btn-success px-5">Submit</button>
                       </div>
                    </div>
                 </form>
              </div>
              <div className='col-md-6'>
              <img src={require('../images/contactus.png')} className='img-fluid' alt='img'/>
              </div>
           </div>
        </div>
    </section>


   
 </>
  )
}

export default Contact
