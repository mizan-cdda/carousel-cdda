import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Card from "../Card";
import { carousel as carouselData } from "@/data/carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const {nextPrev, padding, cards : carouselCards, navigation} = carouselData || {};
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [desktop, setDesktop] = useState(false);

  // effect for detecting screen sizes
  useEffect(() => {
    function handleResize() {
      setCurrentPage(0);
      // checking window width is mobile screen or not
      if (window.innerWidth < 640) {
        setMobile(true);
        setTablet(false);
        setDesktop(false);
        setCardsPerPage(1);
      }else if(window.innerWidth < 768){
         setMobile(false);
        setTablet(true);
        setDesktop(false);
        setCardsPerPage(2);
      } 
      else {
        setMobile(false);
        setTablet(false);
        setDesktop(true);
        setCardsPerPage(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

    // decide what to render
  let content = null;

  if(!mobile) content = carouselCards.map((card) => (
              <Card key={card.id} card={card} />
            ));
  
  if(mobile) content = carouselCards.slice(startIndex, endIndex).map((card) => (
              <Card key={card.id} card={card} />
            ));
      
  
  return (
    <>
      <div className="relative overflow-hidden">
        <div className={`overflow-hidden w-full ${padding && "px-4 md:px-12"}`}>
            <div
            className={`flex columns-1 md:columns-3 transition-all duration-500 ease-in-out box-border`}
            style={{
              transform: `${!mobile ? `translateX(-${startIndex * (100 / carouselCards.length)}%)` : "none"}`,
              width : `${!mobile ? `${(carouselCards.length * 33.33)}%` : "100%"}`,
            }}
          >
            {content}
          </div>
        </div>
        {
          nextPrev && <><button
          onClick={previousPage}
          className={`absolute top-1/2 ${!padding ? "left-8" : "left-0"} transform ${mobile ? "-translate-y-full" : "-translate-y-1/2"} z-10 p-2 rounded-full bg-gray-800 text-white hover:bg-green-500 transition-all duration-150`}
        >
          <BsChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextPage}
          className={`absolute top-1/2  ${!padding ? "right-8" : "right-0"} transform ${mobile ? "-translate-y-full" : "-translate-y-1/2"} z-10 p-2 rounded-full bg-gray-800 text-white  hover:bg-green-500 transition-all duration-150`}
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

export default Carousel;
