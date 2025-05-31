import React, { useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../P-Details/details.css';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Sidebar from '../../Components/sidebar/sidebar';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

import Img0 from '../../accets/images/product-img/p1-big-1.webp';
import Img2 from '../../accets/images/product-img/p1-i1.webp';
import Img3 from '../../accets/images/product-img/p1-i2.webp';
import Img4 from '../../accets/images/product-img/p1-i3.webp';
import Img5 from '../../accets/images/product-img/p1-i4.webp';
import Img6 from '../../accets/images/product-img/p1-i5.webp';
import Auther from '../../accets/images/author-2.png';

import Product from '../../Components/product/product';

const Details=()=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade:false,
        arrow:true,
        centerMod:true
      };
      var product = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        fade:false,
        arrow:true
      };

const zoomSlider=useRef();
const[activeSize,setActiveSize]=useState(0);
const [PImage,setPImage]=useState(Img0);

const isActive=(index)=>{
    setActiveSize(index);
}
const setPimage=(url,index)=>{
    setPImage(url);
    zoomSlider.current.slickGoTo(index);

}

const [isActiveTab,setisActiveTab]=useState(0);

const activeTab=(index)=>{
    setisActiveTab(index);
}


    return(
        <>
            <div className='ProductDetails'>
                <div className='breadCrumbWrapper2 mb-1'>
                    <ul className='list list-inline'>
                        <li className='list-inline-item'><Link>Home &nbsp;&nbsp; /</Link></li>
                        <li className='list-inline-item'><Link>Vegetables & tubers &nbsp;&nbsp; /</Link></li>
                        <li className='list-inline-item'>seed of change organic</li>
                    </ul>

                </div>

                <div className='container-fluid pro-info-section'>
                    <div className='row'>
                        <div className='col-md-9 product'>
                            <div className='row'>
                                <div className='col-md-5 img-zoom'>
                                <div className='img'>
                                <InnerImageZoom src={PImage} style={{width:'100%'}} zoomType='hover' zoomScale={1.5}/>
                                </div>
                                    <div className='sliderWrapper'>
                                    <Slider {...settings} className='pro-slider' ref={zoomSlider}>
                                        <div className='p-item'>
                                            <img src={Img0} onClick={()=>setPimage(Img0,1)}/>
                                        </div>
                                        <div className='p-item'>
                                            <img src={Img2} onClick={()=>setPimage(Img2,2)}/>
                                        </div>
                                        <div className='p-item'>
                                            <img src={Img3} onClick={()=>setPimage(Img3,3)}/>
                                        </div>
                                        <div className='p-item'>
                                            <img src={Img4} onClick={()=>setPimage(Img4,4)}/>
                                        </div>
                                        <div className='p-item'>
                                            <img src={Img5} onClick={()=>setPimage(Img5,5)}/>
                                        </div>
                                        <div className='p-item'>
                                            <img src={Img6} onClick={()=>setPimage(Img6,6)}/>
                                        </div>
                                    </Slider>
                                    </div>
                                </div>
                                <div className='col-md-7 p-info'>
                                    <h1>seed of change organic Quinoa, seeds</h1>
                                    <div className='priceSec d-flex align-items-center'>
                                        <span className='priceTag text-g'>$32</span>
                                        <div className='ml-5 d-flex'>
                                            <span className='mt-3 old-price'>$52</span>
                                            <span className='mt-4 text-org mb-0'>(26% off)</span>
                                            
                                        </div>
                                    </div>
                                    <div className='ratingSec d-flex align-items-center'>
                                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                                        <span className=''>(32 reviews)</span>
                                    </div>

                                    <p className='mt-2'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem  </p>

                                    <div className='p-size d-flex align-items-center'>
                                        <span>Size/Weight:</span>
                                        <ul className='list list-inline mb-0'>
                                            <li className='list-inline-item'><a className={`tag ${activeSize===0?'active':''}`} onClick={()=>{isActive(0)}}>50g</a></li>
                                            <li className='list-inline-item'><a className={`tag ${activeSize===1?'active':''}`} onClick={()=>{isActive(1)}}>100g</a></li>
                                            <li className='list-inline-item'><a className={`tag ${activeSize===2?'active':''}`} onClick={()=>{isActive(2)}}>200g</a></li>
                                            <li className='list-inline-item'><a className={`tag ${activeSize===3?'active':''}`} onClick={()=>{isActive(3)}}>500g</a></li>
                                            <li className='list-inline-item'><a className={`tag ${activeSize===4?'active':''}`} onClick={()=>{isActive(4)}}>1000g</a></li>
                                        </ul>
                                    </div>

                                    <div className='addTocartSec'>
                                        <ul className='list list-inline mb-0'>
                                            <li className='list-inline-item'>
                                                <input type='number' defaultValue={1} />
                                            </li>
                                            <li className='list-inline-item'>
                                                <button className='button'><i class="bi bi-cart4" /> Add To Cart</button>
                                            </li>
                                        </ul>
                                        <div className='part2'>
                                            <li className='list-inline-item icon'><i class="bi bi-heart"/></li>
                                            <li className='list-inline-item icon'><i class="bi bi-heart"/></li>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='container-fluid TabsWrapper'>
                                <ul className='list list-inline Tabs'>
                                    <li className='list-inline-item'><button onClick={()=>activeTab(0)}>Description</button></li>
                                    <li className='list-inline-item'><button onClick={()=>activeTab(1)}>Additional Info</button></li>
                                    <li className='list-inline-item'><button onClick={()=>activeTab(2)}>Reviews</button></li>
                                </ul>
                                { isActiveTab===0 && <div className='tab-1'>
                                    <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                                    <br/>
                                    Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. </p>
                                    <h3>Packaging & Delivery</h3>
                                    <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.

                                    Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                                    <h3>Suggested Use</h3>
                                    <p className='mb-0'>Refrigeration not necessary.</p>
                                    <p>Stir before serving</p>
                                    <h3>Warnings</h3>
                                    <p>Oil separation occurs naturally. May contain pieces of shell.</p>
                                </div>}
                                { isActiveTab===1 && <div className='tab-2'>
                                    <table class="table table-bordered">
                                                    <tbody>
                                                        <tr class="stand-up">
                                                            <th>Stand Up</th>
                                                            <td>
                                                                <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="folded-wo-wheels">
                                                            <th>Folded (w/o wheels)</th>
                                                            <td>
                                                                <p>32.5″L x 18.5″W x 16.5″H</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="folded-w-wheels">
                                                            <th>Folded (w/ wheels)</th>
                                                            <td>
                                                                <p>32.5″L x 24″W x 18.5″H</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="door-pass-through">
                                                            <th>Door Pass Through</th>
                                                            <td>
                                                                <p>24</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="frame">
                                                            <th>Frame</th>
                                                            <td>
                                                                <p>Aluminum</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="weight-wo-wheels">
                                                            <th>Weight (w/o wheels)</th>
                                                            <td>
                                                                <p>20 LBS</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="weight-capacity">
                                                            <th>Weight Capacity</th>
                                                            <td>
                                                                <p>60 LBS</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="width">
                                                            <th>Width</th>
                                                            <td>
                                                                <p>24″</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="handle-height-ground-to-handle">
                                                            <th>Handle height (ground to handle)</th>
                                                            <td>
                                                                <p>37-45″</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="wheels">
                                                            <th>Wheels</th>
                                                            <td>
                                                                <p>12″ air / wide track slick tread</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="seat-back-height">
                                                            <th>Seat back height</th>
                                                            <td>
                                                                <p>21.5″</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="head-room-inside-canopy">
                                                            <th>Head room (inside canopy)</th>
                                                            <td>
                                                                <p>25″</p>
                                                            </td>
                                                        </tr>
                                                        <tr class="pa_color">
                                                            <th>Color</th>
                                                            <td>
                                                                <p>Black, Blue, Red, White</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Size</th>
                                                            <td>
                                                                <p>M, S</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                </div>}
                                { isActiveTab===2 && <div className='tab-3'>
                                    <div className='row reviewsWrapper'>
                                        <div className='col-8 review-l'>
                                            <h3>Customer questions & answers</h3>
                                            <div className='item'>
                                                <div className='row'>
                                                    <div className='col-3 img'>
                                                        <img src={Auther}/>
                                                    </div>
                                                    <div className='col-9 info'>
                                                        <div className='info-top'>
                                                            <p>December 4, 2024 at 3:12 pm</p>
                                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? Reply</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='item'>
                                                <div className='row'>
                                                    <div className='col-3 img'>
                                                        <img src={Auther}/>
                                                    </div>
                                                    <div className='col-9 info'>
                                                        <div className='info-top'>
                                                            <p>December 4, 2024 at 3:12 pm</p>
                                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? Reply</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='item'>
                                                <div className='row'>
                                                    <div className='col-3 img'>
                                                        <img src={Auther}/>
                                                    </div>
                                                    <div className='col-9 info'>
                                                        <div className='info-top'>
                                                            <p>December 4, 2024 at 3:12 pm</p>
                                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? Reply</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-4 review-r'>
                                            <h3>Customer reviews</h3>
                                            <div className='ret'>
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                                            <span style={{marginLeft:"10px",fontSize:"16px",opacity:"0.8"}}>4.8 out of 5</span>

                                            <div className='mt-3 bars'>
                                            <label for="file">5 star </label>
                                            <progress id="file" value="50" max="100" className='bar'> 50% </progress>
                                            <label for="file">4 star </label>
                                            <progress id="file" value="30" max="100" className='bar'> 30% </progress>
                                            <label for="file">3 star </label>
                                            <progress id="file" value="70" max="100" className='bar'> 70% </progress>
                                            <label for="file">2 star </label>
                                            <progress id="file" value="60" max="100" className='bar'> 60% </progress>
                                            <label for="file">1 star </label>
                                            <progress id="file" value="40" max="100" className='bar'> 40% </progress>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='reviewForm'>
                                        <h3>Add Reviews</h3>
                                        <div className='name'>
                                            <input type='text' placeholder='Name'/>
                                            <input type='text' placeholder='Email'/>
                                        </div>
                                        <textarea name='postDescription' rows={4} cols={40} placeholder='Description'/>
                                        <din className='btn0 mr-0'><button>Add Review</button></din>
                                        </div>
                                    
                                </div>}

                            </div>

                        </div>
                        <div className='col-md-3 p-sidebar'>
                        <Sidebar/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='container-fluid related-pro'>
                <h4>Related Products</h4>
            <Slider {...product} className='R-slider'>
                           <div className='item'> <Product tag={'New'}/></div>
                           <div className='item'> <Product tag={'best'}/></div>
                           <div className='item'> <Product tag={'hot'}/></div>
                           <div className='item'> <Product tag={'New'}/></div>
                           <div className='item'> <Product tag={'sale'}/></div>
                           <div className='item'> <Product tag={'hot'}/></div>
                           
                        </Slider>
            </div>
            
        </>
    )
}
export default Details;