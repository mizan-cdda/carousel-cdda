import { CardProps } from '@/data/cards';
import React, { useEffect, useState } from 'react';
import {style} from "../../data/cardStyle";
import { useScreenSizes } from '@/hooks/useScreenSizes';

export type CardTypes = {
    card : CardProps
};

const Card = ({card} : CardTypes) => {
  const {mobileScreen, tabletScreen, desktopLargeScreen} = useScreenSizes();
  const {id, image, title, description, tags} = card || {};

  // styles states
  const [cardStyleState, setCardStyleState] = useState({});
  const [cardBodyStyleState, setCardBodyStyleState] = useState({});
  const [thumbnailStyleState, setThumbnailStyleState] = useState({});
  const [titleStyleState, setTitleStyleState] = useState({});
  const [descriptionStyleState, setDescriptionStyleState] = useState({});
  const [tagsStyleState, setTagsStyleState]  = useState({});
  const [tagStyleState, setTagStyleState] = useState({});
  const [buyNowStyleState, setBuyNowStyleState] = useState({});
  const [footerButtonStyleState, setfooterButtonStyleState] = useState({});


  // styles
  const { card : cardStyle } = style || {};
  const {body : bodyStyle, style : cardStylePc, styleMob : cardStyleMob, styleTab:cardStyleTab} = cardStyle || {};
  const {thumbnail, title: bodyTitleStyle, description : bodyDescriptionStyle, tags : tagsStyle, footer : footerStyle} = bodyStyle || {};
  const {style : bodySectionStyle, className : bodyClassName, styleMob : bodyStyleMob, styleTab : bodyStyleTab} = bodyStyle || {};
  const {className: thumbnailClassName, style : thumbnailStyle, styleMob : thumbnailStyleMob, styleTab : thumbnailStyleTab} = thumbnail || {};
  const {className: titleClassName, style : titleStyle, styleMob : titleStyleMob, styleTab : titleStyleTab} = bodyTitleStyle || {};
  const {className: descriptionClassName, style : descriptionStyle, styleMob : descriptionStyleMob, styleTab : descriptionStyleTab} = bodyDescriptionStyle || {};
  const {className : tagsContainerClassName, style : tagsContainerStyle, tag, styleMob : tagsStyleMob, styleTab : tagsStyleTab } = tagsStyle || {};
  const {className : tagClassName, style : tagStyle, styleMob : tagStyleMob, styleTab : tagStyleTab} = tag || {};
  const {className: footerClassName, style : buyNowContainerStyle, styleMob : buyNowContainerStyleMob, styleTab : buyNowContainerStyleTab, button : bottomButton } = footerStyle || {};
  const {className : footerButtonClassName, style : footerButtonStyle, styleMob : footerButtonStyleMob, styleTab : footerButtonStyleTab} = bottomButton || {};
  

  // style handlers
    const defaultScreenView = () =>{
        setCardStyleState(cardStylePc)
        setCardBodyStyleState(bodySectionStyle);
        setThumbnailStyleState(thumbnailStyle);
        setTitleStyleState(titleStyle);
        setDescriptionStyleState(descriptionStyle);
        setTagsStyleState(tagsContainerStyle);
        setTagStyleState(tagStyle);
        setBuyNowStyleState(buyNowContainerStyle);
        setfooterButtonStyleState(footerButtonStyle);
    };

    const mobileScrrenView = () =>{
      setCardStyleState(cardStyleMob);
        setCardBodyStyleState(bodyStyleMob);
        setThumbnailStyleState(thumbnailStyleMob);
        setTitleStyleState(titleStyleMob);
        setDescriptionStyleState(descriptionStyleMob);
        setTagsStyleState(tagsStyleMob);
        setTagStyleState(tagStyleMob);
        setBuyNowStyleState(buyNowContainerStyleMob);
         setfooterButtonStyleState(footerButtonStyleMob);
    }

    const tabScreenView = () =>{
        setCardStyleState(cardStyleTab);
        setCardBodyStyleState(bodyStyleTab);
        setThumbnailStyleState(thumbnailStyleTab);
        setTitleStyleState(titleStyleTab);
        setDescriptionStyleState(descriptionStyleTab);
        setTagsStyleState(tagsStyleTab);
        setTagStyleState(tagStyleTab);
        setBuyNowStyleState(buyNowContainerStyleTab);
         setfooterButtonStyleState(footerButtonStyleTab);
    };


  // effect for styles state depending on device screen and different screen styles
  useEffect(() => {
    function handleResize() {
      // checking window width is mobile screen or not
      if (window.innerWidth < tabletScreen) {
        mobileScrrenView();
      }else if(window.innerWidth >= tabletScreen && window.innerWidth < desktopLargeScreen){
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
  }, [mobileScreen, tabletScreen, desktopLargeScreen]);
  
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
        <div className={footerClassName} style={buyNowStyleState}>
          <button className={footerButtonClassName} style={footerButtonStyleState}>Buy now</button>
        </div>
      </div>
  )
}

export default Card