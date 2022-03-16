import React from "react";
import ProductNavbar from "./navbar/Navbar";
import "../partialCSS/homepage.scss";
import Footer from "./footer";
import Header from "./homePagePartials/Header";
import Features from "./homePagePartials/Feature";
import Solutions from "./homePagePartials/Solutions";
import Platform from "./homePagePartials/Platform";
import Partners from "./homePagePartials/Partners";

function Homepage({handleHomeView, navigate, setToDefaultNavigateSate}) {
  return (
    <div className="homepage">
      <ProductNavbar navigate={navigate} setToDefaultNavigateSate={setToDefaultNavigateSate} />
      <Header handleHomeView={handleHomeView} />
      <Features />
      <Solutions />
      <Platform handleHomeView={handleHomeView} />
      <Partners />
      <Footer />
    </div>
  )
}

export default Homepage;