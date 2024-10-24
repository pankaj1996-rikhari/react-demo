import React from 'react'
import { MdDriveFileRenameOutline, MdOutlineEmail, MdOutlineViewCompactAlt } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";

const UserApiData = ({ Userdata }) => {
    // console.log(Userdata.reverse())
    return (
        <>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th><MdDriveFileRenameOutline className='me-2'/>Name</th>
                        <th><MdOutlineEmail className='me-2'/>Email</th>
                        <th><MdOutlineViewCompactAlt className='me-2'/>Company</th>
                        <th><FaRegAddressCard className='me-2'/>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Userdata.map((ele, i) => {
                            return (
                                <tr key={i}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.company.bs}</td>
                                    <td>{ele.address.city}</td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </table>
        </>
    )
}

export default UserApiData;
