import { CardProps } from '@/data/cards';
import React from 'react';

export type CardTypes = {
    card : CardProps
};

const Card = ({card} : CardTypes) => {
  const {id, image, title, description, tags} = card || {};
  return (
      <div className="w-full md:w-1/3 rounded overflow-hidden shadow-lg border">
        <img className="w-full h-60" src={image}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {
            tags.map((tag, i)=><span key={i} className="inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-green-600 hover:text-white transition-all duration-150">#{tag}</span>)
          }
        </div>
      </div>
  )
}

export default Card