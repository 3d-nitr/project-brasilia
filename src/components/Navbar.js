import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 border">
      <a href="/" class="navbar-brand p-0">
        <h1 class="text-primary m-0">
          <i class="fa fa-map-marker-alt me-3"></i>NBC-2023
        </h1>
        {/* <img src="img/logo.png" alt="Logo"></img> */}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="fa fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0">
          <a href="index.html" class="nav-item nav-link active">
            Home
          </a>
          <a href="about.html" class="nav-item nav-link">
            About
          </a>

          <div class="nav-item dropdown">
            <a
              href="/"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div class="dropdown-menu m-0">
              <a href="destination.html" class="dropdown-item">
                Dates
              </a>
              <a href="booking.html" class="dropdown-item">
                Booking
              </a>
              <a href="team.html" class="dropdown-item">
                Guides
              </a>
              <a href="testimonial.html" class="dropdown-item">
                Testimonial
              </a>
              <a href="404.html" class="dropdown-item">
                404 Page
              </a>
            </div>
          </div>
          <a href="contact.html" class="nav-item nav-link">
            Contact
          </a>
        </div>
        <a
          href="https://nitrkl.ac.in/docs/Conference/BM/10072023170850041F.pdf"
          class="btn btn-primary rounded-pill py-2 px-4"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
