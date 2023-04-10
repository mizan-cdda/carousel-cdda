import { CardProps } from '@/data/cards';
import React, { useEffect, useState } from 'react';
import {style} from "../../data/cardStyle";

export type CardTypes = {
    card : CardProps
};

const Card = ({card} : CardTypes) => {
  const {id, image, title, description, tags} = card || {};

  // styles states
  const [cardStyleState, setCardStyleState] = useState({});
  const [cardBodyStyleState, setCardBodyStyleState] = useState({});
  const [thumbnailStyleState, setThumbnailStyleState] = useState({});
  const [titleStyleState, setTitleStyleState] = useState({});
  const [descriptionStyleState, setDescriptionStyleState] = useState({});
  const [tagsStyleState, setTagsStyleState]  = useState({});
  const [tagStyleState, setTagStyleState] = useState({});


  // styles
  const { card : cardStyle } = style || {};
  const {body : bodyStyle, style : cardStylePc, styleMob : cardStyleMob, styleTab:cardStyleTab} = cardStyle || {};
  const {thumbnail, title: bodyTitleStyle, description : bodyDescriptionStyle, tags : tagsStyle} = bodyStyle || {};
  const {style : bodySectionStyle, className : bodyClassName, styleMob : bodyStyleMob, styleTab : bodyStyleTab} = bodyStyle || {};
  const {className: thumbnailClassName, style : thumbnailStyle, styleMob : thumbnailStyleMob, styleTab : thumbnailStyleTab} = thumbnail || {};
  const {className: titleClassName, style : titleStyle, styleMob : titleStyleMob, styleTab : titleStyleTab} = bodyTitleStyle || {};
  const {className: descriptionClassName, style : descriptionStyle, styleMob : descriptionStyleMob, styleTab : descriptionStyleTab} = bodyDescriptionStyle || {};
  const {className : tagsContainerClassName, style : tagsContainerStyle, tag, styleMob : tagsStyleMob, styleTab : tagsStyleTab } = tagsStyle || {};
  const {className : tagClassName, style : tagStyle, styleMob : tagStyleMob, styleTab : tagStyleTab} = tag || {};
  

  // style handlers
    const defaultScreenView = () =>{
        setCardStyleState(cardStylePc)
        setCardBodyStyleState(bodySectionStyle);
        setThumbnailStyleState(thumbnailStyle);
        setTitleStyleState(titleStyle);
        setDescriptionStyleState(descriptionStyle);
        setTagsStyleState(tagsContainerStyle);
        setTagStyleState(tagStyle);
    };

    const mobileScrrenView = () =>{
      setCardStyleState(cardStyleMob);
        setCardBodyStyleState(bodyStyleMob);
        setThumbnailStyleState(thumbnailStyleMob);
        setTitleStyleState(titleStyleMob);
        setDescriptionStyleState(descriptionStyleMob);
        setTagsStyleState(tagsStyleMob);
        setTagStyleState(tagStyleMob);
    }

    const tabScreenView = () =>{
        setCardStyleState(cardStyleTab);
        setCardBodyStyleState(bodyStyleTab);
        setThumbnailStyleState(thumbnailStyleTab);
        setTitleStyleState(titleStyleTab);
        setDescriptionStyleState(descriptionStyleTab);
        setTagsStyleState(tagsStyleTab);
        setTagStyleState(tagStyleTab);
    };


  // effect for styles state depending on device screen
  useEffect(() => {
    function handleResize() {
      // checking window width is mobile screen or not
      if (window.innerWidth < 640) {
        mobileScrrenView();
      }else if(window.innerWidth < 1048){
        // checking window width is tab screen or not
        tabScreenView();
      } 
      else {
        defaultScreenView();
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
      <div className={cardStyle.className} style={cardStyleState}>
        <img className={thumbnailClassName} src={image} alt={title} style={thumbnailStyleState}/>
        <div className={bodyClassName} style={cardBodyStyleState}>
          <div className={titleClassName} style={titleStyleState}>{title}</div>
          <p className={descriptionClassName} style={descriptionStyleState}>
            {description}
          </p>
        </div>
        <div className={tagsContainerClassName} style={tagsStyleState}>
          {
            tags.map((tag, i)=><span key={i} className={`${tagClassName}`} style={tagStyleState}>#{tag}</span>)
          }
        </div>
      </div>
  )
}

export default Card