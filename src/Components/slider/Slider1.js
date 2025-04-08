import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../slider/slider.css';
import Image1 from '../../accets/images/slid1-1.jpg';
import Image2 from '../../accets/images/slid1-2.jpg';

const Slider1=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrow:true
      };
    return(
        <>
        <div className='Slider-1'>
            <div className='container-fluid'>
                <Slider {...settings} className='slider-main'>
                    <div className='item'>
                        <img src={Image1} className='w-100'/>
                        <div className='info'>
                            <h2 className='mb-4'>Don't miss ammazing <br/> grocery deals</h2>
                            <p>Sign up for daily newsletter</p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={Image2} className='w-100'/>
                        <div className='info2'>
                            <h2 className='mb-4'>Fresh Vegetables <br/> Big Discount </h2>
                            <p>Sign up for daily newsletter</p>
                        </div>
                    </div>
                </Slider>
                <div className='sub-input'>
                    <input type='text' placeholder='Enter Your Email'/>
                    <button className='g-btn'>Subscribe</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Slider1;