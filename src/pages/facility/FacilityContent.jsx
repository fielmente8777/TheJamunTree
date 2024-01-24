import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import Slider from "react-slick";
import aboutImage from '../../assets/images/aboutimage.png'
import superDelux from '../../assets/images/superdelux.png'
import suiteRoom from '../../assets/images/suiteroom.png'
import steam from '../../assets/images/steam-sunna.png'
import NoteContext from '../../context/notes/NoteContext';


const FacilityContent = ({ FacilityImages, heading,para ,index}) => {
    const { DataToarrange } = useContext(NoteContext);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>
            {index%2==0?
            <div class="row facility-ryt-row">
                
                <div class="col-lg-6 text-div">
                    <h2>{heading}</h2>
                    <p>{para}</p>
                </div>
                <div class="col-lg-6 image-div">

                    <Slider {...settings} className='image-slider'>
                        
                                <div>
                                    <img src={FacilityImages} alt="About Images" />
                                </div>
                            
                    </Slider>

                </div>
            </div>:
            <div class="row">
                <div class="col-lg-6 image-div">

                    <Slider {...settings} className='image-slider'>
                        
                                <div>
                                    <img src={FacilityImages} alt="About Images" />
                                </div>
                            
                    </Slider>

                </div>
                <div class="col-lg-6 text-div">
                    <h2>{heading}</h2>
                    <p>{para}</p>
                </div>
        </div>}
        </>
    )
}

export default FacilityContent
