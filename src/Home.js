import React from "react";
import "./Home.css";
import HomeHeader from "./HomeHeader";
import HomeLogos from "./HomeLogos";
import SchoolGraphic from "./SchoolGraphic";
import HomeTestimonial from "./HomeTestimonial";
import HomeServices from "./HomeServices";
import HomeCurrentPartners from "./HomeCurrentPartners";


function Home() {
    return (
        <div className="home" id="home">
            <HomeHeader />
            <HomeLogos />
            <SchoolGraphic />
            <HomeServices />
            <HomeCurrentPartners />
            <HomeTestimonial />
        </div>
    );
}

export default Home;
