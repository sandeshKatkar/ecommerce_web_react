
import React, { useState } from 'react';
import '../cart/cart.css';
import IMG1 from '../../accets/images/product-1-1.jpg';
import Rating from '@mui/material/Rating';
import Select from '../../Components/Dropdown/select';


const Cart=()=>{
    const[country,setCountry]=useState(['us','India','china','UK','Shrilanka']);
    const[state,setState]=useState([]);
     const [isopenDropDown1,setIsopenDropDown1]=useState(false);
     const [isopenDropDown2,setIsopenDropDown2]=useState(false);

     const setstate=(val)=>{console.log(val)

        if(val==='us')setState(['washington','phillpinse','new Jurcy']);
        if(val==='India')setState(['Maharashtra','MP','Delhi','UP','Hydrabad','panjab','karnataka']);
     }

     
    return(
        <>
            <div className='cartSec'>
                <div className='conrainer-fluid'>
                <div className='row'>
                    <div className='col-8 p-0 p-item'>
                        <table className='w-100 mr-0 ml-0'>
                            <tr>
                                <th>Product</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Remove</th>
                            </tr>
                            <tbody>
                               
                                <tr className='p-4'>
                                    <td>
                                        <div className='itemWrapper'>
                                            <div className='img'>
                                                <img src={IMG1} alt=''/>
                                            </  div>
                                            <div className='cart-info'>
                                                <h5>Field Roast Choa Cheese Creamy Original</h5>
                                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                                            </div>
                                        </div>
                                    </td>   
                                    <td><p>$2.51</p></td>
                                    <td><input type='number' defaultValue={1}/></td>
                                    <td><p>$2.51</p></td>
                                    <td>del</td>
                                </tr>
                                <tr className='p-4'>
                                    <td>
                                        <div className='itemWrapper'>
                                            <div className='img'>
                                                <img src={IMG1} alt=''/>
                                            </  div>
                                            <div className='cart-info'>
                                                <h5>Field Roast Choa Cheese Creamy Original</h5>
                                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                                            </div>
                                        </div>
                                    </td>   
                                    <td><p>$2.51</p></td>
                                    <td><input type='number' defaultValue={1}/></td>
                                    <td><p>$2.51</p></td>
                                    <td>del</td>
                                </tr>
                                <tr className='p-4'>
                                    <td>
                                        <div className='itemWrapper'>
                                            <div className='img'>
                                                <img src={IMG1} alt=''/>
                                            </  div>
                                            <div className='cart-info'>
                                                <h5>Field Roast Choa Cheese Creamy Original</h5>
                                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                                            </div>
                                        </div>
                                    </td>   
                                    <td><p>$2.51</p></td>
                                    <td><input type='number' defaultValue={1}/></td>
                                    <td><p>$2.51</p></td>
                                    <td>del</td>
                                </tr>
                                <tr className='p-4'>
                                    <td>
                                        <div className='itemWrapper'>
                                            <div className='img'>
                                                <img src={IMG1} alt=''/>
                                            </  div>
                                            <div className='cart-info'>
                                                <h5>Field Roast Choa Cheese Creamy Original</h5>
                                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                                            </div>
                                        </div>
                                    </td>   
                                    <td><p>$2.51</p></td>
                                    <td><input type='number' defaultValue={1}/></td>
                                    <td><p>$2.51</p></td>
                                    <td>del</td>
                                </tr>
                                <tr className='p-4'>
                                    <td>
                                        <div className='itemWrapper'>
                                            <div className='img'>
                                                <img src={IMG1} alt=''/>
                                            </  div>
                                            <div className='cart-info'>
                                                <h5>Field Roast Choa Cheese Creamy Original</h5>
                                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                                            </div>
                                        </div>
                                    </td>   
                                    <td><p>$2.51</p></td>
                                    <td><input type='number' defaultValue={1}/></td>
                                    <td><p>$2.51</p></td>
                                    <td>del</td>
                                </tr>
                                <tr className='p-4'>
                                    <td>
                                        <div className='itemWrapper'>
                                            <div className='img'>
                                                <img src={IMG1} alt=''/>
                                            </  div>
                                            <div className='cart-info'>
                                                <h5>Field Roast Choa Cheese Creamy Original</h5>
                                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                                            </div>
                                        </div>
                                    </td>   
                                    <td><p>$2.51</p></td>
                                    <td><input type='number' defaultValue={1}/></td>
                                    <td><p>$2.51</p></td>
                                    <td>del</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                   <div className='col-4'>
                        <div className='shipping mt-1'>
                            <h4>Shipping</h4>
                            <div className='Dropdown'>
                                            <div className='countrydrop'>
                                                <button onClick={()=>setIsopenDropDown1(!isopenDropDown1)}>country<i class="bi bi-caret-down" style={{marginLeft:'7px'}} /></button> 
                                                {
                                                    isopenDropDown1 !== false &&<ul className='showalllist'>
                                                   { country.map((value)=>{
                                                        return(
                                                            <li onClick={()=>setstate(value)}><a href='#'>{value}</a></li>
                                                        )
                                                    })

                                                }
                                                   
                                                   
                                                </ul>  
                                                }                                         
                                            </div>
                                            <div className='fetureddrop'>
                                                <button className='' onClick={()=>setIsopenDropDown2(!isopenDropDown2)}>State<i class="bi bi-caret-down" style={{marginLeft:'7px'}} /></button> 
                                                {
                                                    isopenDropDown2 !== false &&<ul className='feturelist'>
                                                     { state.map((value)=>{
                                                        return(
                                                            <li><a href='#'>{value}</a></li>
                                                        )
                                                    })

                                                }
                                                </ul> 
                                                }                                          
                                            </div>
                            </div>
                            <div className='p-3'>
                            <label for='pincode'>Pincode: </label>
                            <input type='text' />
                            </div>
                        </div>
                        <div className='coupon mt-2'>
                            <h4>Coupon</h4>
                            <div className='d-flex align-items-center'>
                            <input type='text'/>
                            <button>Apply</button>
                            </div>
                        </div>
                        <div className='checkout mt-2'>
                            <div className='part'><p className='p1'>Subtotal</p><p>$12.5</p></div>
                            <div className='part'><p className='p1'>Shipping</p><p>free</p></div>
                            <div className='part'><p className='p1'>Estimate For</p><p>UK</p></div>
                            <div className='part'><p className='p1'>Total</p><p>$12.5</p></div>
                            <div className='part'><button>Proceed to Checkout</button></div>
                        </div>
                   </div>
                 </div>
                </div>
            </div>
        
        </>
    )
}
export default Cart;