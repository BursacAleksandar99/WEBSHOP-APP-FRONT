import React from "react";
import '../Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="home-container row ">
            <div className="content col-12 col-md-6">
                <h1 className="display-4 ">BURSAC IT SHOP</h1>
                <p className="p-tag-color">The place you'll want to shop </p>
                
            </div>
            <div className="content-2 col-12 col-md-6">
                <Link to='/allcomponents'>
                <img className="content-image" src="https://res.cloudinary.com/djdzumd6m/image/upload/v1726503021/COMPUTER_PHOTO_FOR_HOMEPAGE_CANVA_SMALL_vssmcf.png" alt="Computer" />
                </Link>
                    <h3><FontAwesomeIcon style={{color: 'white', padding: '10px'}} icon={faArrowAltCircleUp} size="2x"/></h3>
                    <h3 style={{color: 'white', padding: '5px'}}>CLICK HERE TO FIND BEST COMPONENTS FOR YOUR PC!</h3>
            </div>
        </div>
    )
    
}

export default Home;