export const style = {
  card : {
    id: "card",
    className : "card md:w-1/2 lg:w-1/3 shadow-lg",
    style : {overflow : "hidden", border: "1px solid gray", borderRadius: "5px"},
    styleMob : {overflow : "hidden", border: "1px solid gray", borderRadius: "5px"},
    styleTab : {overflow : "hidden", border: "1px solid gray", borderRadius: "5px"},
  
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
        className : "card-description text-gray-700",
        style : {color : "rgb(55 65 81)"},
        styleMob : {color : "rgb(55 65 81)"},
        styleTab : {color : "rgb(55 65 81)"}
      },
  
      tags : {
        id: "card-tags",
        className : "",
        style : {paddingRight : "1.5rem", paddingLeft: "1.5rem", paddingTop : "1rem", paddingBottom : "0.5rem", gap: "4px", display: "flex"},
        styleMob : {paddingRight : "1.5rem", paddingLeft: "1.5rem", paddingTop : "1rem", paddingBottom : "0.5rem", gap: "4px", display: "flex"},
        styleTab : {paddingRight : "1.5rem", paddingLeft: "1.5rem", paddingTop : "1rem", paddingBottom : "0.5rem", gap: "4px", display: "flex"},

        tag : {
          id: "card-tag",
          className : "rounded-full hover:bg-green-600 hover:text-white",
          style : {display: "inline-block", cursor: "pointer", paddingLeft : ".75rem", paddingRight:".75rem", paddingTop: ".25rem", paddingBottom : ".25rem", backgroundColor : "rgb(229 231 235)", fontSize : "0.875rem", fontWeight : "400", color : "rgb(55 65 81)", transition : "all 0.5s ease-in-out"},
          styleMob : {display: "inline-block", cursor: "pointer", paddingLeft : ".75rem", paddingRight:".75rem", paddingTop: ".25rem", paddingBottom : ".25rem", backgroundColor : "rgb(229 231 235)", fontSize : "0.875rem", fontWeight : "400", color : "rgb(55 65 81)", transition : "all 0.5s ease-in-out"},
          styleTab : {display: "inline-block", cursor: "pointer", paddingLeft : ".75rem", paddingRight:".75rem", paddingTop: ".25rem", paddingBottom : ".25rem", backgroundColor : "rgb(229 231 235)", fontSize : "0.875rem", fontWeight : "400", color : "rgb(55 65 81)", transition : "all 0.5s ease-in-out"},
        }
      },

      footer : {
        id: "card-buy-now",
        className : '',
        style : {marginTop : ".5rem", marginBottom : ".5rem", display : "flex", justifyContent : "flex-end", marginBottom : "0.5rem", marginRight : "1.5rem"},
        styleMob : {marginTop : ".5rem", marginBottom : ".5rem", display : "flex", justifyContent : "flex-end", marginBottom : "0.5rem", marginRight : "1.5rem"},
        styleTab : {marginTop : ".5rem", marginBottom : ".5rem", display : "flex", justifyContent : "flex-end", marginBottom : "0.5rem", marginRight : "1.5rem"},

        button : {
          id: "card-button",
          className : 'text-white px-4 hover:border-transparent hover:bg-green-600 hover:text-white',
          style : {border : "2px", borderColor : "transparent", backgroundColor : "rgb(34 197 94)", textTransform : "capitalize", transition : "all 150ms ease-in-out"},
          styleMob : {border : "2px", borderColor : "transparent", backgroundColor : "rgb(34 197 94)", textTransform : "capitalize", transition : "all 150ms ease-in-out"},
          styleTab : {border : "2px", borderColor : "transparent", backgroundColor : "rgb(34 197 94)", textTransform : "capitalize", transition : "all 150ms ease-in-out"},
        }
      }
  }
  },
};