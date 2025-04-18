import React from 'react';
import '../Home/index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slider1 from '../../Components/slider/Slider1';
import CatSlider from '../../Components/CatSlider/Catslider';
import Banner from '../../Components/banner-3/banner';
import Product from '../../Components/product/product';
import img from '../../accets/images/natur.jpg'
import TopProducts from './topProducts/TopProducts';

import Footer from '../../Components/footer/footer';

const Home=()=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade:false,
        arrow:true
      };
    
    return(
        <>
        <Slider1/>
        <CatSlider/>
        <Banner/>

        <div className='homeProducts'>
            <div className='container-fluid'>
                <div className='d-flex align-item-center filter-tab'>
                    <h2 className='hd mb-0 mt-0 heading'>Popular Products</h2>
                    <ul className='list list-inline' style={{marginLeft:'auto'}}>
                        <li className='list-inline-item'><a className='cursor'>All</a></li>
                        <li className='list-inline-item'><a className='cursor'>Milk & Dairies</a></li>
                        <li className='list-inline-item'><a className='cursor'>Cofees & Teas</a></li>
                        <li className='list-inline-item'><a className='cursor'>Pet Foods</a></li>
                        <li className='list-inline-item'><a className='cursor'>Meats</a></li>
                        <li className='list-inline-item'><a className='cursor'>Vegetables</a></li>
                    </ul>
                </div>

                <div className='row product-row'>
                    <div className='item'>
                        <Product tag={'best'}/>
                    </div>
                    <div className='item'>
                        <Product tag={'New'}/>
                    </div>
                    <div className='item'>
                        <Product tag={'hot'}/>
                    </div>
                    <div className='item'>
                        <Product tag={'sale'}/>
                    </div>
                    <div className='item'>
                        <Product tag={'best'}/>
                    </div>
                    <div className='item'>
                        <Product tag={'hot'}/>
                    </div>
                    <div className='item'>
                        <Product tag={'sale'}/>
                    </div>
                    <div className='item'>
                        <Product tag={'hot'}/>
                    </div>
                    <div className='item'>
                        <Product tag={'New'}/>
                    </div>
                    <div className='item'>
                        <Product tag={'sale'}/>
                    </div>
                </div>
            
            
            </div>
        </div>





        {/* Best sells section */}

        <div className='homeProducts best-seller'>
            <div className='container-fluid'>
                <div className='d-flex align-item-center filter-tab'>
                    <h2 className='hd mb-0 mt-0 heading'>Daily Best Sells</h2>
                    <ul className='list list-inline' style={{marginLeft:'auto'}}>
                        <li className='list-inline-item'><a className='cursor'>Fetured</a></li>
                        <li className='list-inline-item'><a className='cursor'>Popular</a></li>
                        <li className='list-inline-item'><a className='cursor'>New Added</a></li> 
                    </ul>
                </div>

                <div className='row H-slider'>
                    <div className='col-md-3 banner'><img src={img} style={{width:'100%'}}/></div>
                    <div className='col-md-9 slider-section'>
                        <Slider {...settings} className='pro-slider'>
                           <div className='item'> <Product tag={'New'}/></div>
                           <div className='item'> <Product tag={'best'}/></div>
                           <div className='item'> <Product tag={'hot'}/></div>
                           <div className='item'> <Product tag={'New'}/></div>
                           <div className='item'> <Product tag={'sale'}/></div>
                           <div className='item'> <Product tag={'hot'}/></div>
                           
                        </Slider>
                    </div>
                </div>
<br/><br/>
            </div>
        </div>

        {/* Top selling products section */}
        <section className='topProductSec'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <TopProducts title={'Top Selling'}/>
                    </div>
                    <div className='col'>
                        <TopProducts title={'Trending Products'}/>
                    </div>
                    <div className='col'>
                        <TopProducts title={'Recently Added'}/>
                    </div>
                    <div className='col'>
                        <TopProducts title={'Top Rated'}/>
                    </div>

                </div>
            </div>
        </section>

       

      
         
        </>
    )
}
export default Home;