import React from 'react'

const Category = ({finalCategory,setCatName}) => {
    // console.log(finalCategory)
    let cat = finalCategory.map((v,index)=>{
        return(
           
                <li key={index} onClick={()=>setCatName(v)}>{v}</li>
            
        )
    })  
    return (
        <>
            <div className='prod_cat'>
                <ul>
                    {cat}
                </ul>
            </div>
        </>
    )
}

export default Category;
