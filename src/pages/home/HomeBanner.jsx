import React, { useContext } from 'react'
import banner from '../../assets/images/banner.jpg'
import NoteContext from '../../context/notes/NoteContext';

const HomeBanner = (props) => {
    const { Banner } = useContext(NoteContext);
    return (
        <>
            <div class="banner">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner home-banner-carousel">

                        {Banner.map((banner, index) => {
                            return <div class={`carousel-item image_wrapper ${index === 0 ? "active" : ""}`}>
                                <div class="carousel-caption d-md-block overlay overlay_2">
                                    <h2><span>{banner.Heading}</span></h2>
                                    <p><span>{banner.Subhead}</span></p>

                                </div>
                                <img className='home-bnr-img' src={banner.url} class="d-block w-100" alt="banner" />

                            </div>
                        })}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <div className="pages-banner">
                <ul>
                    <li class="image_wrapper">
                        <img src={banner.url} alt="aboutBanner" />

                        <div class="overlay overlay_2">
                            <h1 className='banner-heading'>{banner.Heading}</h1>
                        </div>
                    </li>
                </ul>
            </div> */}
        </>
    )
}

export default HomeBanner
