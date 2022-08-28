import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(1);
  let sliderPauseRef = useRef(false);
  const sliderRef = useRef();
  let slides;

  const handleSetSlide = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  //position slides based on activeSlide value
  const positionSlides = () => {
    slides = Array.from(document.querySelectorAll('.slide'));

    slides.forEach((slide) => {
      let offset = Number(slide.dataset.slide - activeSlide) * 100;
      slide.style.transform = `translateX(${offset}%)`;
    });
  };

  function handleBtnClick(e) {
    let offset = Number(e?.target.dataset.offset) || 1;

    if (slides.length <= activeSlide && offset === 1) {
      setActiveSlide(1);
      return;
    }
    if (activeSlide === 1 && offset === -1) {
      setActiveSlide(slides.length);
      return;
    }
    setActiveSlide((prev) => prev + offset);
  }

  //anytime active slide changes reposition the sildes
  useEffect(() => {
    positionSlides();
  }, [activeSlide]);

  /* auto scroll only kinda works - double mount issue makes it skip 2 slides on mount and after "mouseoff"
  - this can also make it overrun the slider length by 1
  */
  //change activeSlide every few seconds unless paused
  const autoScrollSlider = () => {
    setTimeout(() => {
      if (sliderPauseRef.current) return;
      if (slides.length <= activeSlide) {
        handleBtnClick();
        return;
      }
      if (sliderPauseRef.current) return;
      handleBtnClick();
    }, 5000);
  };

  //continually run autoscroll unless it is paused
  useEffect(() => {
    if (!slides) return;
    if (sliderPauseRef.current) return;
    autoScrollSlider();
  }, [activeSlide]);

  //add hover event listeners to pause slider auto-scrolling
  useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      sliderPauseRef.current = true;
      return;
    });

    sliderRef.current.addEventListener('mouseleave', () => {
      console.log('out');
      sliderPauseRef.current = false;
      //restart auto scroll
      autoScrollSlider();
      return;
    });
  }, []);

  return (
    <div
      ref={sliderRef}
      id={'slider'}
      className="w-full h-[38rem] bg-indigo-100 flex flex-col items-center justify-center "
    >
      <div className="flex  overflow-x-hidden flex-row w-1/2 h-12 items-center gap-4 justify-end">
        <div className="h-full  flex flex-row gap-3 w-auto items-center">
          <div
            onClick={() => handleSetSlide(1)}
            className={`slider-dot ${
              activeSlide === 1 ? 'slider-dot--active' : ''
            }`}
          ></div>
          <div
            onClick={() => handleSetSlide(2)}
            className={`slider-dot ${
              activeSlide === 2 ? 'slider-dot--active' : ''
            }`}
          ></div>
          <div
            onClick={() => handleSetSlide(3)}
            className={`slider-dot ${
              activeSlide === 3 ? 'slider-dot--active' : ''
            }`}
          ></div>
          <div
            onClick={() => handleSetSlide(4)}
            className={`slider-dot ${
              activeSlide === 4 ? 'slider-dot--active' : ''
            }`}
          ></div>
        </div>
        <button
          onClick={(e) => handleBtnClick(e)}
          data-offset={-1}
          className="btn rounded-full shadow-md h-8 w-8 bg-white text-black flex justify-center text-2xl ml-2 active:translate-y-[1px]  items-center"
        >
          {'<'}
        </button>
        <button
          onClick={(e) => handleBtnClick(e)}
          data-offset={1}
          className="btn rounded-full shadow-md h-8 w-8 bg-white text-black flex justify-center text-2xl active:translate-y-[1px] items-center "
        >
          {'>'}
        </button>
      </div>
      <div className="w-3/5 relative h-3/4 flex flex-row">
        <div className="relative h-full w-16  z-20 text-blue-300/50 -translate-x-8">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>

        <div className="flex flex-row  h-full relative w-full overflow-x-hidden">
          <div
            data-slide={1}
            className="slide"
          >
            <p className="text-3xl font-[500] tracking-wide leading-loose">
              {
                "Now that we've switched to a remote environment, with the use of Trello, we can now limit the number of meetings we have regarding specific projects and turn to Trello for updates instead."
              }
            </p>
            <div className="flex flex-row w-[90%] justify-between items-center relative ">
              <span className="flex flex-row gap-2 ">
                <h4 className="text-base font-semibold ">Haley Ennes</h4>
                <p>{'- HR Manager'}</p>
              </span>
              <span className="">
                <h4 className="text-base font-semibold">Marketing</h4>
              </span>
              <div className="relative w-32 h-24">
                <Image
                  alt="company-logo"
                  layout="fill"
                  className="object-contain "
                  src={require('../../public/images/slider-logo2.png')}
                />
              </div>
            </div>
          </div>
          <div
            data-slide={2}
            className="slide"
          >
            <p className="text-3xl font-[500] tracking-wide leading-loose">
              {
                'Everyone loves it; it has democratized our finance function. In some ways Trello shattered hierarchy and brought us together.'
              }
            </p>
            <div className="flex flex-row w-[90%] justify-between items-center relative ">
              <span className="flex flex-row gap-2">
                <h4 className="text-base font-semibold">Barbara Sunday</h4>
                <p>{'- Finance, eBay'}</p>
              </span>
              <span className="">
                <h4 className="text-base font-semibold">Marketing</h4>
              </span>
              <div className="relative w-32 h-24">
                <Image
                  alt="company-logo"
                  layout="fill"
                  className="object-contain "
                  src={require('../../public/images/slider-logo1.jpeg')}
                />
              </div>
            </div>
          </div>
          <div
            data-slide={3}
            className="slide"
          >
            <p className="text-3xl font-[500] tracking-wide leading-loose">
              {
                'Very simple to use, great automation and keeps me on track with all I need to do. I also like that it can be shared with others.'
              }
            </p>
            <div className="flex flex-row w-[90%] justify-between items-center relative ">
              <span className="flex flex-row gap-2">
                <h4 className="text-base font-semibold">John Bentley</h4>
                <p>{'- Philadelphia Red Wings'}</p>
              </span>
              <span className="">
                <h4 className="text-base font-semibold">Manager</h4>
              </span>
              <div className="relative w-32 h-24">
                <Image
                  alt="company-logo"
                  layout="fill"
                  className="object-contain "
                  src={require('../../public/images/slider-logo3.png')}
                />
              </div>
            </div>
          </div>
          <div
            data-slide={4}
            className="slide"
          >
            <p className="text-3xl font-[500] tracking-wide leading-loose">
              {
                'Trello makes it easy to keep everyone on the same page. As changes happen, the real-time updates with email notifications have been key.'
              }
            </p>
            <div className="flex flex-row w-[90%] justify-between items-center relative ">
              <span className="flex flex-row gap-2">
                <h4 className="text-base font-semibold">Eric Schlosser</h4>
                <p>{'- HR Manager'}</p>
              </span>
              <span className="">
                <h4 className="text-base font-semibold">Marketing</h4>
              </span>
              <div className="relative w-32 h-24">
                <Image
                  alt="company-logo"
                  layout="fill"
                  className="object-contain "
                  src={require('../../public/images/slider-logo4.jpeg')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
