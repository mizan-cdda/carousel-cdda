import React, { useState, useEffect, useRef, TouchEventHandler } from "react";
import Navigation from "./Navigation";
import {useScreenSizes} from "../../hooks/useScreenSizes";
import {SWIPE_THRESHOLD} from "../../utils/carouselConstants";
import { carousel as carouselData } from "@/data/carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Cards from "../Cards/Cards";

const UpdatedCarousel = () => {
  const {mobileScreen, tabletScreen, desktopLargeScreen} = useScreenSizes();
  
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [cardsPerPage, setCardsPerPage] = useState<number>(3);
  const {nextPrev, padding, cards : carouselCards, navigation} = carouselData || {};
  const [mobile, setMobile] = useState<boolean>(false);
  const [tablet, setTablet] = useState<boolean>(false);
  const [desktop, setDesktop] = useState<boolean>(false);

    const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // effect for detecting screen sizes
  useEffect(() => {
    function handleResize() {
      setCurrentPage(0);
      // checking window width is mobile screen or not
      if (window.innerWidth <= mobileScreen) {
        setMobile(true);
        setTablet(false);
        setDesktop(false);
        setCardsPerPage(1);
      }else if(window.innerWidth > mobileScreen && window.innerWidth < desktopLargeScreen){
         setMobile(false);
        setTablet(true);
        setDesktop(false);
        setCardsPerPage(2);
      }
      else {
        setMobile(false);
        setTablet(false);
        setDesktop(true);
        setCardsPerPage(4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileScreen, tabletScreen]);

  // prev page handler
  const previousPage = () => {
    const page =
      (currentPage - 1 + Math.ceil(carouselCards.length / cardsPerPage)) %
      Math.ceil(carouselCards.length / cardsPerPage);
    setCurrentPage(page);
  };

  // next page handler 
  const nextPage = () => {
    const page = (currentPage + 1) % Math.ceil(carouselCards.length / cardsPerPage);
    
    setCurrentPage(page);
  };

  const startIndex = currentPage * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, carouselCards.length);
  
  const totalPage = Math.ceil(carouselCards.length / cardsPerPage);

  const handleNavigate = (i: number) => {
    setCurrentPage(i);
  };

  // touch handlers
    const handleTouchStart : TouchEventHandler<HTMLDivElement> = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd : TouchEventHandler<HTMLDivElement> = (event) => {
    touchEndX.current = event.changedTouches[0].clientX;
    
    const touchDistance = touchEndX.current - touchStartX.current;
    
    if (Math.abs(touchDistance) > SWIPE_THRESHOLD) {
      if (touchDistance > 0) {
        previousPage();
      } else {
        nextPage();
      }
    }};
  
  
  return (
    <>
      <div className="relative overflow-hidden">
        <div className={`overflow-hidden w-full ${padding && "px-4 md:px-12"}`}  onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <Cards mobile={mobile} tablet={tablet} desktop={desktop} carouselCards={carouselCards} startIndex={startIndex} endIndex={endIndex}/>
        </div>
        {
          nextPrev && <><button
          onClick={previousPage}
          className={`hidden lg:block absolute top-1/2 ${!padding ? "left-8" : "left-0"} transform ${mobile ? "-translate-y-full" : "-translate-y-1/2"} z-10 p-2 rounded-full bg-gray-800 text-white hover:bg-green-500 transition-all duration-150`}
        >
          <BsChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextPage}
          className={`hidden lg:block absolute top-1/2  ${!padding ? "right-8" : "right-0"} transform ${mobile ? "-translate-y-full" : "-translate-y-1/2"} z-10 p-2 rounded-full bg-gray-800 text-white  hover:bg-green-500 transition-all duration-150`}
        >
          <BsChevronRight className="w-8 h-8" />
        </button></>
        }
      </div>

      {/* navigation buttons */}
      {
        navigation.visible && <Navigation totalPage={totalPage} navigation={navigation} currentPage={currentPage} handleNavigate={handleNavigate}/>
      }
    </>
  );
};

export default UpdatedCarousel;
