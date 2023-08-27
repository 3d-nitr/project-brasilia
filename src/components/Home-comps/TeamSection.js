import React from "react";
import team_1 from "../../assets/team-1.jpg"
import team_2 from "../../assets/team-2.jpg"
import team_3 from "../../assets/team-3.jpg"
import team_4 from "../../assets/team-4.jpg"


const TeamSection = () => {
  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">
            Commitee
          </h6>
          <h1 class="mb-5">Organizing Committee</h1>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item">
              <div class="overflow-hidden">
                <img class="img-fluid" src={team_1} alt="" />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style={{ "margin-top": "-19px" }}
              >
                <a class="btn btn-square mx-1" href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-square mx-1" href="/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-square mx-1" href="/">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="team-item">
              <div class="overflow-hidden">
                <img class="img-fluid" src={team_2} alt="" />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style={{ "margin-top": "-19px" }}
              >
                <a class="btn btn-square mx-1" href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-square mx-1" href="/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-square mx-1" href="/">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="team-item">
              <div class="overflow-hidden">
                <img class="img-fluid" src={team_3} alt="" />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style={{ "margin-top": "-19px" }}
              >
                <a class="btn btn-square mx-1" href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-square mx-1" href="/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-square mx-1" href="/">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div class="team-item">
              <div class="overflow-hidden">
                <img class="img-fluid" src={team_4} alt="" />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style={{ "margin-top": "-19px" }}
              >
                <a class="btn btn-square mx-1" href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-square mx-1" href="/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-square mx-1" href="/">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
