import React from 'react'
import { FaBeer, FaFacebookF } from 'react-icons/fa';
export default function Footer() {
    const bgblur= "#194670";
  return (
    <>
      <footer className='py-3'  style={{backgroundColor: bgblur}}>
         <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                     <p className='mb-0 text-center text-white'><FaBeer /> Copyright © 2023 Rikhari <FaFacebookF/> Tutoriala. Created by Pankaj Rikhari</p>
                </div>
            </div>
         </div>
      </footer>
    </>
  )
}
