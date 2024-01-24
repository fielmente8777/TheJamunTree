import React, { useContext } from 'react'
import './faclity.css'
import Banner from '../../components/Banner'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import FacilityContent from './FacilityContent';
import aboutImage from '../../assets/images/about-pageimg.png'
import superDelux from '../../assets/images/superdelux.png'
import suiteRoom from '../../assets/images/suiteroom.png'
import steam from '../../assets/images/steam-sunna.png'
import NoteContext from '../../context/notes/NoteContext';
import OffferSection from '../../components/OfferSection'

const Facility = ({ Pagetitle, Seodata }) => {
  const { Footer } = useContext(NoteContext);
  const { DataToarrange, BunchImages } = useContext(NoteContext);
  const { Menu } = useContext(NoteContext);




  const nearByPlace = [
    { imageUrl: steam, text: 'Thai Monastery' },
    { imageUrl: aboutImage, text: 'World Peace Pagoda' },
    { imageUrl: superDelux, text: 'Lumbini Museum' },
    { imageUrl: suiteRoom, text: 'World Peace Pagoda' },
  ];

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
      <Helmet>
        <link rel="icon" href={Footer.Logo} />
        <title>{Seodata.Title}</title>
        <meta name="description" content={Seodata.Description} />
      </Helmet>

      <section className="about-banner">
        <Banner text={Pagetitle["Title"]} Image={Pagetitle["Image"]} />
      </section>

      <div className='faclity-section'>
        <section className='aboutPage-Facility-section'>
          <div class="container container-wrapper">
            <FacilityContent FacilityImages={BunchImages[3].Image} heading={DataToarrange[1].Heading} para={DataToarrange[1].Text} index={1} />
          </div>
          <div class="container container-wrapper facility-ryt">
            <FacilityContent FacilityImages={BunchImages[5].Image} heading={DataToarrange[2].Heading} para={DataToarrange[2].Text} index={2} />
          </div>
        </section>

        <section class="section thingtodo-section">
          <div class="container">
            <h2 class="section-heading my-4">OUR MENU INCLUDES</h2>
            <div class="wrapper-div-nearby thingstodo-wrapper">
              <Slider {...settings1} className='image-slider'>
                {Menu.map((data) => {
                  return (
                    <div class="nearby-slider">
                      <img src={data.Image} alt="Things to do" />
                      <div class="slider-caption">
                        <span>{data.Name}</span>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>

          </div>
        </section>

        <OffferSection />
      </div>
    </>
  )
}

export default Facility
