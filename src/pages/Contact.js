import React from "react";
import '../App.css';

function Contact()  {
    return(
    <div className="container mt-5 my-4 home-container-for-contact">
        <div className="row">
            <div className="col-12 col-md-6 mt-custom">
                <h1>CONTACT US HERE!</h1>
                <form>
                    <div className="mb-3">
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

            <div className="col-12 col-md-6  mt-5 ">
                <div className="p-4 mt-custom" style={{ backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
                    <h3>EMAIL: aleksandarbursac150699@gmail.com</h3>
                    <h2>PHONE: +381 641272155</h2>
                    <h2>ADDRESS: Nikole Tesle 147, Apatin 25260</h2>
                    <h2>Mon-Fri 9am - 5pm</h2>
                </div>
            </div>

        </div>
            
       
       
        <div className=" mt-5">
            <h2 className="text-center mb-4">Our Location</h2>
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