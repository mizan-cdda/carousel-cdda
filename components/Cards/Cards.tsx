import React from 'react';
import Card, { CardTypes } from './Card';
import { CardProps } from '@/data/cards';

export type CardsPropsTypes = {
    mobile : boolean,
    startIndex : number,
    endIndex : number,
    carouselCards : CardProps[],
};

const Cards = ({mobile, carouselCards, startIndex, endIndex} : CardsPropsTypes) => {

        // decide what to render
  let content = null;

  if(!mobile) content = carouselCards.map((card : CardProps) => (
              <Card key={card.id} card={card} />
            ));
  
  if(mobile) content = carouselCards.slice(startIndex, endIndex).map((card) => (
              <Card key={card.id} card={card} />
            ));
  return (
        <div
            className={`flex columns-1 md:columns-3 transition-all duration-500 ease-in-out box-border`}
            style={{
              transform: `${!mobile ? `translateX(-${startIndex * (100 / carouselCards.length)}%)` : "none"}`,
              width : `${!mobile ? `${(carouselCards.length * 33.33)}%` : "100%"}`,
            }}
          >
            {content}
          </div>
  )
}

export default Cards