import React from 'react';
import './footer.css';
import Icon1 from '../../accets/images/priceTag.svg';
import Icon2 from '../../accets/images/freeDelivery.svg';
import Icon3 from '../../accets/images/deals.svg';
import Icon4 from '../../accets/images/assortment.svg';
import Icon5 from '../../accets/images/returns.svg';
import Instagram from '../../accets/images/instagram.svg';
import Facebook from '../../accets/images/facebook.svg';
import Pinterest from '../../accets/images/pinterest.svg';
import Twitter from '../../accets/images/twitter.svg';
import Youtube from '../../accets/images/youtube.svg';
import Logo from '../../accets/images/FOODAC.png';
import AppStore from '../../accets/images/app-store.jpg';
import PlayStore from '../../accets/images/google-play.jpg';
import Payment from '../../accets/images/payment-method.png';
import Link from '@mui/material/Link';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import banner from '../../accets/images/deliveryBoy.png'

const Footer=()=>{
    return(
        <>
             {/* Banner section */}
            <section className='banner-0'>
                    <div className='container-fluid d-flex box'>
                        <div className='info'>
                            <h4>Stay Home & Get Your Daily <br/> Needs From Our Shop</h4>
                            <p>Start Your Daily Shopping With Nest Mart</p>
                            <div className='sub-input'>
                            <input type='text' placeholder='Enter Your Email'/>
                            <button className='g-btn'>Subscribe</button>
                        </div>
                    </div>
                    <div className='img'> <img src={banner}/></div>
                </div>
            </section>
            
            <div className='footerWrapper'>
                <div className='container-fluid'>
                    <div className='footerSection-0 cursor'>
                        <div className='row m-0'>
                            <div className='col d-flex align-items-center box'>
                                <div className='img'>
                                    <img src={Icon1}/>
                                </div>
                                <div className='info'>
                                    <h3 >Best prices & offers</h3>
                                    <p >Order $50 or more</p>
                                </div>
                            </div>

                            <div className='col d-flex align-items-center box'>
                                <div className='img'>
                                    <img src={Icon2}/>
                                </div>
                                <div className='info'>
                                    <h3>Free delivery</h3>
                                    <p>24/7 amazing services</p>
                                </div>
                            </div>

                            <div className='col d-flex align-items-center box'>
                                <div className='img'>
                                    <img src={Icon3}/>
                                </div>
                                <div className='info'>
                                    <h3>Great daily deal</h3>
                                    <p> When you sign up</p>
                                </div>
                            </div>

                            <div className='col d-flex align-items-center box'>
                                <div className='img'>
                                    <img src={Icon4}/>
                                </div>
                                <div className='info'>
                                    <h3>Wide assortment</h3>                                
                                    <p>Mega Discounts</p>
                                </div>
                            </div>

                            <div className='col d-flex align-items-center box'>
                                <div className='img'>
                                    <img src={Icon5}/>
                                </div>
                                <div className='info'>
                                    <h3>Easy returns</h3>                               
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>

                    <div className='footerSection-1 cursor'>
                        <div className='row'>
                            <div className='col-md-3 part-1'>
                                <img src={Logo} />
                                <p>Awesome Grocery Store</p>
                                <p><LocationOnOutlinedIcon/><strong>Address:</strong> 5171 W Campbell Ave undefined kent, Utah 53127 India</p>
                                <p><HeadphonesOutlinedIcon/><strong>Call Us:</strong> (+91)540-3333-3456</p>
                                <p><MailOutlineOutlinedIcon/><strong>Email:</strong> eco@nest.com</p>
                                <p><AccessTimeOutlinedIcon/><strong>Hours:</strong> 10:00-18:00,Mon-Sat</p>
                            </div>

                            <div className='col-md-6 part-2'>
                                <div className='row'>
                                    <div className='col box'>
                                        <h3>Company</h3>
                                        <ul className='footer-list mb-sm-5 mb-md-0'>
                                            <li><Link>About us</Link></li>
                                            <li><Link>Delivery</Link></li>
                                            <li><Link>Privacy Policy</Link></li>
                                            <li><Link>Terms$Conditions</Link></li>
                                            <li><Link>Contact Us</Link></li>
                                            <li><Link>Support Center</Link></li>
                                            <li><Link>Careers</Link></li>
                                        </ul>
                                    </div>

                                    <div className='col box'>
                                        <h3>Account</h3>
                                        <ul className='footer-list mb-sm-5 mb-md-0'>
                                            <li><Link>Aign In</Link></li>
                                            <li><Link>View Cart</Link></li>
                                            <li><Link>My Wish List</Link></li>
                                            <li><Link>Track Order</Link></li>
                                            <li><Link>Help</Link></li>
                                            <li><Link>Shipping Details</Link></li>
                                            <li><Link>Compare products</Link></li>
                                        </ul>
                                    </div>

                                    <div className='col box'>
                                        <h3>Corporate</h3>
                                        <ul className='footer-list mb-sm-5 mb-md-0'>
                                            <li><Link>Become a vendor</Link></li>
                                            <li><Link>Afiliate Program</Link></li>
                                            <li><Link>Farm Business</Link></li>
                                            <li><Link>Farm Careers</Link></li>
                                            <li><Link>Our Suppliers</Link></li>
                                            <li><Link>Accessibility</Link></li>
                                            <li><Link>Promotions</Link></li>
                                        </ul>
                                    </div>
                                    <div className='col box'>
                                        <h3>Popular</h3>
                                        <ul className='footer-list mb-sm-5 mb-md-0'>
                                            <li><Link>Milk</Link></li>
                                            <li><Link>Butter</Link></li>
                                            <li><Link>Egg Substitutes</Link></li>
                                            <li><Link>Marmalads</Link></li>
                                            <li><Link>Cream & Dips </Link></li>
                                            <li><Link>Tea & Kombucha</Link></li>
                                            <li><Link>Cheese</Link></li>
                                        </ul>
                                    </div>
                                
                                </div>

                            </div>

                            <div className='col-md-3 part-3'>
                                <h3>Install App</h3>
                                <p className='mb-2'>From App Store or Google Play</p>
                                <div className='img-box d-flex'>
                                    <Link><img src={AppStore}/></Link>
                                    <Link><img src={PlayStore}/></Link>    
                                </div>
                                <p className='mb-2'>Secured Payment Gateways</p>
                                <Link><img src={Payment}/></Link>
                                <p className='mb-2 mt-2'>Follow Us On</p>
                                <div className='socialMedia'>
                                        <Link><img src={Instagram}/></Link>
                                        <Link><img src={Facebook}/></Link>
                                        <Link><img src={Twitter}/></Link>
                                        <Link><img src={Pinterest}/></Link>
                                        <Link><img src={Youtube}/></Link> 
                                        
                                </div>
                            </div>
                           
                        </div>
                    </div>

                    <p className='copyright'><i class="bi bi-c-circle"></i>foodac-React ecommerce web-project all rights reserved</p>

                </div>
                
            </div>
        
        </>
    )
}
export default Footer;