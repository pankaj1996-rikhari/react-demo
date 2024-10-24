import React from 'react'
import { MdDelete } from "react-icons/md";
const ListItems = ({ items, deleleItem }) => {

    return (
        <>
            {items.map((v, i) => {
                return (
                    <div className='each-items mb-3' key={i}>
                        <h5 className='text-white'>{v}</h5>
                        <MdDelete className='text-white' onClick={() => deleleItem(i)} />
                    </div>
                )
            })}

        </>
    )
}

export default ListItems
