import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('https://65e81c5f4bb72f0a9c4e4806.mockapi.io/users',{e_name: name, e_email: email})
        .then(()=>{
            navigate('/readuser')
        })
    }
    
    return (
        <>
            <section className='form-sec'>
                <div className='container'>
                    <h1 className='text-center text-white mb-4'>Add User</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                value={email} onChange={(e)=>setEmail(e.target.value)}
                                required
                            />
                        </div>
                       
                        <button type="submit" className="btn btn-danger">
                            Submit
                        </button>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Add
