import React from 'react';
import '../banner-3/banner.css';
import img1 from '../../accets/images/rec-1.png';

const Banner=()=>{
    return(
        <>
            <div className='banner-main'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-4 part-1'><div className='box'><img src={img1}/></div></div>
                        <div className='col-sm-4 part-1'><div className='box'><img src={img1}/></div></div>
                        <div className='col-sm-4 part-1'><div className='box'><img src={img1}/></div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner;
