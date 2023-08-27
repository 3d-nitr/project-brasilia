import React from "react";
import Spinner from "../components/Home-comps/Spinner.js";
import TopBar from "../components/Home-comps/TopBar";
import HomeNavbar from "../components/Home-comps/Navbar";
import HeroSection from "../components/Home-comps/HeroSection";
import AboutSection from "../components/Home-comps/AboutSection";
import FeesSection from "../components/Home-comps/FeesSection";
import ProcessSection from "../components/Home-comps/ProcessSection";
import TeamSection from "../components/Home-comps/TeamSection";
import TestimonialSection from "../components/Home-comps/TestimonialSection";
import FooterSection from "../components/Home-comps/FooterSection";

const HomePage = () => {
  return (
    <>
      <Spinner />
      <TopBar />
      <div class="container-fluid position-relative p-0">
        <HomeNavbar />
        <HeroSection />
      </div>
      <AboutSection />
      <FeesSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialSection />
      <FooterSection />
      <a href="#top" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default HomePage;
