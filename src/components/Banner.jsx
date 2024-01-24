import React from 'react'
import aboutBanner from '../assets/images/about-banner.png'
const Banner = (props) => {
    return (
        <>
            {/* <div className="pages-banner">
                <img src={props.Image} alt="aboutBanner" />
                    <h1 className='banner-heading'>{props.text}</h1>
            </div> */}

            <div className="pages-banner">
                <ul>
                    <li class="image_wrapper">
                        <img src={props.Image} alt="aboutBanner" />

                        <div class="overlay overlay_2">
                            <h1 className='banner-heading'>{props.text}</h1>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Banner
