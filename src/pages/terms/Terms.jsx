import React, { useContext } from 'react'
import NoteContext from '../../context/notes/NoteContext';
import Banner from '../../components/Banner'
import { Helmet } from 'react-helmet'
import HTMLReactParser from 'html-react-parser'

const Terms = ({ Pagetitle, Seodata }) => {
    const { TermsConditions, Footer } = useContext(NoteContext);
    return (
        <>
            <Helmet>
                <link rel="icon" href={Footer.Logo} />
                <title>{Seodata.Title}</title>
                <meta name="description" content={Seodata.Description} />
            </Helmet>
            {/* <Banner text={Pagetitle["Title"]} Image={Pagetitle["Image"]} /> */}

            <section className="about-banner">
                <Banner text={Pagetitle["Title"]} Image={Pagetitle["Image"]} />
            </section>
            <section className="pages">
                <div className="container">
                    <h2>Terms & Conditions</h2>


                    {HTMLReactParser(TermsConditions[2].TermsServices)}


                    {/* <ol>
                        <li>Booking and Reservation:
                            <ul>
                                <li>Reservations can be made online through our website, in person, or via authorized third-party booking platforms.</li>
                                <li>
                                    Room rates and availability are subject to change without notice. It is advisable to confirm the current rates and availability before making a reservation.</li>
                                <li>All reservations require a valid credit card or advance payment to secure the booking.</li>
                            </ul>
                        </li>
                        <li>Check-In and Check-Out:
                            <ul>
                                <li>Check-in is from 14:00 onward, and check-out time is 12 noon.</li>
                                <li>Early check-in and late check-out are subject to availability and may incur additional charges.
                                </li>
                            </ul>
                        </li>
                        <li>Payment and Cancellation:
                            <ul>
                                <li>Payment for your stay, including taxes and any additional charges, must be settled upon check-in.
                                </li>
                                <li>Cancellation policies vary based on the rate plan chosen. Please review your reservation confirmation for specific cancellation terms.
                                </li>
                            </ul>
                        </li>
                        <li>Property Rules and Regulations:
                            <ul>
                                <li>Smoking is strictly prohibited inside all indoor areas of the Property. Designated smoking areas are available.
                                </li>
                                <li>Pets are prohibited if no prior arrangements have been made with the Property.
                                </li>
                                <li>Parties and gatherings that disturb the peace and comfort of other guests are not permitted.
                                </li>
                                <li>Please respect the Property's noise policies, especially during quiet hours.
                                </li>
                            </ul>

                        </li>
                        <li>Facilities and Amenities:
                            <ul>
                                <li>Use of the swimming pool at the best resort in Lumbini is subject to posted rules and hours of operation. Lifeguards may not be on duty; swim at your own risk.

                                </li>
                                <li>Sea-view rooms at Bhairahawa Resort are assigned based on availability and room category booked.

                                </li>
                            </ul>
                        </li>
                       
                        <li>Liability:
                            <ul>
                                <li>Bhairahawa Garden Resort is not liable for loss, theft, or damage to personal belongings during your stay.
                                </li>
                                <li>Guests are responsible for any damage to the Property or its facilities caused by their actions.</li>
                            </ul>
                        </li>
                        <li>Privacy and Data Protection:
                            <ul>
                                <li>By making a reservation at the best resort in Lumbini, you consent to collecting and using your personal information following our Privacy Policy.
                                </li>
                            </ul>
                        </li>
                        <li>Dispute Resolution:
                            <ul>
                                <li>Any disputes or claims arising from your stay at the Property shall be governed by the laws of the jurisdiction where the Property is located.
                                </li>
                                <li>All disputes shall be resolved through arbitration or mediation per applicable laws.
                                </li>
                            </ul>
                        </li>
                        <li>Modification of Terms:
                            <ul>
                                <li>
                                    Bhairahawa Garden Resort reserves the right to modify or update these Terms without prior notice. Please check our website for the most current version of the Terms.

                                </li>
                            </ul>
                        </li>
                    </ol>
                    <p>By booking a stay at the best resort in Lumbini, you acknowledge that you have read, understood, and agree to abide by these Terms and Conditions. If you do not agree with these Terms, please do not proceed with your reservation. Please contact our customer service team for assistance if you have any questions or concerns.
                    </p>

                    <strong>Bhairahawa Garden Resort, Nepal</strong> */}
                </div>

            </section>
        </>
    )
}

export default Terms
