
import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import { ProductsPreview } from "./ProductsPreview";
export const Banner = () => {
    return (
        <div className='home'>
        <br></br> <br></br>
        
        <div className="head">
    <div className="headcontent">
      <p className="headheading">Food Ordering Made Easy</p>
      <div style={{ display: 'flex' }}>
      <Link to='/cart'><button className='homebutton' style={{ marginRight: '20px' }}>Order Now</button></Link>
    <Link to='/menu'><button className='homebutton menu'>See Menu</button></Link>
  </div>
    </div>
    </div>
    <br></br>
    <br></br>
    <ProductsPreview />
    </div>
    )
}