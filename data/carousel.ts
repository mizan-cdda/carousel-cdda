import {CardProps, cards} from "./cards";

export enum TypesEnum {
    Line = "line",
    Dotted= "dotted",
    Circle = "circle",
    Hidden = "hidden"
};

export type Types = TypesEnum;

export type NavProps = {
    visible : boolean,
    type : Types
    
};

export type CarouselProps = {
    nextPrev : boolean,
    padding : boolean,
    cards : CardProps[],
    navigation : NavProps
};

export const carousel : CarouselProps = {
    nextPrev : true,
    padding : false,
    cards,
    navigation : {
        visible : true,
        type : TypesEnum.Circle
    }
};