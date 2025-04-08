import React from 'react';
import { useState } from "react";   
import '../header/header.css';
import Select from '../Dropdown/select';
import logo from "../../accets/images/logo.jpg";
import Nav from './nav/nav';

const Header=()=>{
   
    const [categories,setCategory]=useState([
        'cloths',
        'fruits',
        'vegetables'
]);
const [country,setcountry]=useState(['India','US','London','Dubai','spwndknwkjckjkjckjc']);
const [isopenDropDown,setIsopenDropDown]=useState(false);

    return(
        <>
            <header>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-sm-2 logo'>
                        <img src={logo} alt="..."/>
                        </div>
                        <div className='col-sm-5'>
                            <div className='headersearch d-flex align-items-center'>
                                <div className='selectDrop'>
                                    <Select data={categories} heading={'categories'}></Select>
                                </div>
                                <div className='search d-flex'>
                                    <input type='text' placeholder='search for items..'/>
                                    <i class="bi bi-search search-icon" />
                                </div>
                            
                            </div>
                        </div>
                        <div className='col-sm-5 d-flex'>
                            
                           <div className='ml-auto d-flex align-items-center' style={{width:'100%'}}>
                            <div className='countryBox'>
                                <Select data={country} heading={'location'} height={'50px'} padding={'5px'} width={'100px'} icon={<i class="bi bi-geo-alt-fill" style={{marginRight:'7px'}} />}></Select>
                                </div>
                            <div className='hlist'>
                                    <ul className='list list-inline mb-0 hlist-ul'>
                                        <li className='list-inline-item hlist-li'><span><i class="bi bi-recycle"></i><span className='badge bg-success rounded-circle'><p className='text-center'>3</p></span>Compare</span></li>
                                        <li className='list-inline-item hlist-li'><span><i class="bi bi-heart"></i><span className='badge bg-success rounded-circle'><p className='text-center'>3</p></span>Wishlist</span></li>
                                        <li className='list-inline-item hlist-li'><span><i class="bi bi-cart4"></i><span className='badge bg-success rounded-circle'><p className='text-center'>3</p></span>Cart</span></li>
                                        <li className='list-inline-item hlist-li' onClick={()=>setIsopenDropDown(!isopenDropDown)}>
                                            <span><i class="bi bi-person"></i>Account</span>
                                            {
                                                isopenDropDown !== false && <ul className='Ac-dropDown'>
                                                <li><button><i class="bi bi-person"></i>account</button></li>
                                                <li><button><i class="bi bi-pin-map"></i>order tracking</button></li>
                                                <li><button><i class="bi bi-heart"></i>wishlist</button></li>
                                                <li>
                                                    <button><i class="bi bi-gear setting"></i>setting</button>
                                                    <ul className='setting-menu'>
                                                        <li><button>Profile</button></li>
                                                        <li><button>Subscriptions</button></li>
                                                        <li><button>your Activities</button></li>
                                                        <li><button>Security</button></li>
                                                        <li><button>Privacy & policy</button></li>
                                                    </ul>
                                                </li>
                                                <li><button><i class="bi bi-box-arrow-right"></i>sign out</button></li>
                                            </ul>
                                            }
                                        </li>
                                      
                                    </ul>
                            </div>   
                           </div>
                          
                        </div>
                    </div>
                </div>

            </header>
            <Nav></Nav>
        </>
    )
}
export default Header;