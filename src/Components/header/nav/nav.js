import React from 'react';
import '../nav/nav.css';
import {Link} from 'react-router-dom';
import IMG from '../../../accets/images/MMenu.jpg';

const Nav=()=>{
    return(
        <>
            <div className='nav d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='row position-relative'>
                        <div className='col-sm-3 part-1 d-flex align-items-center'>
                            <button className='g-btn p1-btn'><i class="bi bi-grid" style={{marginRight:'5px'}}></i>Browse All categories <i class="bi bi-caret-down"></i></button>
                        </div>
                        <div className='col-sm-7 part-2 d-flex align-items-center position-static'>
                            <nav>
                                <ul className='list list-inline mb-0'>
                                    <li className='list-inline-item'>
                                        <button><Link>Home</Link></button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <button><Link>Shop</Link></button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <button><Link>Vendor</Link></button>
                                    </li>
                                    <li className='list-inline-item position-static'>
                                        <button><Link>Mega Menu<i class="bi bi-caret-down"></i></Link></button>
                                        <div className='p-menu w-100 mega-menu'>
                                            <div className='row'>
                                                <div className='col'>
                                                    <h4 className='text-g'>Fuits & vegetables</h4>
                                                    <ul className='mt-3'>
                                                        <li> <button><Link>Meat & Poultry</Link></button></li>
                                                        <li> <button><Link>Fresh vegetables</Link></button></li>
                                                        <li> <button><Link>Herbs</Link></button></li>
                                                        <li> <button><Link>Cuts & Sprouts</Link></button></li>
                                                        <li> <button><Link>Fresh Fruits</Link></button></li>
                                                        <li> <button><Link>Packeged Product</Link></button></li>
                                                    </ul>
                                                </div>
                                                <div className='col'>
                                                <h4 className='text-g'>Fuits & vegetables</h4>
                                                    <ul className='mt-3'>
                                                        <li> <button><Link>Meat & Poultry</Link></button></li>
                                                        <li> <button><Link>Fresh vegetables</Link></button></li>
                                                        <li> <button><Link>Herbs</Link></button></li>
                                                        <li> <button><Link>Cuts & Sprouts</Link></button></li>
                                                        <li> <button><Link>Fresh Fruits</Link></button></li>
                                                        <li> <button><Link>Packeged Product</Link></button></li>
                                                    </ul>
                                                </div>
                                                <div className='col'>
                                                <h4 className='text-g'>Fuits & vegetables</h4>
                                                    <ul className='mt-3'>
                                                        <li> <button><Link>Meat & Poultry</Link></button></li>
                                                        <li> <button><Link>Fresh vegetables</Link></button></li>
                                                        <li> <button><Link>Herbs</Link></button></li>
                                                        <li> <button><Link>Cuts & Sprouts</Link></button></li>
                                                        <li> <button><Link>Fresh Fruits</Link></button></li>
                                                        <li> <button><Link>Packeged Product</Link></button></li>
                                                    </ul>
                                                </div>
                                                <div className='col'>
                                                    <img src={IMG} />
                                                </div>
                                            </div>
                                          
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <button><Link>Blog</Link></button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <button><Link to={'/'}>Pages <i class="bi bi-caret-down"></i></Link></button>
                                        <div className='p-menu'>
                                            <ul>
                                                <li><button><Link>About us</Link></button></li>
                                                <li><button><Link>Contact</Link></button></li>
                                                <li><button><Link>My Account</Link></button></li>
                                                <li><button><Link>Login</Link></button></li>
                                                <li><button><Link>Register</Link></button></li>
                                                <li><button><Link>Privacy policy</Link></button></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <button><Link to={'/'}>Contact</Link></button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col-sm-2 part-3 d-flex align-items-center'>
                            <div className='phNo d-flex align-items-center'>
                                <span><i class="bi bi-headset"></i></span>
                                <div className='mb-0 align-items-center'>
                                    <h4 className='mb-0'>0000-887</h4>
                                    <p className='mb-0' >24/7 Support center</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}
export default Nav;