import React, { useState } from 'react';
import {toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddItems from './AddItems';
import ListItems from './ListItems';

const Todo = () => {
    const [add, setAdd] = useState('');
    const [items, setItems] = useState([]);
    const addItem = () => {
        if (!add) {
            
        }
        else {
            setItems([...items, add])
            setAdd([]);
            toast.success('Item Added Successfully!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
        }
       
    }
    const deleleItem = (id)=>{
        const updateItems = items.filter((elm, i)=>{
           return i !== id;
        })
        setItems(updateItems);
        toast.error('Item Deleted Successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
    }
    
    return (
        <>
            <section style={{ padding: "30px", backgroundColor: "#000" }}>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-8 m-auto'>
                            <div className='todo-container'>
                                <h2 className='text-white mb-4 text-center'>Todo List Here</h2>
                                <AddItems addItem = {addItem} add ={add} setAdd = {setAdd}/>
                                <div className='show-items mb-4'>
                                    <ListItems items = {items} deleleItem = {deleleItem}/>
                                </div>
                                
                                <div className='clear-all text-center'>
                                    <button className='btn btn-danger ' onClick={()=> setItems([])}>Clear All</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

        </>
    )
}

export default Todo;
