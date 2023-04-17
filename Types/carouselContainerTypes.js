export type CarouselContainerTypes :  {
    className: string;
    desktopCardSize: number;
    mobileCardSize: number;
    tabletCardSize: number;
    style: {};
    styleMob: {};
    styleTab: {};
} = {
  className : "",
  desktopCardSize : 100/4,
  mobileCardSize : 100/1,
  tabletCardSize : 100/2,
  style : {display : "flex", gap: "2.5rem", margin : "2.5rem 0px", transition : "all 0.8s ease-in-out", padding : "0px 1.5rem"},
  styleMob : {display : "flex", gap: "2.5rem", margin : "2.5rem 0px", transition : "all 0.5s ease-in-out", padding : "0px 1.5rem"}, 
  styleTab : {display : "flex", gap: "2.5rem", margin : "2.5rem 0px", transition : "all 0.5s ease-in-out", padding : "0px 1.5rem"},
};
