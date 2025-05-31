import React from 'react';
import '../topProducts/TopProducts.css';
import img from '../../../accets/images/product-img/p1-sm-1.webp';
import { Link } from '@mui/material';
import Rating from '@mui/material/Rating';


const TopProducts=(props)=>{
    return(
        <>
        <div className='TopProBox'>
            <h3 className='mb-3'>{props.title}</h3>

            <div className='items d-flex align-items-center'>
                <div className='img'> <img src={img}/></div>
                    <div className='info px-2'>
                        <Link to=''><h4 className='mb-1'>Nestle Original Coffe-Mate Cofee Creamer </h4></Link>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                        <div className='d-flex align-items-center'>
                                <span className='price text-g'>$28.85</span><span className='old-price'>$32.85</span>
                        </div>
                    </div>
            </div>
            <div className='items d-flex align-items-center'>
                <div className='img'> <img src={img}/></div>
                    <div className='info px-2'>
                        <Link to=''><h4 className='mb-1'>Nestle Original Coffe-Mate Cofee Creamer </h4></Link>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                        <div className='d-flex align-items-center'>
                                <span className='price text-g'>$28.85</span><span className='old-price'>$32.85</span>
                        </div>
                    </div>
            </div>
            <div className='items d-flex align-items-center'>
                <div className='img'> <img src={img}/></div>
                    <div className='info px-2'>
                        <Link to=''><h4 className='mb-1'>Nestle Original Coffe-Mate Cofee Creamer </h4></Link>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating mb-0'/>
                        <div className='d-flex align-items-center mt-0'>
                                <span className='price text-g mt-0'>$28.85</span><span className='old-price'>$32.85</span>
                        </div>
                    </div>
            </div>
          
        
        
        </div>
        
        </>
    )
}
export default TopProducts;
