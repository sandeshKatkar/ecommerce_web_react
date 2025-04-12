import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Burger from '../../accets/images/burger.png';
import '../CatSlider/catslider.css';

const Home=()=>{
    const [itemBG,setitemBG]=useState([
        '#ffceb','ecffec','#feefea','#fff3eb','#fff3ff','#f2fce4','#feefea','#fffceb','#feefe','#ecffec','#feefea','#f2fce4'
    ])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        fade:false,
        arrow:true,
        autoplay:3000,
        centerMod:true
      };
    return(
        <>
          <div className='catSliderSection'>
            <div className='container-fluid'>
                <h4>Categories</h4>
            <Slider {...settings} className='cat-slider-main'>
                {
                    itemBG.length!=0 && itemBG.map((item,index)=>{
                       return(
                            <div className='item'>
                                <div className='info'  style={{background:item}}>
                                    <img src={Burger} />
                                    <h5>Burger & Fries</h5>
                                    <p>26 items</p>
                                </div>
                             </div>
                       )
                    })
                }
                {/* <div className='item'>
                    <div className='info'>
                        <img src={Burger} />
                        <h5>Burger & Fries</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={Burger} />
                        <h5>Burger & Fries</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={Burger} />
                        <h5>Burger & Fries</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={Burger} />
                        <h5>Burger & Fries</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={Burger} />
                        <h5>Burger & Fries</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={Burger} />
                        <h5>Burger & Fries</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={Burger} />
                        <h5>Burger & Fries</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={Burger} />
                        <h5>Burger & Fries</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={Burger} />
                        <h5>Burger & Fries</h5>
                        <p>26 items</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={Burger} />
                        <h5>Burger & Fries</h5>
                        <p>26 items</p>
                    </div>
                </div> */}
            </Slider>
            </div>
          </div>
       
        
        </>
    )
}
export default Home;