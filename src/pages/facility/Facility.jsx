import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import aboutImage from '../../assets/images/about-pageimg.png';
import steam from '../../assets/images/steam-sunna.png';
import suiteRoom from '../../assets/images/suiteroom.png';
import superDelux from '../../assets/images/superdelux.png';
import Banner from '../../components/Banner';
import OffferSection from '../../components/OfferSection';
import NoteContext from '../../context/notes/NoteContext';
import FacilityContent from './FacilityContent';
import './faclity.css';

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

        

        <OffferSection />
      </div>
    </>
  )
}

export default Facility
