
import './product.css';
import Rating from '@mui/material/Rating';
import Link from '@mui/material/Link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const Product=({data})=>{


    const priceCalculator=(price,discountPercentage)=>{
        const disAmount=price*(discountPercentage/100);
        const finalAmount=price - disAmount;
        return finalAmount.toFixed(2);
    }
    return(

      <>
           { data?data.images?<div className='product-main cursor'>
                <div className='img-wrapper'>
                    <img src={data.images} alt=''/>
                    <div className='overlay'>
                        <ul className='list list-inline'>
                            <li className='list-inline-item mr-0'><FavoriteBorderIcon/></li>  
                            <li className='list-inline-item mr-0'><CompareArrowsIcon/></li>  
                            <li className='list-inline-item mr-0'><Link to="/pdetails"><RemoveRedEyeOutlinedIcon/></Link></li>  
                        </ul>
                    </div>
                </div>
                <div className='tag'>
                    <p></p>
                </div>
                
                <div className='info'>
                    <span className='d-block catName cursor'>{data.category}</span>
                    <p className='title cursor'><Link>{data.title}</Link> </p>
                    <Rating name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly className='rating'/>
                    <span className='brand d-block mt-0'><Link className='text-g cursor'>{data.description.slice(0,80)}...</Link></span>

                    <div className='d-flex mt-1 align-items-center'>
                        <div className='d-flex align-items-center'>
                            <span className='price text-g'>${priceCalculator(data.price,data.discountPercentage)}</span><span className='old-price'>${data.price}</span>
                        </div>
                        <button className='ml-auto button g-btn'><ShoppingCartOutlinedIcon/>Add</button>
                    </div>

                </div>
            </div>
          :'' :'' }
        </>
        )
}
export default Product;