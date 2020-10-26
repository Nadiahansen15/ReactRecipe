import React,{useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '4d18ea1d';
  const APP_KEY = '951f2323b75a86b324be7c8c9a71408e';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(async () => {
        getRecipes();
  }, [query]);

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);

  };

  const updateSearch = e => {
      setSearch(e.target.value);
  };
  const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch("");
  };

  return(
     <div className="App">
         <form onSubmit={getSearch} className="Search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
            <button  className="search-button" type="submit">
            Search</button>
         </form>
         <div className="recipes">
         {recipes.map(recipe => (
             <Recipe
                 key={recipe.recipe.label}
                 title={recipe.recipe.label}
                 calories={recipe.recipe.calories}
                 image={recipe.recipe.image}
                 ingredients={recipe.recipe.ingredients}
             />
         ))};
         </div>
     </div>
  );
};
export default App;
