import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Update = () => {
    const[id, setId] = useState(0)
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const navgate = useNavigate();
  const hanleUpdate = (e)=>{
    e.preventDefault();
    axios.put(`https://65e81c5f4bb72f0a9c4e4806.mockapi.io/users/${id}`,{
        e_name: name,
        e_email: email
    }).then(()=>{
        navgate('/readuser')
    })
    setName("");
    setEmail("");
  }


    useEffect(()=>{
       setId(localStorage.getItem('id'))
       setName(localStorage.getItem('name'))
       setEmail(localStorage.getItem('email'))
    },[])
  return (
    <>
      <section className='form-sec'>
                <div className='container'>
                <h1 className='text-center text-white mb-4'>Update User</h1>
                    <form onSubmit={hanleUpdate}>
                    <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                       
                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                    </form>

                </div>
            </section>
    </>
  )
}

export default Update
