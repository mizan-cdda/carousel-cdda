import {CardProps, cards} from "./cards";

enum TypesEnum {
    Line = "line",
    Circle = "circle"
}

export type Types = TypesEnum.Circle | TypesEnum.Line

export type NavProps = {
    visible : boolean,
    type : Types
    
}

export type CarouselProps = {
    nextPrev : boolean,
    cards : CardProps[],
    navigation : NavProps
}

export const carousel : CarouselProps = {
    nextPrev : true,
    cards,
    navigation : {
        visible : true,
        type : TypesEnum.Circle
    }
}