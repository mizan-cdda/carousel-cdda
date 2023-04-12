import React, { useState, useEffect } from 'react';
import Card from './Card';
import { CardProps } from '@/data/cards';
import { cardsStyle } from '@/Types/cardsStylesTypes';
import { useScreenSizes } from '@/hooks/useScreenSizes';

export type CardsPropsTypes = {
    mobile : boolean,
    desktop : boolean,
    tablet : boolean,
    startIndex : number,
    endIndex : number,
    carouselCards : CardProps[],
};

const {className, desktopCardSize, mobileCardSize, tabletCardSize, style, styleMob, styleTab} = cardsStyle || {};



const Cards = ({mobile, carouselCards, startIndex, endIndex, desktop, tablet} : CardsPropsTypes) => {
  const {mobileScreen, tabletScreen, desktopLargeScreen} = useScreenSizes();
  const [cardsContainerStyle, setCardsContainerStyle] = useState({});

    // effect for styles state depending on device screen and different screen styles
  useEffect(() => {
    function handleResize() {
      // checking window width is mobile screen or not
      if (window.innerWidth < tabletScreen) {
        setCardsContainerStyle(styleMob)
      }else if(window.innerWidth >= tabletScreen && window.innerWidth < desktopLargeScreen){
        // checking window width is tab screen or not
        setCardsContainerStyle(styleTab)
      } 
      else {
        setCardsContainerStyle(style)
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileScreen, tabletScreen, desktopLargeScreen]);

  console.log(cardsContainerStyle);
  

  return (
          <div
            className={className}
            style={{
              transform: `translateX(-${startIndex * (100 / carouselCards.length)}%)`,
              width : `${(mobile && `${(carouselCards.length * mobileCardSize)}%`) || (tablet && `${(carouselCards.length * tabletCardSize)}%`) || (desktop && `${(carouselCards.length * desktopCardSize)}%`)}`,
              ...cardsContainerStyle
            }}
          >
            {carouselCards.map((card : CardProps) => (
              <Card key={card.id} card={card} />
            ))}
          </div> 
  )
}

export default Cards