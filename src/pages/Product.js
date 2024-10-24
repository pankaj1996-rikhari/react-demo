import React, { useEffect, useState } from 'react';
import Category from '../components/Category';
import axios from 'axios';

const Product = () => {
let[finalCategory, setFinalCategory] = useState([]);
let[finalPro, setFinalPro] = useState([]);
let[catName, setCatName] = useState('');
let getCategory = ()=>{
   axios.get('https://dummyjson.com/products/categories')
   .then((res)=>res.data)
   .then((finalRes)=>{
    setFinalCategory(finalRes);
   })
}

let getProducts = ()=>{
   axios.get('https://dummyjson.com/products')
   .then((proRes)=>proRes.data)
   .then((finalRes)=>{
    console.log(finalRes.products)
    setFinalPro(finalRes.products)
   })
}

useEffect(()=>{
  getCategory();
  getProducts();
},[])

useEffect(()=>{
   if(catName!==""){
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
     setFinalPro(finalRes.products)
    })
   }
},[catName])

let pItems = finalPro.map((products, index)=>{
  return(
   
        <ProductItems key={index} pdata = {products}/>
   
  )
})
  return (
    <>
      <section className='py-5'>
        <div className="container">
          <div className='row'>
            <div className='col-md-4'>
              <Category finalCategory = {finalCategory} setCatName={setCatName}/>
            </div>
            <div className='col-md-8'>
              <div className='row'>
                 {finalPro.length>=1 ? pItems : 'No Product Found'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product;

const ProductItems = ({pdata}) => (
  <>
    <div className='col-md-4'>
      <div className='all_prodts pb-2 mb-4'>
        <img src={pdata.thumbnail} alt="product" />
        <h6 className='pt-2'>{pdata.title}</h6>
        <b>price {pdata.price}</b>
        <p>{pdata.discountPercentage}</p>
      </div>
    </div>
  </>
)
