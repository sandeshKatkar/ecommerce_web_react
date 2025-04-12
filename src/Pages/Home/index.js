import React from 'react';
import '../Home/index.css'
import Slider1 from '../../Components/slider/Slider1';
import CatSlider from '../../Components/CatSlider/Catslider';
import Banner from '../../Components/banner-3/banner';
import Product from '../../Components/product/product';

const Home=()=>{
    
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
        </>
    )
}
export default Home;