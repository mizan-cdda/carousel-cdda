export type CardsStyleTypes = {
    className: string;
    desktopCardSize: number;
    mobileCardSize: number;
    tabletCardSize: number;
    style: {};
    styleMob: {};
    styleTab: {};
}

export const cardsStyle : CardsStyleTypes = {
  className : "flex transition-all duration-500 md:duration-1000 ease-in-out gap-10 px-6 my-10",
  desktopCardSize : 100/4,
  mobileCardSize : 100/1,
  tabletCardSize : 100/2,
  style : {},
  styleMob : {}, 
  styleTab : {}
};