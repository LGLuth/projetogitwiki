import "./styles.css"
import React from "react"

const RepoSearch = ({value, onChange}) => {
    return(
        <input className="repo-search" placeholder="Busque o Repositório." value={value} onChange={onChange}/>
    )
}

export default RepoSearch