import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight, BsDashLg } from "react-icons/bs";
import Card from "./Card";
import { cards } from "../data/cards";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    function handleResize() {
      setCurrentPage(0);
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
      (currentPage - 1 + Math.ceil(cards.length / cardsPerPage)) %
      Math.ceil(cards.length / cardsPerPage);
    setCurrentPage(page);
  };

  const nextPage = () => {
    const page = (currentPage + 1) % Math.ceil(cards.length / cardsPerPage);
    setCurrentPage(page);
  };

  const startIndex = currentPage * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, cards.length);
  const totalPage = Math.ceil(cards.length / cardsPerPage);

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
            {cards.slice(startIndex, endIndex).map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
        <button
          onClick={previousPage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 text-white"
        >
          <BsChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextPage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 text-white"
        >
          <BsChevronRight className="w-5 h-5" />
        </button>
      </div>
      {/* navigation buttons */}
      <div className="flex justify-center mt-8">
        {[...Array(totalPage)].map((n, i) => (
          <BsDashLg
            key={i}
            size={24}
            className={`${i === currentPage &&
              "text-green-600"} transition-all duration-150 cursor-pointer`}
            onClick={() => handleNavigate(i)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
