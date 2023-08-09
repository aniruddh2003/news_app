import { Facebook, Fax, GitHub, Google, Home, Instagram, LinkedIn, Mail, Phone, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      class="text-center text-lg-start text-white"
      style={{ backgroundColor: "#002a3a", marginTop: "2rem" }}
    >
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <Link to="/" class="me-4 link-secondary">
            <Facebook style={{ color: "white" }} />
          </Link>
          <Link to="/" class="me-4 link-secondary">
            <Twitter style={{ color: "white" }} />
          </Link>
          <Link to="/" class="me-4 link-secondary">
            <Google style={{ color: "white" }} />
          </Link>
          <Link to="/" class="me-4 link-secondary">
            <Instagram style={{ color: "white" }} />
          </Link>
          <Link to="/" class="me-4 link-secondary">
            <LinkedIn style={{ color: "white" }} />
          </Link>
          <Link to="/" class="me-4 link-secondary">
            <GitHub style={{ color: "white" }} />
          </Link>
        </div>
      </section>
      <section class="/">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3 text-secondary"></i>First Hand Info
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Genre</h6>
              <p>
                <Link to="/business" class="text-decoration-none text-white">
                  Business
                </Link>
              </p>
              <p>
                <Link
                  to="/entertainment"
                  class="text-decoration-none text-white"
                >
                  Entertainment
                </Link>
              </p>
              <p>
                <Link to="/general" class="text-decoration-none text-white">
                  General
                </Link>
              </p>
              <p>
                <Link to="/health" class="text-decoration-none text-white">
                  Health
                </Link>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="mb-4"></h6>
              <p>
                <Link to="/science" class="text-decoration-none text-white">
                  Science
                </Link>
              </p>
              <p>
                <Link to="/sports" class="text-decoration-none text-white">
                  Sports
                </Link>
              </p>
              <p>
                <Link to="/technology" class="text-decoration-none text-white">
                  Technology
                </Link>
              </p>
              <p>
                <Link to="/" class="text-decoration-none text-white">
                  Help
                </Link>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <Home /> New York, NY 10012, US
              </p>
              <p>
                <Mail /> firsthandinfo@outlook.com
              </p>
              <p>
                <Phone /> + 91 923 151 1133
              </p>
              <p>
                <Fax /> + 91 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        class="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
      >
        © 2023 Copyright :{" "}
        <Link class="text-decoration-none text-white fw-bold" href="/">
          {" "}
          FirstHandInfo.com{" "}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
