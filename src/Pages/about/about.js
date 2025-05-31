import React from "react";
import './about.css';
import IMG1 from '../../accets/images/about-1.png';
import Service1 from '../../accets/images/assortment.svg';
import Service2 from '../../accets/images/freeDelivery.svg';
import Service3 from '../../accets/images/priceTag.svg';
import Service4 from '../../accets/images/returns.svg';
import Service5 from '../../accets/images/deals.svg';
import Service6 from '../../accets/images/about-1.png';
const About=()=>{
    return(
        <>
            <div className="aboutSec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 img">
                            <img src={IMG1} alt=""/>
                        </div>
                        <div className="col-6 info">
                                    <h2>Welcome to FOODAC</h2>
                                    <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                                    <br/>
                                    Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. </p>
                            
                        </div>
                    </div>
                    <div className="services">
                        <h2>What We Provide ?</h2>
                        <div className="row mt-5">
                            <div className="col-4 item">
                                <img src={Service3} alt=""/>
                                <h4>Best Prise & Offers</h4>
                                <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for </p>
                            </div>
                            <div className="col-4 item">
                                <img src={Service2} alt=""/>
                                <h4>Free Delivery</h4>
                                <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for </p>
                            </div>
                            <div className="col-4 item">
                                <img src={Service5} alt=""/>
                                <h4>Great daily deal</h4>
                                <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for </p>
                            </div>  
                        </div>
                        <div className="row">
                            <div className="col-4 item">
                                <img src={Service1} alt=""/>
                                <h4> Wide assortment</h4>
                                <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for </p>
                            </div>
                            <div className="col-4 item">
                                <img src={Service4} alt=""/>
                                <h4> Easy returns</h4>
                                <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for </p>
                            </div>
                            <div className="col-4 item">
                                <img src={Service3} alt=""/>
                                <h4>Best Prise & Offers</h4>
                                <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for </p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;