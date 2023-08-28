import React from "react";

const AboutSection = () => {
  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div
            class="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ "min-height": "400px" }}
          >
            <div class="position-relative h-100">
              <img
                class="img-fluid position-absolute w-100 h-100"
                src="img/bg-hero.png"
                alt=""
                style={{ "object-fit": "cover" }}
              />
            </div>
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 class="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 class="mb-4">
              Welcome to <span class="text-primary">NBC-2023</span>
            </h1>

            <p class="mb-4">
              National Bioengineering Conference 2023 theme is “Bioengineering
              in Healthcare, Environment & Agriculture”. The goal of the
              NBC-2023 conference is to create a wonderful ambience of
              scientific knowledge for the exchange of ideas and develop more
              technologies to solve global challenges such as:
            </p>
            <div class="row gy-2 gx-4 mb-4">
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Treatment
                  of diseases
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Efficient
                  agricultural activities
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Environment
                  management
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Solution to
                  food crisis, wastage of food resources
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Easy access
                  to phytopharmaceuticals, among others
                </p>
              </div>
            </div>
            <a class="btn btn-primary py-3 px-5 mt-2" href="/">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
