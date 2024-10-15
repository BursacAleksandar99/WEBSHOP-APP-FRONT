import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

function AllComponents(){
    return(
        
        <div className="comp-div0 col-lg-12 col-sm-12">
            <div className="comp-div1 col-lg-4 col-sm-12">
                <div className="comp-div1-2">
                    <img alt="processors" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1653521722/ryzen-7-ts405_xqinsv_preview_rev_1_mkvn6y.png"/>
                    <Link to="/processors"><button>Processors</button></Link>

                </div>
                <div className="comp-div1-3">
                    <img alt="graphicsCards" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1653521892/GRAFIKA_COVER2_preview_rev_1_sy1ecx.png"/>
                    <Link to="/graphicCards"><button>Graphics Cards</button></Link>

                </div>

            </div>
            <div className="comp-div2 col-lg-4 col-sm-12">
                <div className="comp-div2-2">
                    <img alt="motherboards" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1653571280/MOTHERBOARD_COVER_preview_rev_1_gbtiwr.png"/>
                    <Link to="/motherBoards"><button>Motherboards</button></Link>

                </div>
                <div className="comp-div2-3">
                    <img alt="ram" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1653575566/RAM_COVER_preview_rev_1_hahrps.png"/>
                    <Link to="/ram"><button>Memory</button></Link>

                </div>

            </div>
            <div className="comp-div3 col-lg-4 col-sm-12">
                <div className="comp-div3-2">
                    <img alt="powerSupply" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1646229942/image5e5541578c19b_qpl7ga.png"/>
                    <Link to="/ps"><button>Power Supplies</button></Link>

                </div>
                <div className="comp-div3-3">
                    <img style={{padding: "10px"}} alt="ssd" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1728974735/SU650_ADATAAAA_x6wjmz.jpg"/>
                    <Link to="/ssd"><button>SSD discs</button></Link>

                </div>

            </div>

        </div>
    )
}


export default AllComponents;