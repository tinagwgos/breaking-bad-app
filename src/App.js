import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/Search'

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(' ');

  useEffect(()=>{
    const fetchItems= async () =>{
      const result =await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
        );
      
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
  },[query]) //trexei kathe fora p allazei to query,an to afisw keno trexei mia fora stin arxi

  return (
    <div className="App">
        <Header/>
        <Search getQuery={(q)=>setQuery(q)}/>
        <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
