import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OfferSection = () => {
    const [email, setEmail] = useState('');
    const handleChange = (e) => {
        setEmail({ [e.target.id]: e.target.value });
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleSubscribeClick = async () => {
        try {
            alert("Submitted");
            const response = await fetch(`https://eazotel.eazotel.com/api/dashboard/editnewsletter`, {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, /",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "Domain": 'tjt28318704',
                    "email": email,
                }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            // Handle the JSON response if needed
        } catch (error) {
            console.error('Error submitting newsletter:', error.message);
            // Handle the error
        }
    };
    return (
        <div>
        <section class="offers-section section">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-5 offer-text">
                        <p>Get Exclusive Offers & Discounts</p>
                    </div>
                    <div class="col-sm-12 col-md-4 email-div">
                        <input type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Email Address" />
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 subscribe-div">
                        <Link onClick={handleSubscribeClick} class="subscribe-btn">Subscribe</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>


    )
}

export default OfferSection
