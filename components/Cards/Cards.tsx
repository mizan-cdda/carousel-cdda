import React from 'react';
import Card, { CardTypes } from './Card';
import { CardProps } from '@/data/cards';

export type CardsPropsTypes = {
    mobile : boolean,
    desktop : boolean,
    tablet : boolean,
    startIndex : number,
    endIndex : number,
    carouselCards : CardProps[],
};

const cardsStyle = {
  className : "flex transition-all duration-500 md:duration-1000 ease-in-out gap-10 px-6",
  style : {},
  styleMob : {}, 
  styleTab : {}
};
const {className} = cardsStyle || {};



const Cards = ({mobile, carouselCards, startIndex, endIndex, desktop, tablet} : CardsPropsTypes) => {

  return (
        <div
            className={className}
            style={{
              transform: `translateX(-${startIndex * (100 / carouselCards.length)}%)`,
              width : `${(mobile && `${(carouselCards.length * 100)}%`) || (tablet && `${(carouselCards.length * 50)}%`) || (desktop && `${(carouselCards.length * 33.33)}%`)}`,
            }}
          >
            {carouselCards.map((card : CardProps) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
  )
}

export default Cards