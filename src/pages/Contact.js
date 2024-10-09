import React from "react";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function Contact()  {
    return(
    <div className="home-container-for-contact mt-5">
        <div className="col-12 row mt-custom justify-content-center gap-5">
            <div className="col-md-5 col-sm-6 contact-background">
                <h1>CONTACT US HERE!</h1>
                <form>
                    <div className="mb-3 ">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone number:</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            placeholder="Enter your phone number"
                            required
                        />

                    </div>
                    <div className="mb-3">
                        <textarea 
                            className="form-control"
                            id="message"
                            rows="4"
                            placeholder="Enter your message"

                        >

                        </textarea>

                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>

            <div className=" col-md-5 col-sm-6 contact-background ">
                <div className="p-4 mt-custom col-md-12 mt-custom-contact">
                    <h3><FontAwesomeIcon icon={faEnvelope} /> EMAIL: aleksandarbursac150699@gmail.com</h3>
                    <h2><FontAwesomeIcon icon={faPhone} /> PHONE: +381 641272155</h2>
                    <h2><FontAwesomeIcon icon={faMapMarkerAlt}/> ADDRESS: Nikole Tesle 147, Apatin 25260</h2>
                    <h2><FontAwesomeIcon icon={faClock}/> Mon-Fri 9am - 5pm</h2>
                </div>
            </div>s

        </div>
            
       
       
        <div className=" mt-5">
            <h2 className="text-center mb-4" style={{color: "white"}}>Our Location</h2>
            <div className="map-container" >
            <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.7668585803285!2d
            18.98919961107155!3d45.66414018558801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475cc
            7bb0de57beb%3A0xd2e1bdb44b8e80c8!2z0J3QuNC60L7Qu9C1INCi0LXRgdC70LUgMTQ3LCDQkNC_0LDRgtC40L0!5e1!3m2!1ss
            r!2srs!4v1726490028127!5m2!1ssr!2srs" 
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            >  
            </iframe>

            </div>

        </div>
    </div>
        
    )
}

export default Contact;