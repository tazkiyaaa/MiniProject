import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import CustomButton from '../../components/CustomButton/CustomButton'

export const Hero = () => {
    return (
    <div className="hero">
    <div className="overlay">
    <div className="hero_content mx-auto">
    <h3>The Best Duo-tone buildable Foundation</h3>
    {/* <p className="col-md-6 col-sm-10">
        Shop Now
    </p> */}
    <CustomButton type="button">
    <Link to="/shoppage" className="link_btn custom_btn"
    >
      SHOP NOW
    </Link>
    </CustomButton>
    </div>
    </div>       
    </div>
    )
}
