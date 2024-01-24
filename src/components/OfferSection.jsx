import React from 'react'
import { Link } from 'react-router-dom'

const OfferSection = () => {
    return (
        <div>
            <section class="offers-section section">
                <div class="container">

                    <div class="row">
                        <div class="col-sm-12 col-md-5 offer-text">
                            <p>Get Exclusive Offers & Discounts</p>
                        </div>
                        <div class="col-sm-12 col-md-4 email-div">
                            <input type="text" name="" id="" placeholder="Email Address" />
                        </div>
                        <div class="col-sm-12 col-md-3 col-lg-3 subscribe-div">
                            <Link to='' class="subscribe-btn">Subscribe</Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default OfferSection
