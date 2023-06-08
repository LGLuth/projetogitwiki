import "./styles.css"
import gitlogo from "../assets/pngegg.png"
import React from "react"


const Header = ( ) => {
    return(
        <header>
            <div>
                <img src={gitlogo} weight={90} width={90} 
                alt="gitlogo" className="gitlogo2"/>
            </div>            
            <h3>
            Git Wiki
            </h3>
        </header>
    )
     
    
}
export default Header