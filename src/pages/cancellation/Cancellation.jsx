import React, { useContext } from 'react'
import NoteContext from '../../context/notes/NoteContext';
import { Helmet } from 'react-helmet'
import Banner from '../../components/Banner'
import HTMLReactParser from 'html-react-parser'
const Cancellation = ({ Pagetitle, Seodata }) => {
    const { TermsConditions, Footer } = useContext(NoteContext);
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
                    <h2>Cancellation Policy</h2>
                    {HTMLReactParser(TermsConditions[1].Cancellation)}
                </div>

            </section>
        </>
    )
}

export default Cancellation
