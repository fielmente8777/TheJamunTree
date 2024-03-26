import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Facility from "./pages/facility/Facility";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import Rooms from "./pages/rooms/Rooms";
import "./style/main.css";
import "./style/responsive.css";

import NoteContext from "./context/notes/NoteContext";
import Cancellation from "./pages/cancellation/Cancellation";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";

// const

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  const { websiteData, slugs, PageTitle, SeoData } = useContext(NoteContext);
  // Return slugs

  const slug = Object.values(slugs).map((page) => page.Slug);

  // Key value Slugss
  const slugToPageName = Object.fromEntries(
    Object.entries(slugs).map(([key, value]) => [value.Slug, value.PageName])
  );

  //Seo Data
  const transformedData = SeoData.reduce((result, page) => {
    result[page.PageName] = page.Data;
    return result;
  }, {});

  const PageToComponent = {
    "about.html": (
      <About
        Pagetitle={PageTitle.About}
        Seodata={transformedData["About"]}
        slugs={slug}
      />
    ),
    "contact.html": (
      <Contact
        Pagetitle={PageTitle.Contact}
        Seodata={transformedData["Contact"]}
      />
    ),
    "facility.html": (
      <Facility
        Pagetitle={PageTitle.Facilities}
        Seodata={transformedData["Facilities"]}
      />
    ),
    "gallery1.html": (
      <Gallery
        Pagetitle={PageTitle.Gallery}
        Seodata={transformedData["Gallery"]}
      />
    ),
    "rooms-category.html": (
      <Rooms Pagetitle={PageTitle.Rooms} Seodata={transformedData["Rooms"]} />
    ),

    "cancellation.html": (
      <Cancellation
        Pagetitle={PageTitle.Cancellation}
        Seodata={transformedData["Cancellation"]}
      />
    ),
    "terms.html": (
      <Terms
        Pagetitle={PageTitle.Terms}
        Seodata={transformedData["Terms and condition"]}
      />
    ),
    "privacy.html": (
      <Privacy
        Pagetitle={PageTitle.Privacy}
        Seodata={transformedData["Cancellation"]}
      />
    ),
    // Add more mappings as needed
  };

  return (
    <>
      <Navbar slug={slug} />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home Seodata={transformedData["Home"]} slugs={slug} />}
        />

        {slug.map((slug) => (
          <Route
            key={slug}
            path={`/${slug}`}
            exact
            // You can replace the component with the appropriate component for each route
            element={PageToComponent[slugToPageName[slug]]}
          />
        ))}
        <Route path="*" element={<Home Seodata={transformedData["Home"]} />} />
      </Routes>
      <Footer slug={slug} />
    </>
  );
}

export default App;
