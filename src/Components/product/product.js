import React from 'react';
import './product.css';
import img from '../../accets/images/square.jpg';
import Rating from '@mui/material/Rating';
import Link from '@mui/material/Link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
const Product=(props)=>{
    return(

        <>
            <div className='product-main cursor'>
                <div className='img-wrapper'>
                    <img src={img}/>
                    <div className='overlay'>
                        <ul className='list list-inline'>
                            <li className='list-inline-item mr-0'><FavoriteBorderIcon/></li>  
                            <li className='list-inline-item mr-0'><CompareArrowsIcon/></li>  
                            <li className='list-inline-item mr-0'><RemoveRedEyeOutlinedIcon/></li>  
                        </ul>
                    </div>
                </div>
                <div className='tag'>
                    <p className={`${props.tag}`}>{props.tag}</p>
                </div>
                
                <div className='info'>
                    <span className='d-block catName cursor'>Snack</span>
                    <p className='title cursor'><Link>Seed of Change Organic Quinoe, Brown, & Red Rice</Link> </p>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                    <span className='brand d-block mt-0'><Link className='text-g cursor'>NestFood</Link></span>

                    <div className='d-flex align-items-center'>
                        <div className='d-flex align-items-center'>
                            <span className='price text-g'>$28.85</span><span className='old-price'>$32.85</span>
                        </div>
                        <button className='ml-auto button g-btn'><ShoppingCartOutlinedIcon/>Add</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Product;