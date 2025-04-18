import React from 'react';
import '../sidebar/sidebar.css';
import Img from '../../accets/images/assortment.svg';
import Slider from '@mui/material/Slider';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Imgprice from '../../accets/images/banner-13.png';
import Banner from '../../accets/images/banner-11.png';

function valuetext(value) {
    return `${value}°C`;
  }

const Sidebar=()=>{
    const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
        <>
            <div className='sidebar'>
                <div className='card border-0 shadow'>
                    <h3>Category</h3>

                    <div className='catList'>
                        <div className='item d-flex align-items-center'>
                            <span className='img'><img src={Img} width={25}/></span>
                            <h4 className='mb-0 ml-3'>Milk & Dairies</h4>
                            <span className='x ml-auto d-flex align-items-center justify-content-center rounded-circle'>30</span>
                        </div>
                        <div className='item d-flex align-items-center'>
                            <span className='img'><img src={Img} width={25}/></span>
                            <h4 className='mb-0 ml-3'>Milk & Dairies</h4>
                            <span className='x ml-auto d-flex align-items-center justify-content-center rounded-circle'>30</span>
                        </div>
                        <div className='item d-flex align-items-center'>
                            <span className='img'><img src={Img} width={25}/></span>
                            <h4 className='mb-0 ml-3'>Milk & Dairies</h4>
                            <span className='x ml-auto d-flex align-items-center justify-content-center rounded-circle'>30</span>
                        </div>
                        <div className='item d-flex align-items-center'>
                            <span className='img'><img src={Img} width={25}/></span>
                            <h4 className='mb-0 ml-3'>Milk & Dairies</h4>
                            <span className='x ml-auto d-flex align-items-center justify-content-center rounded-circle'>30</span>
                        </div>
                        <div className='item d-flex align-items-center'>
                            <span className='img'><img src={Img} width={25}/></span>
                            <h4 className='mb-0 ml-3'>Milk & Dairies</h4>
                            <span className='x ml-auto d-flex align-items-center justify-content-center rounded-circle'>30</span>
                        </div>
                    </div>
                </div>
                <div className='card border-0 shadow'>
                    <h3>Fill By Price</h3>
                    <div className='price'>
                        <Slider
                            size="small"
                            min={1}
                            step={1}
                            max={1000}
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            color='success'
                        />
                        <div className='d-flex pb-2 pt-0 mt-0 priceRange'>
                            <span>From:<strong className='text-g'>${value[0]}</strong></span>
                            <span className='to'>To:<strong className='text-g'>${value[1]}</strong></span>
                        </div>

                        <div className='filters'>
                            <h5>Color</h5>
                            <ul className='mb-0'>
                                <li><input type='checkbox'/> Red (53)</li>
                                <li><input type='checkbox'/> Green (53)</li>
                                <li><input type='checkbox'/> Blue (53)</li>
                                <li><input type='checkbox'/> Yellow (53)</li>
                                <li><input type='checkbox'/> White (53)</li>
                                <li><input type='checkbox'/> Black (53)</li>
                                <li><input type='checkbox'/> Orange (53)</li>
                            </ul>
                        </div>

                        <div className='filters'>
                            <h5>Item Condition</h5>
                            <ul>
                                <li><input type='checkbox'/> New (53)</li>
                                <li><input type='checkbox'/> Refurbished (53)</li>
                                <li><input type='checkbox'/> Used (53)</li>
                            </ul>
                        </div>

                        <button className='button g-btn'><FilterAltOutlinedIcon/>Filter</button>
                        <img src={Imgprice}></img>
                    </div>                   
                </div>
                <div className='banner'>
                        <img src={Banner} style={{width:'100%'}}/>
                </div>
            </div>
        
        </>
    )
}
export default Sidebar;