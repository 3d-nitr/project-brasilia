import React from "react";

const ProcessSection = () => {
  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">
            Process
          </h6>
          <h1 class="mb-5">3 Easy Steps</h1>
        </div>
        <div class="row gy-5 gx-4 justify-content-center">
          <div
            class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: "100px", height: "100px" }}
              >
                <i class="fa fa-globe fa-3x text-white"></i>
              </div>
              <h5 class="mt-4">Call for abstracts</h5>
              <hr class="w-25 mx-auto bg-primary mb-1" />
              <hr class="w-50 mx-auto bg-primary mt-0" />
              <p class="mb-0">
                : Please send abstract (within 250 words) to
                bioengineering23@gmail.com{" "}
              </p>
            </div>
          </div>
          <div
            class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: "100px", height: "100px" }}
              >
                <i class="fa fa-dollar-sign fa-3x text-white"></i>
              </div>
              <h5 class="mt-4">Who should attend</h5>
              <hr class="w-25 mx-auto bg-primary mb-1" />
              <hr class="w-50 mx-auto bg-primary mt-0" />
              <p class="mb-0">
                 Students and Research scholars  Young faculty and scientists
                 Industry personnel
              </p>
            </div>
          </div>
          <div
            class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div class="position-relative border border-primary pt-5 pb-4 px-4">
              <div
                class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                style={{ width: "100px", height: "100px" }}
              >
                <i class="fa fa-plane fa-3x text-white"></i>
              </div>
              <h5 class="mt-4">Important dates</h5>
              <hr class="w-25 mx-auto bg-primary mb-1" />
              <hr class="w-50 mx-auto bg-primary mt-0" />
              <p class="mb-0">
                Abstract submission deadline: September 5th, 2023 Communication
                of acceptance: September 10th, 2023 Registration deadline:
                October 10th, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
