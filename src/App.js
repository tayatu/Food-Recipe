import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";
import './App.css';


function App() {
  const [search, setSearch] = useState("chiken");
  const [recipes, setRecipies] = useState([]);

  const APP_ID = "3977405e";
  const APP_KEY = "3b29ece0b474f48181c1dc4559d0dbb5";
  
  useEffect(()=>{
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`);
    setRecipies(res.data.hits);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };

  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
