import React, {useState, useEffect } from 'react';
import Switch from 'react-switch';
import 'bootstrap/dist/css/bootstrap.min.css';

import Spinner from 'react-bootstrap/Spinner'

import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';
import {ThemeProvider} from 'styled-components';
import { redTheme, blueTheme, GlobalStyles } from './themes.js';


function  App () {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);
  const [theme, setTheme] = useState('red');

  const [begin, setBegin] = useState(0);

  const [loading, setLoading] = useState(true);
  const [searchLoading] = useState(false);


  const themeToggler = () => {
    theme === 'red' ? setTheme('dark') : setTheme('red');
  };


  useEffect(() => {
    if(!begin){
      listAllHeroes();
    }
    
    else {
      setLoading(false);
    }
 
  });

  
  async function searchSuperHeroes () {
    const response = await fetch(`https://www.superheroapi.com/api.php/10219177700206566/search/${searchText}`);
    const data = await response.json();

    setSuperheroData(data.results);
    setLoading(true);
  }

  
async function listAllHeroes() {
    let listHeroes = [];

    let total = 50;
    for(let i = 1; i <= total; i++){
      const response = await fetch(`https://www.superheroapi.com/api.php/10219177700206566/${i}`);
      const data = await response.json();

      listHeroes.push({

        id: data.id,
        name: data.name,
        powerstats: data.powerstats,
        biography: data.biography,
        appearance: data.appearance,
        work: data.work,
        connections: data.connections,
        image:data.image
      });
    }

    setSuperheroData(listHeroes);
    setBegin(1);
  }

  
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    
    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      listAllHeroes();
    }
    if (searchTerm.length > 0) {
      searchSuperHeroes();
    }
  }


  return (
    <ThemeProvider theme={(theme === 'red' ? redTheme : blueTheme)}>
      <GlobalStyles/>
      <div id= "switch" >
        <Switch 
          onChange={() => themeToggler()}
          checked={true}
          checkedIcon={false}
          uncheckdIcon={false} 
          height={20}
          width={40}
          handleDiameter={20}
          offColor=""
          onColor="#000"
        />
      </div>
     
      <div className="container">
        {loading === true && 
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        }

        {
          searchLoading === true && 
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        }
        <Header searchText={searchText} setSearchText={setSearchText} handleChange={handleChange}/>
        <CharacterGrid superheroData={superheroData}/> 
      </div>
    </ThemeProvider>
  );
}

export default App;
