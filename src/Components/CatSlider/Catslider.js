import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Burger from '../../accets/images/burger.png';
import '../CatSlider/catslider.css';

const Home=()=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        fade:false,
        arrow:true
      };
    return(
        <>
          <div className='catSliderSection'>
            <div className='container-fluid'>
                <h4>Categories</h4>
            <Slider {...settings} className='cat-slider-main'>
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
                </div>
                <div className='item'>
                    <div className='info'>
                        <img src={Burger} />
                        <h5>Burger & Fries</h5>
                        <p>26 items</p>
                    </div>
                </div>
            </Slider>
            </div>
          </div>
       
        
        </>
    )
}
export default Home;