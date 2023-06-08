/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles.css"

function ItemRepo ({repo, handleRemoveRepo}) {
    return(
        <div className="ItemList">
            <strong>
                <a href={repo.html_url} className="titulo">{repo.name}</a><br/>
                <span>@{repo.full_name}</span>
            </strong>
            
                
            
            
            <p>{repo.description}</p>
            <a href="#" className="remover" onClick={handleRemoveRepo}>Remove.</a>
            <hr/>
        </div>
        )
}

export default ItemRepo