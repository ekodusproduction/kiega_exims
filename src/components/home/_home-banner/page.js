"use client";
import React, { useEffect } from "react";
import "./home-banner.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeBanner() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap) {
      const carouselElement = document.querySelector(
        "#carouselExampleAutoplaying"
      );
      if (carouselElement) {
        new window.bootstrap.Carousel(carouselElement, {
          interval: 3000,
          ride: "carousel",
        });
      }
    }
  }, []);

  return (
    <>
      <div className="floating-banner-fruits">
        <div className="mango-img">
          <img src="/assets/mango.png" alt="mango" />
        </div>
        <div className="lemon-img">
          <img src="/assets/lemon.png" alt="lemon" />
        </div>
      </div>
      <div className="banner-container section-divider">
        <div className="big-logo-area">
          <img src="/assets/big-logo.png" alt="kiega logo big" />
        </div>
        <div className="fruits-slider-container">
          <div className="fruite-slider-img-container">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/assets/fruit-img-1.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/fruit-img-2.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/rice-img-1.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
