import React, { useContext, useEffect } from 'react'
import HomeBanner from './HomeBanner'
import Checks from './Checks'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import HTMLReactParser from 'html-react-parser'

// images import 

// About Image Start 
import aboutImage from '../../assets/images/aboutimage.png'


import superDelux from '../../assets/images/superdelux.png'
import suiteRoom from '../../assets/images/suiteroom.png'
import steam from '../../assets/images/steam-sunna.png'


import Slider from "react-slick";
import OfferSection from '../../components/OfferSection'
import NoteContext from '../../context/notes/NoteContext';
import AllRooms from '../../components/AllRooms'


const Home = ({ Seodata, slugs }) => {
  const { About } = useContext(NoteContext);


  const { ReviewsAPI, Reviews, WebsiteDataAPI, Footer, Nearby, SectionTitles, Engine, Services, Rooms, RoomsAPI } = useContext(NoteContext);
  useEffect(() => {
    ReviewsAPI()
    WebsiteDataAPI()
    RoomsAPI()
  }, [])

  // console.log(Rooms)

  // console.log(SectionTitles)


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


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


  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Helmet>
        <link rel="icon" href={Footer.Logo} />
        <title>{Seodata.Title}</title>
        <meta name="description" content={Seodata.Description} />
      </Helmet>
      <HomeBanner />

      <Checks />

      <div className="mobile-book-btn">
        <Link to={Engine} class="custom-btn">Book now</Link>
      </div>

      {/* <!-- About Section Start  --> */}
      <section class="about-section section">
        <div class="container container-wrapper">
          <div class="row about-row-home">
            <div class="col-sm-12 col-md-12 col-lg-6 image-div about-img-wrapper">

              <div className="image-iner-div about-inr-img-div">
                <Slider {...settings} className='image-slider'>

                  <div>
                    <img src={About.url} alt="About Images" />
                  </div>
                </Slider>
              </div>

            </div>

            <div class="col-sm-12 col-md-12 col-lg-6 about-text">
              <h2>{About.Heading}</h2>
              <p>{HTMLReactParser(About.Text.split(' ').slice(0, 140).join(' '))}</p>
              <div className="custom-btn-div">
                <Link to={slugs[0]} class="custom-btn">LEARN MORE</Link>
              </div>
            </div>


          </div>
        </div>
      </section>


      {/* <!-- Our Room Section Start  --> */}


      <AllRooms />




      {/* <!-- Hotel facility section  --> */}

      <section section class="facility-section section" >

        <div class="container">
          <h2 class="section-heading">{SectionTitles.Facilities.Title}</h2>
          <p class="section-para">{SectionTitles.Facilities.Description}</p>
          {/* <!-- Swiper --> */}
          <div class="wrapper-div">
            <Slider {...settings1} className='image-slider'>
              {Services.map((data) => {
                return (
                  <div className="facilities-img-div">
                    <img src={data.Image} alt="facilties" />
                    <div className=''>
                      <span>{data.Title}</span>
                    </div>
                  </div>
                )
              })}
            </Slider>

          </div>
          <div class="d-flex w-100 justify-content-center custom-btn-div">
            <Link to={Engine} target='_blank' class="custom-btn">BOOK NOW</Link>
          </div>
        </div>
      </section >

      {/* Near by Places Start  */}
      <section className="nearby-wrapper">

        <h2 class="section-heading">{SectionTitles.Nearby.Title}</h2>
        <p class="section-para">{SectionTitles.Nearby.Description}</p>

        <div class="nearby-places section" >
          <div class="container">
            <div class="wrapper-div-nearby">
              <Slider {...settings1} className='image-slider'>
                {Nearby.map((data) => {
                  return (
                    <div class="nearby-slider">
                      <img src={data.Image} alt="NEAR BY PLACES " />
                      <div class="slider-caption">
                        <span>{data.Place}</span>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div >


        <div class="d-flex w-100 justify-content-center">
          <div className="custom-btn-div">
            <Link to={slugs[7]} class="custom-btn">VIEW GALLERY</Link>
          </div>
        </div>
      </section>


      <section class="testimonial-section section">
        <div class="container testimonial-wrapper">

          <h2 class="section-heading">{SectionTitles.Testimonial.Title}</h2>

          <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

            <div class="carousel-inner testimonial-main">
              {Reviews.map((review, index) => {
                return <div class={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="3000">
                  <div class="testimonial-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="168" height="24" viewBox="0 0 168 24"
                      fill="none">
                      {Array.from({ length: review.rating }, (_, starIndex) => (
                        <path
                          d={`M${12 + 36 * starIndex} 19.2884L${19.416 + 36 * starIndex} 24L${17.448 + 36 * starIndex} 15.12L${24 + 36 * starIndex} 9.14526L${15.372 + 36 * starIndex} 8.37474L${12 + 36 * starIndex} 0L${8.628 + 36 * starIndex} 8.37474L${0 + 36 * starIndex} 9.14526L${6.552 + 36 * starIndex} 15.12L${4.584 + 36 * starIndex} 24L${12 + 36 * starIndex} 19.2884Z`}
                          fill="#CBB33B"
                        />

                      ))}

                    </svg>
                    <p>{review.text}</p>
                    <span>{review.author_name}</span>
                  </div>
                </div>
              })}

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>


      <OfferSection />


    </div >
  )
}

export default Home
