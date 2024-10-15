import React from "react";
import '../App.css';

function AllComponents(){
    return(
        <div className="comp-div0 col-lg-12 col-sm-12">
            <h1>Components</h1>
            <div className="comp-div0-1 col-lg-12 col-sm-12">
                <div className="comp-div1 col-lg-4 col-sm-12">
                    <img alt="processors" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1653521722/ryzen-7-ts405_xqinsv_preview_rev_1_mkvn6y.png"/>
                    <label>Processors</label>
                </div>
                <div className="comp-div2 col-lg-4 col-sm-12">
                    <img alt="graphicsCards" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1653521892/GRAFIKA_COVER2_preview_rev_1_sy1ecx.png"/>
                    <label>Graphics Cards</label>
                </div>
                <div className="comp-div5 col-lg-4 col-sm-12">
                    <img alt="motherboards" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1653571280/MOTHERBOARD_COVER_preview_rev_1_gbtiwr.png"/>
                    <label>Motherboards</label>
                </div>

            </div>
            <div className="comp-div0-1 col-lg-12 col-sm-12">
                <div className="comp-div3 col-lg-4 col-sm-12">
                    <img alt="ram" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1653575566/RAM_COVER_preview_rev_1_hahrps.png"/>
                    <label>Memory</label>
                
                </div>
                <div className="comp-div4 col-lg-4 col-sm-12">
                    <img alt="powerSupply" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1646229942/image5e5541578c19b_qpl7ga.png"/>
                    <label>Power Supplies</label>
                
                </div>
                <div className="comp-div6 col-lg-4 col-sm-12">
                    <img alt="ssd" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1728974735/SU650_ADATAAAA_x6wjmz.jpg"/>
                    <label>SSD discs</label>
                </div>
            </div>
            
            
        </div>
    )
}


export default AllComponents;