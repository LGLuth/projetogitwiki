import React from "react"
import "./styles.css"

document.addEventListener("keypress", function(f){
    if(f.key === "Enter"){
      const btn = document.querySelector("#send");
      btn.click();
    }
  }
  );

const SearchBtn = ({onClick}) => {
    return(
        <button className="procurar" onClick={onClick} id="send">
            Search
        </button>
    )
}
export default SearchBtn