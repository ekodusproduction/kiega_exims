"use client";
import React, { useEffect } from 'react';
import './home-banner.css';

export default function HomeBanner() {

    useEffect(() => {
        const intervalId = setInterval(() => {
          if (window.bootstrap && window.bootstrap.Carousel) {
            const carouselElement = document.querySelector('#carouselExampleAutoplaying');
            if (carouselElement) {
              new window.bootstrap.Carousel(carouselElement, {
                interval: 3000,
                ride: 'carousel',
              });
            }
            clearInterval(intervalId);
          }
        }, 100);
    }, []);
    
    return (
        <div className="banner-container">
            <div className="big-logo-area">
                <img src="/assets/big-logo.png" alt="kiega logo big" />
            </div>
            <div className="fruits-slider-container">
                <div className='fruite-slider-img-container'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/assets/fruit-img-1.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/fruit-img-2.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/rice-img-1.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
