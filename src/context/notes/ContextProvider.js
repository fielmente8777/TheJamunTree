import React, { useState } from "react";
import NoteContext from "./NoteContext";

const ContextProvider = ({ children }) => {
  const [websiteData, setwebsiteData] = useState({
    "About": {
        "Heading": "As much as comfort want to get from us everything",
        "Text": "<p>From excellent facilities to the best of comforts the Jamun Tree Hotel proves to be one of the ideal hotels in Muzaffarpur for budget travellers and backpackers. Enjoy the comfort and luxury in The Janu Tree on your Tour to Muzaffarpur, Bihar. Business tourists can arrange their parties, events, conferences and seminars in The Jamun Tree. You casn avail the facilities of well-equipped conference halls and well-furnished banquet spaces.</p><p>The Jamun Tree takes pride in bringing to you the best-in-class facilities, that rival even 3-star hotels, to suit your needs. Stay in tune with your daily workout routine at our fitness centre. Our valet parking service ensures you a hassle-free stay. Enjoy Muzaffarpur at its best and we will take care of the rest.</p>",
        "url": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/tjt28318704/images/aca39022-476b-44db-ad77-f34a4037ee8c.jpg",
        "video_url": "https://www.youtube.com/watch?v=4K6Sh1tsAW4"
    },
    "Advertisnment": [
        {
            "Heading": "Head",
            "Image": "Imagelink",
            "Required": true,
            "Text": "text"
        }
    ],
    "Banner": [
        {
            "Heading": "Best Stay At place",
            "Subhead": "Feel the Air",
            "url": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/thejamuntree/images/Z1/banner-1.jpg",
            "video": "https://www.youtube.com/watch?v=4K6Sh1tsAW4"
        },
        {
            "Heading": "Amazing View",
            "Subhead": "Amazing View",
            "url": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/thejamuntree/images/Z1/banner-2.jpeg",
            "video": "https://www.youtube.com/watch?v=4K6Sh1tsAW4"
        },
        {
            "Heading": "Best Sight Scene",
            "Subhead": "Visit now and have fun",
            "url": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/thejamuntree/images/Z1/footer-bg.jpg",
            "video": "https://www.youtube.com/watch?v=4K6Sh1tsAW4"
        }
    ],
    "Blogs": [
        {
            "Heading": "Heading 1",
            "Image": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
            "Text": "Blog1",
            "date": "2023-10-20"
        },
        {
            "Heading": "Heading 2",
            "Image": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
            "Text": "Blog2",
            "date": "2023-10-21"
        },
        {
            "Heading": "Heading 3",
            "Image": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
            "Text": "Blog3",
            "date": "2023-10-22"
        },
        {
            "Heading": "Heading 4",
            "Image": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
            "Text": "Blog4",
            "date": "2023-10-23"
        }
    ],
    "Chefs": [
        {
            "Image": "1.jpg",
            "Name": "Tim",
            "Text": "text"
        }
    ],
    "Contacts": [],
    "DataToarrange": [
        {
            "Heading": "Things To Do",
            "Images": [
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                }
            ],
            "Text": "Arranged data Text"
        },
        {
            "Heading": "The Restaurant",
            "Images": [
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                }
            ],
            "Text": "Arranged data Text"
        },
        {
            "Heading": "The Dining",
            "Images": [
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                }
            ],
            "Text": "Arranged data Text"
        },
        {
            "Heading": "How To find Hotel",
            "Images": [
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                }
            ],
            "Text": "Arranged data Text"
        },
        {
            "Heading": "Contact Query",
            "Images": [
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                }
            ],
            "Text": "Arranged data Text"
        },
        {
            "Heading": "Arranged Data",
            "Images": [
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                }
            ],
            "Text": "Arranged data Text"
        },
        {
            "Heading": "Arrange",
            "Images": [
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                }
            ],
            "Text": ""
        },
        {
            "Heading": "Scheme_code",
            "Images": [
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                },
                {
                    "Heading": "heading",
                    "Image": "1.jpg",
                    "Text": "text"
                }
            ],
            "Text": ""
        }
    ],
    "Engine": "https://engine.eazotel.com/?id=68ead48a-93b8-437f-95b6-dcf821306140&hid=27031389",
    "Events": [
        {
            "Heading": "heading",
            "Image": "1",
            "Text": "text"
        },
        {
            "Heading": "heading",
            "Image": "1",
            "Text": "text"
        },
        {
            "Heading": "heading",
            "Image": "1",
            "Text": "text"
        }
    ],
    "Facilities": {
        "Accept_Cards": true,
        "Alchemy": true,
        "Babysitting": true,
        "Board": true,
        "Casino": true,
        "Child_Care": true,
        "Concierge": true,
        "Conditinoer": true,
        "Conference_Hall": true,
        "Conference_Rooms": true,
        "Currency_Exchange": true,
        "Doctor": true,
        "Electricity": true,
        "Elevator": true,
        "Evpoint": true,
        "Express_checks": true,
        "Fitness_Center": true,
        "FrontDesk": true,
        "Health_&_Beauty": true,
        "Health_Club": true,
        "Housekeep": true,
        "Jacuzzi": true,
        "Laundry": true,
        "Parking": true,
        "Restaurant": true,
        "Rooftop_Cafe": true,
        "Room_Service": true,
        "SaunaStream": true,
        "Security": true,
        "Spa": true,
        "Suncafe": true,
        "Swimming_Pool": true,
        "TravelTour": true,
        "Wave_Bar": true,
        "Wifi": true,
        "cofeemaker": true,
        "minibar": true
    },
    "Faq": [
        {
            "Answer": "Yes you will feel great view in night",
            "Question": "Is thier a good view?"
        },
        {
            "Answer": "Your Can have direct booking or payment afterwards",
            "Question": "Did we need to pay advance?"
        },
        {
            "Answer": "Yes thier is cancellation policy with 2% price deduction",
            "Question": "Is thier cancellation policy?"
        }
    ],
    "Footer": {
        "AboutText": "At our Hotel you will feel great to stay and have a good fun",
        "Address": "CP Enclave,Bibi Ganj,NH-28,Muzaffarpur,Bihar 842001",
        "City": "Bihar",
        "Email": "info@thejamuntree.com",
        "Logo": "data:image/jpeg;base64,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",
        "NewsLetterText": "Hi this text is for newsletter",
        "Phone": "+91-7634915745",
        "WhatsApp": "+91-7634915745"
    },
    "Gallery": [
        {
            "Category": "Events",
            "Images": [
                "https://www.thebrokebackpacker.com/wp-content/uploads/2020/02/Kyoto-Overall-Best-Place-to-Stay-in-Japan.jpg"
            ],
            "Required": true
        },
        {
            "Category": "Restaurants",
            "Images": [
                "https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg"
            ],
            "Required": true
        },
        {
            "Category": "Hotels",
            "Images": [
                "https://img.traveltriangle.com/blog/wp-content/uploads/2017/04/Tropical-villa-Cover.jpg"
            ],
            "Required": true
        },
        {
            "Category": "Nearby",
            "Images": [
                "https://media-cdn.tripadvisor.com/media/photo-s/23/e3/b6/a4/peaceful-place-to-stay.jpg"
            ],
            "Required": true
        },
        {
            "Category": "View",
            "Images": [
                "https://rishikeshdaytour.com/blog/wp-content/uploads/2020/04/The-Wonders-Of-Rishikesh-Our-Favourite-Hotels-In-The-Holy-City.jpg"
            ],
            "Required": true
        },
        {
            "Category": "Rooms",
            "Images": [
                "https://www.jaypeehotels.com/blog/wp-content/uploads/2019/08/43-1-777x360-2.jpg"
            ],
            "Required": true
        },
        {
            "Category": "Lobby",
            "Images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQt2-v9n6jqqmdcQR2yqFtqoi4xod_Jh-RA&usqp=CAU"
            ],
            "Required": true
        },
        {
            "Category": "Bar",
            "Images": [
                "https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg"
            ],
            "Required": true
        },
        {
            "Category": "Playzone",
            "Images": [
                "https://d1ias3p97xmuek.cloudfront.net/myplacehotels.com-341489493/cms/cache/v2/63e16447a4bee.jpg/380x310/fit/80/9d7fe4dab160bddcd75a65159277a3ed.jpg"
            ],
            "Required": true
        }
    ],
    "HotelAdvr": {
        "Image": "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
        "heading": "Enjoy your Days with us",
        "video": "https://www.youtube.com/watch?v=4K6Sh1tsAW4"
    },
    "Images": [
        {
            "Image": "https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg"
        },
        {
            "Image": "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/794a4fda36a64b7fafd20fbcb5971633"
        },
        {
            "Image": "https://assets.cntraveller.in/photos/63450f6de474dfe27a0fa99e/16:9/w_5840,h_3285,c_limit/DSC03698.jpg"
        },
        {
            "Image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        },
        {
            "Image": "https://assets.cntraveller.in/photos/63450f6de474dfe27a0fa99e/16:9/w_5840,h_3285,c_limit/DSC03698.jpg"
        },
        {
            "Image": "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
        },
        {
            "Image": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        },
        {
            "Image": "https://assets.cntraveller.in/photos/63450f6de474dfe27a0fa99e/16:9/w_5840,h_3285,c_limit/DSC03698.jpg"
        },
        {
            "Image": "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/794a4fda36a64b7fafd20fbcb5971633"
        }
    ],
    "Links": {
        "Facebook": "https://www.facebook.com/thejamuntreemfp",
        "FacebookRequired": true,
        "Instagram": "https://www.instagram.com/The Jamun Tree",
        "InstagramRequired": true,
        "Linkedin": "https://www.linkedin.com/The Jamun Tree",
        "LinkedinRequired": true,
        "Tripadvisors": "https://www.tripadvisors.com/The Jamun Tree",
        "TripadvisorsRequired": true,
        "Twitter": "https://www.twitter.com/The Jamun Tree",
        "TwitterRequired": true,
        "Youtube": "https://www.youtube.com/The Jamun Tree",
        "YoutubeRequired": true
    },
    "Location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.1004129603994!2d85.35591987554497!3d26.128268793360842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed113264d0998d%3A0x8c16f588cc7cf241!2sThe%20Jamun%20Tree!5e0!3m2!1sen!2sin!4v1706116722911!5m2!1sen!2sin",
    "Menu": [
        {
            "Description": "Awesome food",
            "Image": "https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
            "Name": "Veg Kabab",
            "Price": "300"
        },
        {
            "Description": "Awesome food",
            "Image": "https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000",
            "Name": "Veg Burger",
            "Price": "200"
        },
        {
            "Description": "Awesome food",
            "Image": "https://img.bestrecipes.com.au/iyddCRce/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg",
            "Name": "KFC",
            "Price": "150"
        },
        {
            "Description": "Awesome food",
            "Image": "https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
            "Name": "Nuddles",
            "Price": "300"
        },
        {
            "Description": "Awesome food",
            "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU",
            "Name": "Veg Pasta",
            "Price": "400"
        },
        {
            "Description": "Awesome food",
            "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZLeADreqYSmzVXIwf9_vgqtM8aDH-Z4z4A&usqp=CAU",
            "Name": "Momos",
            "Price": "600"
        }
    ],
    "Navbar": {
        "About": true,
        "Contact": true,
        "Gallery": true,
        "Home": true,
        "Restaurant": true,
        "Room": true,
        "Service": true,
        "TermCondition": true,
        "Testimonial": true
    },
    "Nearby": [
        {
            "Description": "Amzing place",
            "Image": "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS73csBjRrUtZXKqPI-1Z0vlwPo9zvX1yz94ddOOTsZxFPuOGaz63TfFK5M6XRmzJCA3xk7naWHg7znscQbdgQ",
            "Place": "Fort"
        },
        {
            "Description": "Amzing place",
            "Image": "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
            "Place": "Taj Mahal"
        },
        {
            "Description": "Amzing place",
            "Image": "https://static.toiimg.com/photo/53438383.cms",
            "Place": "Red Fort"
        },
        {
            "Description": "Amzing place",
            "Image": "https://www.holidify.com/images/tooltipImages/RAJMACHI.jpg",
            "Place": "Best Sight scene"
        },
        {
            "Description": "Amzing place",
            "Image": "https://media2.thrillophilia.com/images/photos/000/111/788/original/1580199653_shutterstock_1356909254.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true",
            "Place": "Mountain heights"
        }
    ],
    "NewsletterData": [],
    "PagesTitles": {
        "About": {
            "Description": "OUR PLACE, OUR SERVICES & OUR TEAM",
            "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/thejamuntree/images/Z1/page-bg.jpg",
            "Title": "THE HOTEL",
            "Video": ""
        },
        "Blogs": {
            "Description": "",
            "Image": "",
            "Title": "",
            "Video": ""
        },
        "Bookings": {
            "Description": "",
            "Image": "",
            "Title": "",
            "Video": ""
        },
        "Cancellation": {
            "Description": "THE PLACE, OUR SERVICES & OUR TEAM",
            "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/thejamuntree/images/Z1/page-bg.jpg",
            "Title": "CANCELLATION POLICY",
            "Video": ""
        },
        "Contact": {
            "Description": "OUR PLACE, OUR SERVICES & OUR TEAMS",
            "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/thejamuntree/images/Z1/page-bg.jpg",
            "Title": "CONTACT",
            "Video": ""
        },
        "Facilities": {
            "Description": "ELEVATING YOUR EXPERIENCE",
            "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/thejamuntree/images/Z1/page-bg.jpg",
            "Title": "FACILITIES",
            "Video": ""
        },
        "Faq": {
            "Description": "",
            "Image": "",
            "Title": "",
            "Video": ""
        },
        "Gallery": {
            "Description": "WHERE OPEN SKIES BECOME YOUR HORIZON",
            "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/thejamuntree/images/Z1/page-bg.jpg",
            "Title": "GALLERY",
            "Video": ""
        },
        "Nearby": {
            "Description": "Explore Wonders of food, fashion, and forts, just steps away from your accommodation in Mandrem.",
            "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/thejamuntree/images/Z1/page-bg.jpg",
            "Title": "NEARBY PLACES",
            "Video": ""
        },
        "Our Rooms": {
            "Description": "Comfortable Retreats for Every Traveller at SPARV resort in Mandrem.",
            "Image": "",
            "Title": "OUR ROOMS",
            "Video": ""
        },
        "Privacy": {
            "Description": "THE PLACE, OUR SERVICES & OUR TEAM",
            "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/thejamuntree/images/Z1/page-bg.jpg",
            "Title": "PRIVACY POLICY",
            "Video": ""
        },
        "Restaurant": {
            "Description": "",
            "Image": "",
            "Title": "",
            "Video": ""
        },
        "Rooms": {
            "Description": "WHERE COMFORT MEETS CONVENIENCE",
            "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/thejamuntree/images/Z1/page-bg.jpg",
            "Title": "ROOMS & SUITES",
            "Video": ""
        },
        "Services": {
            "Description": "",
            "Image": "",
            "Title": "",
            "Video": ""
        },
        "Teams": {
            "Description": "",
            "Image": "",
            "Title": "",
            "Video": ""
        },
        "Terms": {
            "Description": "THE PLACE, OUR SERVICES & OUR TEAM",
            "Image": "https://eazotel-client-images.s3.ap-south-1.amazonaws.com/thejamuntree/images/Z1/page-bg.jpg",
            "Title": "TERMS & CONDITIONS",
            "Video": ""
        },
        "Testimonial": {
            "Description": "",
            "Image": "",
            "Title": "",
            "Video": ""
        }
    },
    "PromotionalPopups": {
        "Heading": "head",
        "Image": "image",
        "Required": true,
        "Text": "text"
    },
    "Reviews": {
        "Analytics": "",
        "Clarity": "",
        "Console": "",
        "Facebook": "",
        "Google": "ChIJjZnQZDIR7TkRQfJ8zIj1Fow",
        "Instagram": "",
        "Pagespeed": "",
        "Pixel": "",
        "TagManager": "",
        "Tripadvisors": "",
        "Write": ""
    },
    "SectionTitles": {
        "1": {
            "Description": "12:00PM",
            "Title": "Checkin"
        },
        "2": {
            "Description": "10:00 AM",
            "Title": "Checkout"
        },
        "3": {
            "Description": "<p>Children up to 8 years old can stay on a complimentary basis (without an extra bed).</p><p>Children above eight are chargeable as per applicable rates.</p><p>Pets are not allowed.</p><p>Early check-in is subject to availability.</p><p>Breakfast is served from 7:00 AM to 10:00 AM.</p><p>Smoking is prohibited in rooms; please use designated outdoor areas.</p><p>Prior approval is required for events, weddings, and commercial activities.</p>",
            "Title": "Rules"
        },
        "4": {
            "Description": "",
            "Title": ""
        },
        "5": {
            "Description": "",
            "Title": ""
        },
        "6": {
            "Description": "",
            "Title": ""
        },
        "7": {
            "Description": "",
            "Title": ""
        },
        "8": {
            "Description": "",
            "Title": ""
        },
        "About": {
            "Description": "Descrpition",
            "Title": "About"
        },
        "Bookings": {
            "Description": "",
            "Title": ""
        },
        "Facilities": {
            "Description": "Relax in comfort and style at your mandrem retreat with our facilities by the pool.",
            "Title": "FACILITIES"
        },
        "Gallery": {
            "Description": "Explore our world captured through lenses",
            "Title": "GALLERY"
        },
        "Insta": {
            "Description": "",
            "Title": ""
        },
        "Nearby": {
            "Description": "Explore Wonders of food, fashion, and forts, just steps away from your accommodation in Mandrem.",
            "Title": "NEARBY PLACES"
        },
        "OurRooms": {
            "Description": "Comfortable Retreats for Every Traveller at SPARV resort in Mandrem.",
            "Title": "OUR ROOMS"
        },
        "Rooms": {
            "Description": "Utmost Luxury at Mandrem Retreat Beach Resort",
            "Title": "ROOMS ACCOMMODATION"
        },
        "Services": {
            "Description": "",
            "Title": ""
        },
        "Testimonial": {
            "Description": "",
            "Title": ""
        }
    },
    "SectionsVisible": {
        "About": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Blogs": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Booking": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Contact": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Facility": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Faq": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Gallery": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Home": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Nearby": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Reservation": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Restaurant": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Rooms": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Services": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Spa": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Teams": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "TermsConditions": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        },
        "Testimonial": {
            "AboutUs": true,
            "Banner": true,
            "Blogs": true,
            "Facilities": true,
            "HotelAd": true,
            "Images": true,
            "Insta": true,
            "Map": true,
            "Nearby": true,
            "Rooms": true,
            "Teams": true,
            "Testimonials": true,
            "Whatsapp": true,
            "YoutubeVideo": true
        }
    },
    "SeoOptimisation": [
        {
            "Data": {
                "Description": "Home  description",
                "Title": "Home Page",
                "keyword": "Keyword"
            },
            "PageName": "Home"
        },
        {
            "Data": {
                "Description": "About description",
                "Title": "About Page",
                "keyword": "Keyword"
            },
            "PageName": "About"
        },
        {
            "Data": {
                "Description": "Contact description",
                "Title": "Contact Page",
                "keyword": "Keyword"
            },
            "PageName": "Contact"
        },
        {
            "Data": {
                "Description": "Nearby description",
                "Title": "Nearby Page",
                "keyword": "Keyword"
            },
            "PageName": "Nearby Attraction"
        },
        {
            "Data": {
                "Description": "Facilities description",
                "Title": "Facilities Page",
                "keyword": "Keyword"
            },
            "PageName": "Facilities"
        },
        {
            "Data": {
                "Description": "Gallery description",
                "Title": "Gallery Page",
                "keyword": "Keyword"
            },
            "PageName": "Gallery"
        },
        {
            "Data": {
                "Description": "Rooms description",
                "Title": "Rooms Page",
                "keyword": "Keyword"
            },
            "PageName": "Rooms"
        },
        {
            "Data": {
                "Description": "Reservations",
                "Title": "Reservations",
                "keyword": "Keyword"
            },
            "PageName": "Reservations"
        },
        {
            "Data": {
                "Description": "Terms description",
                "Title": "Terms Page",
                "keyword": "Keyword"
            },
            "PageName": "Terms and condition"
        },
        {
            "Data": {
                "Description": "Services description",
                "Title": "Services Page",
                "keyword": "Keyword"
            },
            "PageName": "Services"
        },
        {
            "Data": {
                "Description": "Restaurants description",
                "Title": "Restaurants Page",
                "keyword": "Keyword"
            },
            "PageName": "Restaurants"
        },
        {
            "Data": {
                "Description": "Testimonials description",
                "Title": "Testimonials Page",
                "keyword": "Keyword"
            },
            "PageName": "Testimonials"
        },
        {
            "Data": {
                "Description": "Teams description",
                "Title": "Teams Page",
                "keyword": "Keyword"
            },
            "PageName": "Teams"
        },
        {
            "Data": {
                "Description": "Blogs description",
                "Title": "Blogs",
                "keyword": "Keyword"
            },
            "PageName": "Blogs"
        },
        {
            "Data": {
                "Description": "Blogs description",
                "Title": "Faq page",
                "keyword": "Keyword"
            },
            "PageName": "Faq"
        },
        {
            "Data": {
                "Description": "Blogs description",
                "Title": "Terms and Condition",
                "keyword": "Keyword"
            },
            "PageName": "Cancellation"
        }
    ],
    "Services": [
        {
            "Image": "https://media-cdn.tripadvisor.com/media/photo-s/1c/68/00/c0/wooden-cabins-ac.jpg",
            "Text": "best place to stay",
            "Title": "Best Stay Place"
        },
        {
            "Image": "https://imgmedia.lbb.in/media/2020/03/5e6fa0adcdf431136ea4aeb9_1584373933388.jpg",
            "Text": "a library",
            "Title": "The Library"
        },
        {
            "Image": "https://hips.hearstapps.com/hmg-prod/images/ghk010123homeminifeature-005-6414864bc1ef0.png?crop=1.00xw:0.783xh;0,0.217xh&resize=640:*",
            "Text": "We Have best Kitchen",
            "Title": "The Kitchen"
        },
        {
            "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWtUDNBr8fnKDkfSnZ3Feg_vRm2x8G7fsGX3LReydCEO30w_56cWiZZhjEnuL7oA6U1Wo&usqp=CAU",
            "Text": "We provide cab service",
            "Title": "Cab service"
        },
        {
            "Image": "https://media2.thrillophilia.com/images/photos/000/111/788/original/1580199653_shutterstock_1356909254.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true",
            "Text": "We Have best sight view",
            "Title": "The Tea Point"
        }
    ],
    "Slugs": {
        "About": {
            "PageName": "about.html",
            "PageTitle": "About",
            "SeoData": 1,
            "Slug": "About",
            "sectionVisible": "About"
        },
        "Blogs": {
            "PageName": "404.html",
            "PageTitle": "Blogs",
            "SeoData": 13,
            "Slug": "Blogs",
            "sectionVisible": "Blogs"
        },
        "Cancellation": {
            "PageName": "cancellation.html",
            "PageTitle": "Cancellation",
            "SeoData": 15,
            "Slug": "Cancellation-Policy",
            "sectionVisible": "About"
        },
        "Contact": {
            "PageName": "contact.html",
            "PageTitle": "Contact",
            "SeoData": 2,
            "Slug": "Contact",
            "sectionVisible": "Contact"
        },
        "Facilities": {
            "PageName": "facility.html",
            "PageTitle": "Facilities",
            "SeoData": 4,
            "Slug": "Facilities",
            "sectionVisible": "Facility"
        },
        "Faq": {
            "PageName": "404.html",
            "PageTitle": "Faq",
            "SeoData": 14,
            "Slug": "Faq",
            "sectionVisible": "Faq"
        },
        "Gallery": {
            "PageName": "gallery1.html",
            "PageTitle": "Gallery",
            "SeoData": 5,
            "Slug": "Gallery",
            "sectionVisible": "Gallery"
        },
        "Nearby_Attraction": {
            "PageName": "404.html",
            "PageTitle": "Nearby",
            "SeoData": 3,
            "Slug": "Nearby-Attraction",
            "sectionVisible": "Nearby"
        },
        "Privacy": {
            "PageName": "privacy.html",
            "PageTitle": "Privacy",
            "SeoData": 8,
            "Slug": "Privacy-Policy",
            "sectionVisible": "About"
        },
        "Reservations": {
            "PageName": "404.html",
            "PageTitle": "Gallery",
            "SeoData": 7,
            "Slug": "Reservations",
            "sectionVisible": "Reservation"
        },
        "Restaurants": {
            "PageName": "404.html",
            "PageTitle": "Restaurant",
            "SeoData": 10,
            "Slug": "Restaurants",
            "sectionVisible": "Restaurant"
        },
        "Rooms": {
            "PageName": "rooms-category.html",
            "PageTitle": "Rooms",
            "SeoData": 6,
            "Slug": "Rooms",
            "sectionVisible": "Rooms"
        },
        "Services": {
            "PageName": "404.html",
            "PageTitle": "Services",
            "SeoData": 9,
            "Slug": "Services",
            "sectionVisible": "Services"
        },
        "Teams": {
            "PageName": "404.html",
            "PageTitle": "Teams",
            "SeoData": 12,
            "Slug": "Teams",
            "sectionVisible": "Teams"
        },
        "Terms_and_condition": {
            "PageName": "terms.html",
            "PageTitle": "Terms",
            "SeoData": 8,
            "Slug": "Terms-And-Conditions",
            "sectionVisible": "About"
        },
        "Testimonials": {
            "PageName": "404.html",
            "PageTitle": "Testimonial",
            "SeoData": 11,
            "Slug": "Testimonials",
            "sectionVisible": "Testimonial"
        }
    },
    "Team": [
        {
            "Designation": "Owner",
            "Name": "Stuart",
            "Text": "Hello Guys, I m Stuart",
            "url": "https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
        },
        {
            "Designation": "Manager",
            "Name": "Alex",
            "Text": "Hello Guys, I m Alex",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsB24jf0J49bJ5q44gByglBeN4hqr87envEztPiCRB_8tXhlANIeQMUR_78hy7vXs1BzY&usqp=CAU"
        },
        {
            "Designation": "Jr. Manager",
            "Name": "George",
            "Text": "Hello Guys, I m George",
            "url": "https://tirururbanbank.com/wp-content/uploads/2017/04/team1.jpg"
        }
    ],
    "TermsConditions": [
        {
            "Privacy": "<div class=\"explore-content ml-30\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<p>The Jamun Tree respects your right to privacy. Any personal information that you share with us, like your name, date of birth, address, marital status, telephone number, credit card particulars and the like, shall be entitled to privacy and kept confidential. The Jamun Tree assures you that your personal information shall not be used or disclosed, save for the purpose of doing the intended business with you, or if required to be disclosed under the due process of law. The Jamun Tree assures you that in the event of your personal information being shared with its holding company, such sharing of information shall be for the purpose of doing the intended business with you..</p>\n\n\t\t\t\t\t\t\t<p>The Jamun Tree reserves its rights to collect, analyse and disseminate aggregate site usage patterns of all its visitors with a view to enhancing services to its visitors. This includes sharing the information with its holding company as a general business practice. In the course of its business The Jamun Tree may hold on-line contests and surveys as permitted by law and it reserves its right to use and disseminate the information so collected to enhance its services to the visitors. This shall also include sharing the information with its holding company as a general business practice. If you have any questions or concerns regarding your privacy issues, please do not hesitate to contact The Jamun Tree at thejamuntree@thejamuntree.com While The Jamun Tree assures you that it will do its best to ensure the privacy and security of your personal information, it shall not be responsible in any manner whatsoever for any violation or misuse of your personal information by unauthorised persons consequent to misuse of the internet environment.</p>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<p>The Jamun Tree reserves its rights to revise this privacy policy from time to time at its discretion with a view to making the policy more user friendly. In the design of our website, we have taken care to draw your attention to this privacy policy so that you are aware of the terms under which you may decide to share your personal information with us should you choose to share your personal information with us, The Jamun Tree will assume that you have no objections to the terms of this privacy policy. When you make a reservation on thejamuntree.com, you will be asked to enter personal information in order to secure your reservation. This information is submitted to our booking partner and our Web Hosting provider. The Jamun Tree and these service providers WILL NOT sell or distribute any personal information about you or any other individual traveler. The name, address and phone number you provide may be used for marketing or quality assurance purposes for the benefit of The Jamun Tree. While you will receive an e-mail confirmation whenever you make a reservation on-line, you will not receive any unsolicited e-mail as a result of making a reservation on our site. On thejamuntree.com, we strive to ensure that the most secure encryption technology is used, to allow you to book your travel reservations without the worry of someone misusing any To make your reservation planning more convenient, we use what is known as a \"cookie\", which allows the system to temporarily remember your travel dates and preferences during each visit to the site. Cookies also allow us to track the more frequently visited pages of thejamuntree.com, which helps us to improve the site for your benefit. Cookies are not programs that will corrupt your computer or damage your files. The cookies used do not reveal your personal identity, nor can they capture personal or private data. Our cookies automatically expire as soon as you leave our site. If you do not want to accept cookies while on our site, please consult your Internet browser settings for more information. However, if you decide to not accept cookies while visiting thejamuntree.com, you may not be able to complete certain transactions.</p>\n\t\t\t\t\t\t<p>The thejamuntree.com site does contain external links that will take you away from thejamuntree.com to our travel partners. We are not responsible for the privacy practices or the content of these sites. Disclaimer: Electronic transmissions including the internet are public media and any use of such media public and not not private. Information related to or arising from such use public or the property of this collecting information and not personal or private information.</p>\n\t\t\t\t\t\t<h2>SITE USE AGREEMENT</h2>\n\t\t\t\t\t\t<p>This is a binding legal agreement. Bihar Hotels Limited - Hotels Division reserves the right to change this Agreement at any time without notice and such changes will become effective immediately upon posting the same at this space on this website. By using, viewing, transmitting, caching, storing, and/or otherwise utilising this site and/or its contents in any way, you have agreed to each and all of the terms and conditions listed below, and waive any right to claim ambiguity or error in this agreement. Bihar Hotels Limited - Hotels Division, and / or its holding, subsidiaries, associate companies or subsidiaries to subsidiaries or such other investment companies (in India or abroad) reserve their respective rights to revise these Terms and Conditions at any time by updating this posting. You should visit this page periodically to re-appraise yourself of the Terms and Conditions, because they are binding on all users of this Website. If you do not agree to this agreement, you may leave this site. Please print and retain a copy of this agreement for your benefit. Cookies are not programs that will corrupt your computer or damage your files. The cookies ownership: This Site has been created for your information, education, entertainment and communication This Site and all components hereof, include without limitation text, images and audio, are copyrighted by Bihar Hotels Limited - Hotels Division Electronic Disclaimers: Bihar Hotels Limited - Hotels Division and its affiliates, subsidiaries, other related entities, and each of their officers, directors, agents and employees (collectively, the \"Hosts\" are not responsible for telephone, electric, electronic, network, Internet, computer, hardware or software program malfunctions, failures, delays or difficulties, or late, lost, stolen, illegible, incomplete, garbled, misdirected, mutilated or postage due mail, e-mail, form postings, connections, messages or entries, or the security of any and all such matters. Further, the Hosts are not responsible for incorrect or inaccurate entry information, whether caused by internet users or by any of the equipment or programming associated with or utilised in the Site or by any technical or human error which may occur in the processing of any information related to the Site. Bihar Hotels Limited - Hotels Division may prohibit you from participating in or utilising the Site if at its sole discretion you show a disregard for this Agreement or act in an unsportsmanlike manner, with intent to annoy, abuse, threaten, or harass any other person, or in any other disruptive manner. If for any reason any portion or the whole of the Site is not capable of running as planned, including due to infection caused by computer virus, bugs, tampering, unauthorised intervention, fraud, technical failures, or any other causes beyond the reasonable control of the Hosts which corrupt or affect the administration, security, fairness, integrity, or proper conduct of this Site, or if your conduct fails to conform with this Site use Agreement or for any reason whatsoever the Hosts reserves the right (but not the obligation) at its sole discretion, to prohibit any individual from using the Site, and to cancel, terminate, modify or suspend the Site or any portion thereof and void all of his or her data from the Site. You also agree that the Hosts are not responsible or liable in any way for injury, loss or damage to your computer or interception or use of your credit card information related to or resulting from use of the Site or any sites, services or materials linked or related thereto or there from, or use of \"test\" or real booking mechanisms at any time, and also are not responsible or liable in any way for any injury, loss, claim or damage relating to or resulting from any part of this Site or the booking mechanism operating or not operating on computers or networks used by entrant or communicating with such computers or networks.</p>\n\t\t\t\t\t\t<h2>USE OF SITE MATERIAL</h2>\n\t\t\t\t\t\t<p>All logos, brands and marks appearing in this site, except as otherwise noted, are properties either owned, or used under license, by Bihar Hotels Limited - Hotels Division and / or its associate entities who feature on this website. The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited. You may not sell or modify the content of this Web Site or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective organisation's or entities written permission.</p>\n\t\t\t\t\t\t<h2>ACCEPTABLE SITE USE</h2>\n\t\t\t\t\t\t<h2>A. Security Rules</h2>\n\t\t\t\t\t\t<p>Visitors are prohibited from violating or attempting to violate the security of the Web site, including, without limitation,(1) accessing data not intended for such user or logging into a server or account which the user is not authorised to access,(2) attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorisation, (3) attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus or \"Trojan horse\" to the website, overloading, \"flooding\", \"mail bombing\" or \"crashing\", or (4) sending unsolicited electronic mail, including promotions and/or advertising of products or services. Violations of system or network security may result in civil or criminal liability. Bihar Hotels Limited - Hotels Division and / or its associate entities will have the right to investigate occurrences that they suspect as involving such violations and will have the right to involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.</p>\n\t\t\t\t\t\t<h2>B. General Rules</h2>\n\t\t\t\t\t\t<p>Visitors may not use the Web Site in order to transmit, distribute, store or destroy material (a) that could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law or regulation, (b) in a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others or violate the privacy or publicity of other personal rights of others, or (c) that is libellous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful.</p>\n\t\t\t\t\t\t<h2>Submission of Your Information:</h2>\n\t\t\t\t\t\t<p>Facts relating to use of this Site, and any information submitted, are not confidential or private. Also, when you submit information to Bihar Hotels Limited - Hotels Division in your use of this Site, you thereby (a) represent and warrant that such information is complete, truthful, and accurate, that you own all rights in such information, that the information is entirely your own original, unpublished work, is not based in whole or in part upon any pre-existing work or work of any other person does not violate or infringe in any way any copyright, trademark, trade name, service mark or any other statutory, common law or other proprietary or personal right or interest, is not abusive, obscene, profane, explicit, threatening or illegal, and agree to indemnify, defend and hold the Hosts harmless from and against any such claim and relinquish, release and assign all rights in and title to such information, (b) acknowledge that you (and not the Hosts) are solely liable for any damage resulting from infringement of copyrights, proprietary rights, or any other harm arising from their submission and Bihar Hotels Limited - Hotels Division's subsequent use of the information, (c) automatically grant Bihar Hotels Limited - Hotels Division a worldwide, royalty-free, exclusive right and license to use, reproduce, publish, distribute and such information (in whole or in part, in any media now known or used or heretofore known or used at any time, and in perpetuity), although you acknowledge that Bihar Hotels Limited - Hotels Division has no obligation whatsoever to use, reproduce, publish, distribute or display the information. Further, Bihar Hotels Limited - Hotels Division reserves the right to monitor and review transmissions, use and information related to such use to ensure that Bihar Hotels Limited - Hotels Division policies are followed and otherwise as a necessary incident to the provision of this Site or to protect Bihar Hotels Limited - Hotels Division's rights and property. Bihar Hotels Limited - Hotels Division may also monitor and review stored transmissions without restriction and you hereby acknowledge and consent to such monitoring. Passwords are known to Bihar Hotels Limited - Hotels Division</p>\n\t\t\t\t\t\t<h2>Trademark Notice:</h2>\n\t\t\t\t\t\t<p>Unless indicated otherwise, all names, logos and trademarks are owned by Bihar Hotels Limited - Hotels Division and can't be used by anyone for any purpose without the express written agreement of Bihar Hotels Limited - Hotels Division</p>\n\t\t\t\t\t\t<h2>Idea Submission:</h2>\n\t\t\t\t\t\t<p>Our policy is not to accept unsolicited ideas about new marketing, advertising or products this policy, we hope to avoid confusion about our ownership of new concepts created by our employees. Please do not send us any creative material of any kind.</p>\n\t\t\t\t\t    <h2>Links:</h2>\n\t\t\t\t\t    <p>Links to other site we think maybe of interest to you are provided for your convenience. By providing these links, we are not endorsing, sponsoring or recommending such sites or the materials disseminated by or services provided by them, and are not responsible for the materials, services or other situations at or related to or from any other site.</p>\n\t\t\t\t        <h2>Other Content and Use Disclaimers:</h2>\t\n\t\t\t\t        <p>We do not represent, warrant, covenant or agree that what everything you see here is error free, accurate or complete. Neither we nor our consultants on this Site shall be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of this Site. You agree that your use of this site is at your sole risk. The content and services provide by this site are provided \"as is\". Bihar Hotels Limited - Hotels Division makes no representations, warranties or endorsements regarding the accuracy, reliability, usefulness or completeness of the content of the site or any site linked to it, or that the site will be error or virus free or continuously available. To the maximum extent permissible by law, Bihar Hotels Limited - Hotels Division disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Bihar Hotels Limited - Hotels Division does not warrant that this site, any sites linked to it, or the server that makes it available is free of computer \"viruses.\"</p>\n\t\t\t\t\t    <h2>Limitation of Liability:</h2>\n\t\t\t\t\t    <p>Bihar Hotels Limited - Hotels Division will not be liable for damages of any kind, including without limitation special, incidental, indirect or consequential damages, arising out of your access to, or inability to access, this site or your use of, or reliance upon, this site or the content hereof, or any damages whatsoever resulting from loss of use, data or profits, whether or not advised of the possibility of such damages, and on any theory of liability. In addition, Bihar Hotels Limited - Hotels Division has no duty to update this Site or the content hereof and shall not be liable for any failure to update such information. Some states do not allow the exclusion of implied warranties or the limitation or exclusion of liability for incidental and consequential damages. If, however, despite the exclusions contained in this Agreement, the Hosts, or any of them, should be found liable for any loss or damage which arises out of or is connected in any way with this Site, such Host(s)'s liability shall not exceed the amount of any fees and/or charges paid by you to such Host(s) for the services and/or information with respect to which liability is found.</p>\n\t\t\t\t\t    <h2>Release and Indemnity:</h2>\n\t\t\t\t\t    <p>By utilising this Site, all users acknowledge and agree that the Hosts are released, discharged and held harmless from and are not responsible or liable for any liability with respect to all aspects of this Site (including without limitation, any illness, losses, litigation, personal injury, death, property damage, and claims based on publicity rights, defamation, or invasion of privacy, reasonable attorneys' fees and court costs) that may occur from use of this Site or the acceptance, possession, use or misuse of information, materials, services or products related hereto or acquired here from. Bihar Hotels Limited - Hotels Division reserves the right at any time and without liability to restrict or refuse access to this Site and its materials and services to anybody. Bihar Hotels Limited - Hotels Division further reserves the right to seek any form of relief, including without limitation attorneys' fees, related to fraudulent or illegal activity connected with use of this Site.</p>\n\t\t\t\t\t    <h2>Jurisdiction:</h2>\n\t\t\t\t\t    <p>The products and/or services described in and provided by this Site may not be available in your country. If use of this Site and/or viewing or use of any material herein violates or infringes any applicable law in your jurisdiction(s), you are not authorised to view or use this Site and must exit immediately. You are viewing and/or use of this Site constitutes your representation that are unconditionally and without limitation permitted to view and use this Site and the Hosts may rely upon such representation. If any disputes arise regarding your use of our Site, such disputes shall be resolved in accordance with the laws of and in the Courts located in Muzaffarpur, Bihar, India, without giving effect to the principles of conflicts of law thereof. If any provision of this agreement is unlawful, void, or unenforceable, that provision shall be deemed severable from this agreement and shall not affect the validity and enforceability of any remaining provisions. This is the entire agreement between the parties.</p>\n\t\t\t\t\t\n\t\t\t\t\t\t</div>"
        },
        {
            "Cancellation": "<div class=\"explore-content ml-30\">\n\t\t\t\t\t\t  \n\t\t\t\t\t\t   <p>You can cancel your booking by calling our Customer Support helpline on 7634915745</p>\n\t                        <h4>If a booking having less than 10 room nights is cancelled:</h4>\n\t                        <p></p><li>More than 24 hours before check-in date: FREE CANCELLATION</li>\n\t                           <li>0-24 hours before check-in date: 1 night cost will be charged as cancellation fee.</li>\n\t                           <li>In case of no show: Entire booking cost will be charged as cancellation fee.\n</li>\n\t                          <p></p>\n\t                          <h4>If a booking having at least 10 room-nights is cancelled:</h4>\n\t                          <p></p><li>More than 7 days before check-in date: FREE CANCELLATION</li>\n\t                             <li>0-7days before check-in date: 1 night cost will be charged as cancellation fee.</li>\n\t                             <li>In case of no show: Entire booking cost will be charged as cancellation fee.</li>\n\t                          <p></p>\n\t                          <p>Refund shall be initiated within 48 hours of receiving the request and the payment would be credited within 5-7 working days via the same mode as used while making the booking.</p>\n\t\t\t\t\t  </div>"
        },
        {
            "TermsServices": "<div class=\"explore-content ml-30\">\n\t\t\t\t\t\t \n\t\t\t\t\t\t    <p>This is a legal agreement between you, either an individual subscriber, customer, member, or user of at least 18 years of age or a single entity (\"you\", or collectively \"users\") or otherwise capable of entering into and performing legal agreements stating the terms that govern your use of the The Jamun Tree Platform, services and networks owned or controlled by Casa2 Stays Private Limited that allow a User to book a room in the Hotels and/or other properties associated with The Jamun Tree. In this agreement \"The Jamun Tree\" refers to the corporate entity Casa2 Stays Private Limited as well as its website www.The Jamun Tree.com and mobile application and other services as the context provides. This agreement - together with all updates, additional terms, software licenses, and all of The Jamun Tree rules and policies including but not limited to privacy policy, cancellation and refund policy - collectively constitute the \"Agreement\" between you and The Jamun Tree. Your continued use of the The Jamun Tree website constitutes your binding acceptance of the Terms and conditions and all other policies updated from time to time. You must accept and abide by these terms as presented to you: changes, additions, or deletions are not acceptable, and The Jamun Tree may refuse access to The Jamun Tree services for noncompliance with any part of this agreement.</p>\n\t\t\t\t\t        <p>When using the The Jamun Tree, You will be subject to any additional posted policies, guidelines or rules applicable to specific services and features which may be posted from time to time (the \"Policies\"). All such Policies are hereby incorporated by reference into these Terms. In the case of any inconsistency between these Terms of Use and any other document that has been incorporated by reference herein, these Terms of Use shall supersede all such documents mentioned above.</p> \n\t\t\t\t\t        <p>The Jamun Tree reserves the right, at The Jamun Tree' discretion, to change, modify, add, or remove portions of these Terms at any time by posting the amended Terms to the The Jamun Tree. Please check these Terms and any Policies periodically for changes. The Jamun Tree reserves the right to update and change the TERMS OF USE from time to time without notice or acceptance by you, however, The Jamun Tree will use its commercially reasonable efforts to include notices regarding any such updates or changes to this TERMS OF USE on the Platform. Your continued use of the The Jamun Tree after the posting of changes constitutes your binding acceptance of such changes. Except as stated elsewhere, such amended Terms or fees will automatically be effective.</p>\n\t\t\t\t\t        <p>These “Terms of Use” apply to the services provided by The Jamun Tree on its website or application (collectively known as “Platform”), and applies to all Users of the The Jamun Tree Platform.</p>\n                            <h2>1. GENERAL</h2>\t\n                            <p>This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.</p>\n\t\t\t\t\t        <p>This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and user agreement for access or usage of The Jamun Tree Platform.</p>\n\t\t\t\t\t        <p>Your use of the The Jamun Tree and services and tools are governed by the following terms and conditions as applicable including the applicable policies which are incorporated herein by way of reference. By mere use of the Website, You shall be contracting with The Jamun Tree and these terms and conditions including the policies constitute Your binding obligations, with The Jamun Tree.</p>\n                            <p>For the purpose of these Terms of Use, wherever the context so requires \"You\" or \"User\" shall mean any natural or legal person who has agreed to become a viewer on the Website by providing Registration Data while registering on the Website as Registered User using the computer systems. The term \"We\", \"Us\", \"Our\"  shall mean The Jamun Tree. .</p>\t\t\t\t\t \n\t\t\t\t\t        <h2>2. ABOUT The Jamun Tree</h2>\n\t\t\t\t\t        <p>The Jamun Tree is preferred hotel brand for the modern Indian traveler, working with the intent to make great hospitality affordable. To ensure that you get consistently high level of service, all our hotels and B&amp;Bs follow strict standard operating procedures when it comes to housekeeping, laundry or F&amp;B, and entire staff​ ​undergoes regular training and auditing.</p>\n\t\t\t\t\t        <h2>3. MEMBERSHIP ELIGIBILITY</h2>\n\t\t\t\t\t        <p>Use of the Platform is available only to persons who can form legally binding contracts under Indian Contract Act, 1872. Persons who are \"incompetent to contract\" within the meaning of the Indian Contract Act, 1872 including minors, un-discharged insolvents etc. are not eligible to use the Platform.</p>\n\t\t\t\t\t        <p>The content on the Platform is not meant for children and therefore it is not advisable for children to be visiting/accessing/becoming a member of the Platform. The Jamun Tree reserves the right to terminate your membership and / or refuse to provide you with access to the Platform if it is brought to The Jamun Tree's notice or if it is discovered that you are under the age of 18 years.</p>\n\t\t\t\t\t        <h2>4. USER RESPONSIBILITY</h2>\n\t\t\t\t\t        <p>You assume all responsibility for the use of The Jamun Tree Platform. You also waive all claims against The Jamun Tree, its officers, directors, employees, suppliers, and programmers that may arise from the use of the The Jamun Tree Platform.</p>\n\t                        <h2>5. COMMUNICATIONS</h2>\n\t                        <p>When You use the Platform or send emails or other data, information or communication to us, You agree and understand that You are communicating with us through electronic records and You consent to receive communications via electronic records from us periodically and as and when required. We may communicate with you by email or by such other mode of communication, electronic or otherwise.\n\nIf You send any communications or materials to the The Jamun Tree Platform by electronic mail or otherwise, including any comments, data, questions, suggestions, or the like, all such communications are and will be treated as, non-confidential and non-proprietary. Thus, the User gives up any claim that any use of such material violates any of the User's rights including moral rights, privacy rights, proprietary or other property rights, publicity rights, rights to credit for material or ideas, or any other right, including the right to approve the way The Jamun Tree uses such material.</p>\n\t                        \n\t                        <h2>6. DISCLAIMER</h2>\n\t                        <p>The Jamun Tree does not represent or endorse the accuracy or reliability of any advice, opinion, statement, or other information displayed or distributed through the Content on the Platform. You acknowledge that any reliance upon any such opinion, advice, statement, memorandum, or information shall be at your sole risk. The Jamun Tree reserves the right, in its sole discretion, to correct any errors or omissions in any portion of the Platform.\n\nYou also acknowledge that The Jamun Tree Platform provides intermediary services in order to facilitate hotel services to you. The Jamun Tree is not the last-mile service provider to you and therefore, The Jamun Tree shall not be or deemed to be responsible for any lack or deficiency of services provided by any person you shall engage or hire or appoint pursuant to or resulting from, the material available in The Jamun Tree Platform.\n\nThe Jamun Tree shall not be liable to you or to any other person for any direct, indirect, incidental, punitive or consequential loss, damage, cost or expense of any kind whatsoever and howsoever caused from out of your usage of this Platform.\n\nIf for any reason, law does not permit exclusions of liability then, the liability of the The Jamun Tree shall be limited to such amount paid by the user and retained by the The Jamun Tree for the transaction in question.</p>\n\t                       <h2>7. TERMINATION</h2> \n\t                       <p>You agree that The Jamun Tree may, in its sole and absolute discretion and without notice or liability to you or any third party, immediately terminate your User ID as a viewer, and remove or discard from the Platform. Grounds for such termination may include, but are not limited to:</p>\n\t                        <p>(a) extended periods of inactivity,</p>\n\t                        <p>(b) violating or acting inconsistently with the letter or spirit of this terms of use,</p>\n\t                        <p>(c) discontinuance or material modification of the Service, or</p>\n\t                        <p>(d) requests by Content owners or law enforcement or other government agencies. The Jamun Tree may also in its sole discretion and at any time, discontinue the Platform with or without notice.</p>\n\t                       \n\t                        \n\t\t\t\t\t  </div>"
        }
    ]
});

  const [slugs, setslugs] = useState(websiteData.Slugs);
  const [PageTitle, setPageTitles] = useState(websiteData.PagesTitles);
  const [SeoData, setSeoData] = useState(websiteData.SeoOptimisation);
  const [Banner, setBanner] = useState(websiteData.Banner);
  const [Footer, setFooter] = useState(websiteData.Footer);
  const [About, setAbout] = useState(websiteData.About);
  const [Nearby, setNearby] = useState(websiteData.Nearby);
  const [DataToarrange, setDataToarrange] = useState(websiteData.DataToarrange);
  const [Menu, setMenu] = useState(websiteData.Menu);
  const [SectionTitles, setSectionTitles] = useState(websiteData.SectionTitles);
  const [Engine, setEngine] = useState(websiteData.Engine);
  const [Gallery, setGallery] = useState(websiteData.Gallery);
  const [Location, setLocation] = useState(websiteData.Location);
  const [Links, setLinks] = useState(websiteData.Links);
  const [BunchImages, setBunchImages] = useState(websiteData.Images);
  const [TermsConditions, setTermsConditions] = useState(
    websiteData.TermsConditions
  );
  const [Chefs, setChefs] = useState(websiteData.Chefs);
  const [Blogs, setBlogs] = useState(websiteData.Blogs);
  const [Contacts, setContacts] = useState(websiteData.Contacts);
  const [Events, setEvents] = useState(websiteData.Events);
  const [Facilities, setFacilities] = useState(websiteData.Facilities);
  const [Faq, setFaq] = useState(websiteData.Faq);
  const [HotelAdvr, setHotelAdvr] = useState(websiteData.HotelAdvr);
  const [Navbar, setNavbar] = useState(websiteData.Navbar);
  const [PromotionalPopups, setPromotionalPopups] = useState(
    websiteData.PromotionalPopups
  );
  const [SectionsVisible, setSectionsVisible] = useState(
    websiteData.SectionsVisible
  );
  const [Services, setServices] = useState(websiteData.Services);
  const [NewsletterData, setNewsletterData] = useState(
    websiteData.NewsletterData
  );
  const [Advertisnment, setAdvertisnment] = useState(websiteData.Advertisnment);

  // WEBSITE DATA API
  // Rooms API
  const [Rooms, setRoom] = useState([]);
  const RoomsAPI = async () => {
    try {
      const response = await fetch(
        `https://nexon.eazotel.com/room/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6IkphbXVudHJlZUBlbWFpbC5jb20ifQ.HD1CfLGxM9czWFIWKXgYa_Sy5RUbPEPN3L7LEo7U878/27031389`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      // console.log(json)
      setRoom(json.data);
    } catch (error) {
      console.error("Error fetching check-in data:", error);
    }
  };
  // Reviews API
  const [Reviews, setReviews] = useState([]);
  const ReviewsAPI = async () => {
    try {
      const response = await fetch(
        `https://nexon.eazotel.com/google/reviews/68ead48a-93b8-437f-95b6-dcf821306140`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setReviews(json.Reviews);
    } catch (error) {
      console.error("Error fetching check-in data:", error);
    }
  };

  // Website Data API
  // const [WebsiteData, setWebsiteData] = useState([])
  const WebsiteDataAPI = async () => {
    try {
      const response = await fetch(
        `https://nexon.eazotel.com/cms/get/website/tjt28318704`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setBanner(json.WebsiteData.Banner);
      setLinks(json.WebsiteData.Links);
      setEngine(json.WebsiteData.Engine);
      setAbout(json.WebsiteData.About);
      setTermsConditions(json.WebsiteData.TermsConditions);
      setMenu(json.WebsiteData.Menu);
      setGallery(json.WebsiteData.Gallery);
      setNearby(json.WebsiteData.Nearby);
      setSeoData(json.WebsiteData.SeoOptimisation);
      setLocation(json.WebsiteData.Location);
      setDataToarrange(json.WebsiteData.DataToarrange);
      setPageTitles(json.WebsiteData.PagesTitles);
      setslugs(json.WebsiteData.Slugs);
      setBunchImages(json.WebsiteData.Images);
      setChefs(json.WebsiteData.Chefs);
      setBlogs(json.WebsiteData.Blogs);
      setContacts(json.WebsiteData.Contacts);
      setEvents(json.WebsiteData.Events);
      setFacilities(json.WebsiteData.Facilities);
      setFaq(json.WebsiteData.Faq);
      setHotelAdvr(json.WebsiteData.HotelAdvr);
      setNavbar(json.WebsiteData.Navbar);
      setPromotionalPopups(json.WebsiteData.PromotionalPopups);
      setSectionTitles(json.WebsiteData.SectionTitles);
      setSectionsVisible(json.WebsiteData.SectionsVisible);
      setServices(json.WebsiteData.Services);
      setFooter(json.WebsiteData.Footer);
      setNewsletterData(json.WebsiteData.NewsletterData);
      setAdvertisnment(json.WebsiteData.Advertisnment);
    } catch (error) {
      console.error("Error fetching check-in data:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        websiteData,
        slugs,
        PageTitle,
        SeoData,
        Banner,
        Footer,
        About,
        DataToarrange,
        Nearby,
        Menu,
        SectionTitles,
        Location,
        Engine,
        Gallery,
        Links,
        BunchImages,
        TermsConditions,
        Services,
        Chefs,
        Blogs,
        Contacts,
        Events,
        Facilities,
        Faq,
        HotelAdvr,
        Navbar,
        PromotionalPopups,
        SectionsVisible,
        NewsletterData,
        Advertisnment,
        // Reviews
        ReviewsAPI,
        Reviews,
        WebsiteDataAPI,
        RoomsAPI,
        Rooms,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default ContextProvider;
