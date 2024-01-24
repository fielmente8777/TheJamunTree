import React, { useContext } from 'react'

import Banner from '../../components/Banner'
import NoteContext from '../../context/notes/NoteContext';
import { Helmet } from 'react-helmet'
import HTMLReactParser from 'html-react-parser'

const Privacy = ({ Pagetitle, Seodata }) => {

    const { TermsConditions, Footer } = useContext(NoteContext);


    console.log(TermsConditions[0])
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
            <section className="pages">
                <div className="container">
                    <h2>Privacy Policy</h2>

                    <p>This Privacy Policy outlines how Bhairahawa Garden Resort, Nepal ("we," "our," or "us") collects, uses, discloses, and protects your personal information. We are committed to safeguarding your privacy and ensuring the security of your data. By accessing our services, making reservations, or interacting with our website, you agree to the practices described in this Privacy Policy.</p>


                    {HTMLReactParser(TermsConditions[0].Privacy)}



                    {/* <ol>
                        <li>Information We Collect:
                            <ul>
                                <li>Personal Information: We may collect personal information, including but not limited to your name, contact details, address, payment information, and identification documents when you make reservations or use our services.</li>
                                <li>
                                    Website Usage Data: We collect non-personal information, such as your IP address, browser type, device information, and browsing patterns when you visit our website. This information helps us improve our website and services.</li>
                            </ul>
                        </li>
                        <li>How We Use Your Information:
                            <ul>
                                <li>Reservations and Services: We use your personal information to process reservations, provide services, and communicate with you about your stay.</li>
                                <li>Customer Support: We may use your information to respond to your inquiries and provide customer support.</li>
                                <li>Marketing and Promotions: With your consent, we may send you marketing materials, offers, and promotions. You can opt out of these communications at any time.</li>
                                <li>Analytics: We use website usage data to improve our website's functionality and user experience.</li>
                            </ul>
                        </li>
                        <li>Information Sharing:
                            <ul>
                                <li>We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                                </li>
                                <li>We may share your information with third-party service providers, such as payment processors and IT service providers, to assist in providing our services.
                                </li>
                                <li>We may share information with law enforcement or government authorities to comply with legal obligations or protect our rights and property.
                                </li>
                            </ul>
                        </li>
                        <li>Data Security:
                            <ul>
                                <li>We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                                </li>
                            </ul>
                        </li>
                        <li>Cookies and Tracking Technologies:
                            <ul>
                                <li>We use cookies and similar tracking technologies to enhance your website experience and gather usage data.
                                </li>
                                <li>You can manage your cookie preferences through your browser settings.
                                </li>
                            </ul>
                        </li>
                        <li>Links to Third-Party Sites:
                            <ul>
                                <li>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites
                                </li>
                            </ul>
                        </li>
                        <li>Children's Privacy:
                            <ul>
                                <li>Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children.
                                </li>
                            </ul>
                        </li>
                        <li>Your Rights:
                            <ul>
                                <li>You can access, correct, or delete your personal information.
                                </li>
                                <li>You can withdraw your consent for marketing communications at any time.
                                </li>
                            </ul>
                        </li>
                        <li>Changes to this Privacy Policy:
                            <ul>
                                <li>We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any significant changes.
                                </li>
                            </ul>
                        </li>
                        <li>Contact Us:
                            <ul>
                                <li>
                                    If you have questions or concerns regarding this Privacy Policy or our data practices, please contact us at(email ).
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <p>Please review this Privacy Policy regularly for updates. Your continued use of our services signifies your acceptance of any changes to this policy.
                    </p> */}
                </div>

            </section>


        </>
    )
}

export default Privacy
