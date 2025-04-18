import React, { useState } from 'react';
import Link from '@mui/material/Link'; 
import '../Listing/listing.css';
import Sidebar from '../../Components/sidebar/sidebar';
import Product from '../../Components/product/product'


const Listing=()=>{
    const [isopenDropDown1,setIsopenDropDown1]=useState(false);
    const [isopenDropDown2,setIsopenDropDown2]=useState(false);
    return(
        <>
            <div className='listingPage'>
                <div className='container-fluid'>
                    <div className='breadCrumb'>
                        <h1 className='mb-1'>Snack</h1>
                        <ul className='list list-inline'>
                            <li className='list-inline-item'><Link to={''}>Home /</Link></li>
                            <li className='list-inline-item'><Link to={''}>Home /</Link></li>
                            <li className='list-inline-item'><Link to={''}>Snack</Link></li>
                        </ul>
                    </div>

                    <div className='listingPageData'>
                        <div className='row'>
                            <div className='col-md-3 sidebarWrapper'>
                                <Sidebar/>
                            </div>

                            <div className='col-md-9 pl-5 right-content homeProducts'>

                                <div className='right-content-top d-flex'>
                                    <div className='part-1 pt-4'>
                                    <p className=''>We found <strong className='text-g'>29</strong> items for you!</p>
                                    </div>
                                    <div className='Dropdowns'>
                                        <div className='showAlldrop'>
                                            <button onClick={()=>setIsopenDropDown1(!isopenDropDown1)}>Show All<i class="bi bi-caret-down" style={{marginLeft:'7px'}} /></button> 
                                            {
                                                isopenDropDown1 !== false &&<ul className='showalllist'>
                                                <li><a href='#'>20</a></li>
                                                <li><a href='#'>40</a></li>
                                                <li><a href='#'>60</a></li>
                                                <li><a href='#'>80</a></li>
                                                <li><a href='#'>All</a></li>
                                            </ul>  
                                            }                                         
                                        </div>
                                        <div className='fetureddrop'>
                                            <button className='' onClick={()=>setIsopenDropDown2(!isopenDropDown2)}>Fetured by<i class="bi bi-caret-down" style={{marginLeft:'7px'}} /></button> 
                                            {
                                                isopenDropDown2 !== false &&<ul className='feturelist'>
                                                <li><a href='#'>Fetured</a></li>
                                                <li><a href='#'>Price:Low to High</a></li>
                                                <li><a href='#'>Price:High to Low</a></li>
                                                <li><a href='#'>Avg. Rating</a></li>
                                                <li><a href='#'>By Date</a></li>
                                            </ul> 
                                            }                                          
                                        </div>
                                    </div>

                                </div>

                                <div className='row product-row'>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                    <div className='item'>
                                        <Product tag={'best'}/>
                                    </div>
                                   
                                </div>

                            </div>
                        </div>
                    </div>




                </div>
            </div>
        
        </>
    )
}
export default Listing;