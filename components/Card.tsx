import React from 'react';

export type CardTypes = {
    card : {
      id: number;
      image: string;
    title: string;
    description: string;
    tags: string[];
    }
};

const Card = ({card} : CardTypes) => {
  const {id, image, title, description, tags} = card || {};
  return (
      // <div className="w-1/3 rounded overflow-hidden shadow-lg">
      <div className="md:w-1/3 rounded overflow-hidden shadow-lg border">
        <img className="w-full max-h-60" src={image}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {
            tags.map((tag, i)=><span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>)
          }
        </div>
      </div>
  )
}

export default Card