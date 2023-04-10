export const style = {
  card : {
    id: "card",
    className : "card w-full md:w-1/3 shadow-lg",
    style : {marginTop : "20px", marginBottom : "20px", marginLeft : "40px", marginRight : "40px", overflow : "hidden", border: "1px solid gray", borderRadius: "5px"},
    styleMob : {marginTop : "20px", marginBottom : "20px", marginLeft : "10px", marginRight : "10px", overflow : "hidden", border: "1px solid gray", borderRadius: "5px"},
    styleTab : {marginTop : "20px", marginBottom : "20px", marginLeft : "10px", marginRight : "10px", overflow : "hidden", border: "1px solid gray", borderRadius: "5px"},
  
    body : {
      id: "card-body",
      className : "card-body",
      style : {padding : "1.5rem 1rem"},
      styleMob : {padding : "1.5rem 1rem"},
      styleTab : {padding : "1.5rem 1rem"},

      thumbnail : {
      id: "card-image",
      className : "card-image",
      style : { width : "100%", height : "15rem"},
      styleMob : { width : "100%", height : "15rem"},
      styleTab : { width : "100%", height : "15rem"}
      },

      title : {
        id: "card-title",
        className : "card-title",
        style: {marginBottom : "0.5rem", fontWeight : "500", fontSize: "1.25rem"},
        styleMob : {marginBottom : "0.5rem", fontWeight : "500", fontSize: "1.25rem"},
        styleTab : {marginBottom : "0.5rem", fontWeight : "500", fontSize: "1.25rem"},
      },
  
      description : {
        id: "card-description",
        className : "card-description text-gray-700 text-base",
        style : {},
        styleMob : {},
        styleTab : {}
      },
  
      tags : {
        id: "card-tags",
        className : "",
        style : {paddingRight : "1.5rem", paddingLeft: "1.5rem", paddingTop : "1rem", paddingBottom : "0.5rem"},
        styleMob : {paddingRight : "1.5rem", paddingLeft: "1.5rem", paddingTop : "1rem", paddingBottom : "0.5rem"},
        styleTab : {paddingRight : "1.5rem", paddingLeft: "1.5rem", paddingTop : "1rem", paddingBottom : "0.5rem"},

        tag : {
          id: "card-tag",
          className : "inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-green-600 hover:text-white transition-all duration-150",
          style : {},
          styleMob : {},
          styleTab : {}
        }
      }
  }
  },
};