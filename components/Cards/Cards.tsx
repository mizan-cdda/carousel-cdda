import React from 'react';
import Card from './Card';
import { CardProps } from '@/data/cards';
import { cardsStyle } from '@/Types/cardsStylesTypes';

export type CardsPropsTypes = {
    mobile : boolean,
    desktop : boolean,
    tablet : boolean,
    startIndex : number,
    endIndex : number,
    carouselCards : CardProps[],
};

const {className, desktopCardSize, mobileCardSize, tabletCardSize} = cardsStyle || {};



const Cards = ({mobile, carouselCards, startIndex, endIndex, desktop, tablet} : CardsPropsTypes) => {

  return (
        <div
            className={className}
            style={{
              transform: `translateX(-${startIndex * (100 / carouselCards.length)}%)`,
              width : `${(mobile && `${(carouselCards.length * mobileCardSize)}%`) || (tablet && `${(carouselCards.length * tabletCardSize)}%`) || (desktop && `${(carouselCards.length * desktopCardSize)}%`)}`,
            }}
          >
            {carouselCards.map((card : CardProps) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
  )
}

export default Cards