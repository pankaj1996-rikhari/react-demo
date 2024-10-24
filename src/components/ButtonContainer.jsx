import React from 'react'

const ButtonContainer = ({onButtonClick}) => {
    const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return (
    <div className='btn-container'>
        {
            buttonNames.map((buttonName)=>{
               return <button className='btn' key={buttonName} onClick={() => onButtonClick(buttonName)}>{buttonName}</button> 
            })
        }
 </div>
  )
}

export default ButtonContainer;
