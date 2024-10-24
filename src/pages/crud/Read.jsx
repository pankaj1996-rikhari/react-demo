import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Read = () => {
    const[data, setData] = useState([]);
    
    const getData = async ()=>{
      const res = await axios.get('https://65e81c5f4bb72f0a9c4e4806.mockapi.io/users')
      setData(res.data);
    //   console.log(res.data)
    }

   const handleDelete = (id)=>{
      if(window.confirm("are you sure to delete data"))
       axios.delete(`https://65e81c5f4bb72f0a9c4e4806.mockapi.io/users/${id}`)
       .then(()=>{
          getData();
       })
   }

   const setDataToStorage = (id, name, email)=>{
      localStorage.setItem('id', id)
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
   }
   const style = {
       background:"#dc3545"
   }

    useEffect(()=>{
       getData();
    },[])
    return (
        <>
            <section className="py-5">
                <div className='container'>
                    <Table className='mb-0'  bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th style={style}>id</th>
                                <th style={style}>Name</th>
                                <th style={style}>Email</th>
                                <th style={style} width="20%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((v, id)=>{
                                    return(
                                    <tr key={v.id}>
                                        <td>{v.id}</td>
                                        <td>{v.e_name}</td>
                                        <td>{v.e_email}</td>
                                        <td>
                                            <Link to="/updateuser">
                                                 <button className='btn btn-success ' onClick={()=>setDataToStorage(v.id, v.e_name, v.e_email)}>Edit</button>
                                            </Link>
                                            
                                            <button className='btn btn-danger mx-4' onClick={()=>handleDelete(v.id)}>Delete</button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                           
                            
                        </tbody>
                    </Table>
                </div>
            </section>
        </>
    )
}

export default Read
