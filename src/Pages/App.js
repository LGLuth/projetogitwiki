import { useState } from "react";
import { api } from "../services/api"
import "./styles.css"
import Header from "../Components/Header";
import RepoSearch from "../Components/Input";
import SearchBtn from "../Components/Button";
import ItemRepo from "../ItemRepo/index";



function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState ([])
  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
  }
  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);

    // utilizar filter.
  }
  return (<>          
    <div className="App">
      <Header/>
      
    <div className="conteudo">
    <RepoSearch value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/> 
    <SearchBtn onClick={handleSearchRepo}/>    
    
    </div>
    <div className="repo" >
    {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </div>



    </div>



    </>);
}

export default App;
