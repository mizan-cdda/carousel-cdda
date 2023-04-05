import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight, BsDashLg } from "react-icons/bs";
import {MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked} from "react-icons/md";
import Card from "../Card";
import { carousel as carouselData } from "@/data/carousel";
import Navigation from "./Navigation";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const {nextPrev, cards : carouselCards, navigation} = carouselData || {};
  const {} = navigation || {};

  // effect for detecting screen sizes
  useEffect(() => {
    function handleResize() {
      setCurrentPage(0);
      // checking window width is mobile screen or not
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const previousPage = () => {
    const page =
      (currentPage - 1 + Math.ceil(carouselCards.length / cardsPerPage)) %
      Math.ceil(carouselCards.length / cardsPerPage);
    setCurrentPage(page);
  };

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

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden w-full px-12">
          <div
            className="flex columns-1 md:columns-3 gap-4 transition-all duration-300 ease-in-out"
            // style={{
            //   transform: `translateX(-${startIndex * (100 / cards.length)}%)`,
            // }}
          >
            {carouselCards.slice(startIndex, endIndex).map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
        <button
          onClick={previousPage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 text-white hover:bg-green-500 transition-all duration-150"
        >
          <BsChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextPage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 text-white  hover:bg-green-500 transition-all duration-150"
        >
          <BsChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* navigation buttons */}
      {
        navigation.visible && <Navigation totalPage={totalPage} navigation={navigation} currentPage={currentPage} handleNavigate={handleNavigate}/>
      }
    </>
  );
};

export default Carousel;
