import React, { useContext } from 'react'

import Slider from "react-slick";

// import aboutImage from '../assets/images/about-pageimg.png'
// import superDelux from '../assets/images/superdelux.png'
// import suiteRoom from '../assets/images/suiteroom.png'
// import steam from '../assets/images/steam-sunna.png'
import NoteContext from '../context/notes/NoteContext';


const ImageSlider = ({ GalleryImage, heading,required }) => {



    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>  
        {required?
            <section className='slider-section gallery-section'>
                <div className="container">
                   
                    <div className="slider-wrapper">
                        <h2>{heading}</h2>
                        <Slider {...settings1} className='image-slider'>
                            {GalleryImage.map((url, index) => (
                                <div className="nearby-slider" key={index}>
                                    <img src={url} alt={`Gallery ${index + 1} - ${heading}`} />
                                    {/* <p>{index}</p> */}
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </section>:""}

        </>
    )
}

export default ImageSlider
