import React from 'react'
import './custombutton.css'

const CustomButton = ({ children, isGoogleSignIn, shop, ...otherProps}) => {
    return (
    <>
     <button className= { 
         `${shop ? 'shop': ''} 
         ${isGoogleSignIn ? 'google-sign-in': ''} 
         custom_btn`
        } 
        
        {...otherProps}
    >
    {children}  
    </button>       
    </>
    )
}

export default CustomButton
