import React from "react";
import Spinner from "../components/Spinner";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeesSection from "../components/FeesSection";
import ProcessSection from "../components/ProcessSection";
import TeamSection from "../components/TeamSection";
import TestimonialSection from "../components/TestimonialSection";
import FooterSection from "../components/FooterSection";

const HomePage = () => {
  return (
    <>
      <Spinner />
      <div class="container-fluid position-relative p-0">
        <HeroSection />
      </div>
      <AboutSection id="about-section" />
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
