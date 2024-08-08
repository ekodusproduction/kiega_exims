"use client";
import './fruit-slider.css';
import { useEffect } from 'react';
import $ from 'jquery';
export default function FruitSlider(){

    
    useEffect(() => {
        (function ($) {
          $.fn.stack_slider = function (options) {
            // Slider core functions
            $("#slider-next").click(function () {
              var total = $(".intro-slide").length;
              $("#intro-slider .intro-slide:first-child")
                .hide()
                .appendTo("#intro-slider")
                .fadeIn();
              $.each($(".intro-slide"), function (index, dp_item) {
                $(dp_item).attr("data-position", index + 1);
              });
            });
    
            $("body").on(
              "click",
              "#intro-slider .intro-slide:not(:first-child)",
              function () {
                var get_slide = $(this).attr("data-class");
                $("#intro-slider .intro-slide[data-class=" + get_slide + "]")
                  .hide()
                  .prependTo("#intro-slider")
                  .fadeIn();
                $.each($(".intro-slide"), function (index, dp_item) {
                  $(dp_item).attr("data-position", index + 1);
                });
              }
            );
    
            // Drag
            $.fn.swipe = function (callback) {
              var touchDown = false,
                originalPosition = null,
                $el = $(this);
    
              function swipeInfo(event) {
                var x = event.originalEvent.pageX,
                  y = event.originalEvent.pageY,
                  dx;
    
                dx = x > originalPosition.x ? "right" : "left";
    
                return {
                  direction: {
                    x: dx
                  },
                  offset: {
                    x: x - originalPosition.x
                  }
                };
              }
    
              $el.on("touchstart mousedown", function (event) {
                touchDown = true;
                originalPosition = {
                  x: event.originalEvent.pageX,
                  y: event.originalEvent.pageY
                };
              });
    
              $el.on("touchend mouseup", function () {
                touchDown = false;
                originalPosition = null;
                flag = true;
              });
    
              $el.on("touchmove mousemove", function (event) {
                if (!touchDown) {
                  return;
                }
                var info = swipeInfo(event);
                callback(info.direction, info.offset);
              });
    
              return true;
            };
    
            // Disable image drag
            $("#slider img").on("dragstart", function (event) {
              event.preventDefault();
            });
    
            // Slider Methods
            var settings = $.extend(
              {
                color: "transparent",
                background: "transparent",
                autoPlay: true,
                autoPlaySpeed: 3000,
                dots: true,
                arrows: true,
                drag: true,
                direction: "horizontal"
              },
              options
            );
    
            // Dots
            if (settings.dots !== true) {
              $("#dp-dots").hide();
            }
    
            // Drag
            if (settings.drag == true) {
              var flag = true;
              $(".intro-slide").swipe(function (direction, offset) {
                if (offset.x > 30 && flag) {
                  flag = false;
                  $("#slider-next").click();
                }
                if (offset.x < -30 && flag) {
                  flag = false;
                  $("#slider-prev").click();
                }
              });
            }
    
            // Arrows
            if (settings.arrows !== true) {
              $("#slider-next, #slider-prev").hide();
            }
    
            // Slider autoplay
            if (settings.autoPlay == true) {
              setInterval(function () {
                $("#slider-next").click();
              }, settings.autoPlaySpeed);
            }
    
            // Slider direction
            if (settings.direction == "vertical") {
              $(".slider-wrap").addClass("vertical");
            }
    
            // Apply settings
            return this.css({
              color: settings.color,
              background: settings.background
            });
          };
        })($);
    
        // Initialize the slider
        $("#slider").stack_slider({
          autoPlaySpeed: 4000,
          autoPlay: true,
          dots: false,
          arrows: false,
          drag: true,
          direction: "vertical"
        });
    }, []);


    return (
        <section>
            <div id="slider">
                <div className="slider-wrap">
                <div id="intro-slider">
                    <div className="intro-slide" data-classname="1" data-position="1">
                        <div className="slide-overlay"></div>
                        <div className="poster-box" style={{background:"url(assets/khasi-mandarin.png) center center / 500px 500px no-repeat"}}>
                            <div className='khasi-mandarin'>
                                <h2>Khasi Mandarin</h2>
                            </div>
                        </div>
                    </div>
                    <div className="intro-slide" data-classname="2" data-position="2">
                        <div className="slide-overlay"></div>
                        <div className="poster-box" style={{background:"url(assets/pomegranate.png) center center / cover no-repeat"}}>
                            <div className='khasi-mandarin'>
                                <h2>Pomegranate</h2>
                            </div>
                        </div>
                    </div>
                    <div className="intro-slide" data-classname="3" data-position="3">
                        <div className="slide-overlay"></div>
                        <div className="poster-box" style={{background:"url(assets/watermelon.png) center center / cover no-repeat"}}>
                            <div className='khasi-mandarin'>
                                <h2>Watermelon</h2>
                            </div>
                        </div>
                    </div>
                    <div className="intro-slide" data-classname="4" data-position="4">
                        <div className="slide-overlay"></div>
                        <div className="poster-box" style={{background:"url(assets/musk-melon.png) center center / cover no-repeat"}}>
                            <div className='khasi-mandarin'>
                                <h2>Musk Melon</h2>
                            </div>
                        </div>
                    </div>
                    <div className="intro-slide" data-classname="5" data-position="5">
                        <div className="slide-overlay"></div>
                        <div className="poster-box" style={{background:"url(assets/mango-poster.png) center center / cover no-repeat"}}>
                            <div className='khasi-mandarin'>
                                <h2>Mango</h2>
                            </div>
                        </div>
                    </div>
                    <div className="intro-slide" data-classname="6" data-position="6">
                        <div className="slide-overlay"></div>
                        <div className="poster-box" style={{background:"url(assets/jackfruit.png) center center / cover no-repeat"}}>
                            <div className='khasi-mandarin'>
                                <h2>Jackfruit</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <span id="slider-next">
                    <img src="https://yudiz.com/codepen/stack-slider/arrow.png" alt="arrow-image" />
                </span>
                </div>
            </div>
        </section>
    )
}