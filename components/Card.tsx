import { CardProps } from '@/data/cards';
import React from 'react';

export type CardTypes = {
    card : CardProps
};

const style = {
  card : {
    id : 1,
    className : "w-full md:w-1/3 shadow-lg",
    style : {marginTop : "20px", marginBottom : "20px", marginLeft : "40px", marginRight : "40px", overflow : "hidden", border: "1px solid gray", borderRadius: "5px"},
  
    body : {
      id : 1,
      className : "",
      style : {padding : "1.5rem 1rem"},

      thumbnail : {
      className : "",
      style : { width : "100%", height : "15rem"}
      },

      title : {
        className : "",
        style: {marginBottom : "0.5rem", fontWeight : "500", fontSize: "1.25rem"}
      },
  
      description : {
        className : "text-gray-700 text-base",
        style : {}
      },
  
      tags : {
        className : "",
        style : {paddingRight : "1.5rem", paddingLeft: "1.5rem", paddingTop : "1rem", paddingBottom : "0.5rem"},
        tag : {
          className : "inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-green-600 hover:text-white transition-all duration-150",
          style : {}
        }
      }
  }
  },
};

const Card = ({card} : CardTypes) => {
  const {id, image, title, description, tags} = card || {};

  // styles
  const { card : cardStyle } = style || {};
  const {body : bodyStyle} = cardStyle || {};
  const {thumbnail, title: bodyTitleStyle, description : bodyDescriptionStyle, tags : tagsStyle} = bodyStyle || {};
  const {className: thumbnailClassName, style : thumbnailStyle} = thumbnail || {};
  const {style : bodySectionStyle, className : bodyClassName} = bodyStyle || {};
  const {className: titleClassName, style : titleStyle} = bodyTitleStyle || {};
  const {className: descriptionClassName, style : descriptionStyle} = bodyDescriptionStyle || {};
  const {className : tagsContainerClassName, style : tagsContainerStyle, tag } = tagsStyle || {};
  const {className : tagClassName, style : tagStyle} = tag || {};
  
  return (
      <div className={cardStyle.className} style={cardStyle.style}>
        <img className={thumbnailClassName} src={image} alt={title} style={thumbnailStyle}/>
        <div className={bodyClassName} style={bodySectionStyle}>
          <div className={titleClassName} style={titleStyle}>{title}</div>
          <p className={descriptionClassName} style={descriptionStyle}>
            {description}
          </p>
        </div>
        <div className={tagsContainerClassName} style={tagsContainerStyle}>
          {
            tags.map((tag, i)=><span key={i} className={tagClassName} style={tagStyle}>#{tag}</span>)
          }
        </div>
      </div>
  )
}

export default Card