document.addEventListener('DOMContentLoaded', function () {
    // Slider core functions
    function stackSlider(options) {
      const settings = Object.assign({
        color: "transparent",
        background: "transparent",
        autoPlay: true,
        autoPlaySpeed: 3000,
        dots: true,
        arrows: true,
        drag: true,
        direction: "horizontal"
      }, options);
  
      const sliderNext = document.querySelector("#slider-next");
      const sliderPrev = document.querySelector("#slider-prev");
      const introSlider = document.querySelector("#intro-slider");
      const introSlides = document.querySelectorAll(".intro-slide");
      const slider = document.querySelector("#slider");
      const sliderImages = slider.querySelectorAll("img");
  
      function updateSlidePositions() {
        introSlides.forEach((slide, index) => {
          slide.setAttribute("data-position", index + 1);
        });
      }
  
      sliderNext.addEventListener('click', function () {
        const firstSlide = introSlider.querySelector(".intro-slide:first-child");
        firstSlide.style.display = 'none';
        introSlider.appendChild(firstSlide);
        firstSlide.style.display = 'block';
        updateSlidePositions();
      });
  
      introSlider.addEventListener('click', function (event) {
        if (!event.target.classList.contains('intro-slide') || event.target === introSlider.firstElementChild) return;
  
        const getSlide = event.target.getAttribute("data-class");
        const targetSlide = introSlider.querySelector(`.intro-slide[data-class="${getSlide}"]`);
        targetSlide.style.display = 'none';
        introSlider.insertBefore(targetSlide, introSlider.firstChild);
        targetSlide.style.display = 'block';
        updateSlidePositions();
      });
  
      // Disable image drag
      sliderImages.forEach(img => {
        img.addEventListener('dragstart', function (event) {
          event.preventDefault();
        });
      });
  
      // Dots
      if (!settings.dots) {
        document.querySelector("#dp-dots").style.display = 'none';
      }
  
      // Arrows
      if (!settings.arrows) {
        sliderNext.style.display = 'none';
        sliderPrev.style.display = 'none';
      }
  
      // AutoPlay
      if (settings.autoPlay) {
        setInterval(function () {
          sliderNext.click();
        }, settings.autoPlaySpeed);
      }
  
      // Slider direction
      if (settings.direction === "vertical") {
        document.querySelector(".slider-wrap").classList.add("vertical");
      }
  
      // Drag
      if (settings.drag) {
        let touchDown = false;
        let originalPosition = null;
  
        function swipeInfo(event) {
          const x = event.touches ? event.touches[0].pageX : event.pageX;
          const dx = x > originalPosition.x ? "right" : "left";
          return {
            direction: { x: dx },
            offset: { x: x - originalPosition.x }
          };
        }
  
        introSlides.forEach(slide => {
          slide.addEventListener('touchstart', handleStart, false);
          slide.addEventListener('mousedown', handleStart, false);
  
          function handleStart(event) {
            touchDown = true;
            originalPosition = { x: event.touches ? event.touches[0].pageX : event.pageX };
          }
  
          slide.addEventListener('touchend', handleEnd, false);
          slide.addEventListener('mouseup', handleEnd, false);
  
          function handleEnd() {
            touchDown = false;
            originalPosition = null;
          }
  
          slide.addEventListener('touchmove', handleMove, false);
          slide.addEventListener('mousemove', handleMove, false);
  
          function handleMove(event) {
            if (!touchDown) return;
            const info = swipeInfo(event);
            if (info.offset.x > 30) {
              sliderNext.click();
            } else if (info.offset.x < -30) {
              sliderPrev.click();
            }
          }
        });
      }
  
      // Apply settings
      slider.style.color = settings.color;
      slider.style.background = settings.background;
    }
  
    stackSlider({
      autoPlaySpeed: 6000,
      autoPlay: false,
      dots: true,
      arrows: true,
      drag: true,
      direction: "vertical"
    });
});
  