import React,{useEffect, useState} from "react";
import './App.css';

const App = () => {
  const APP_ID = '4d18ea1d';
  const APP_KEY = '951f2323b75a86b324be7c8c9a71408e';

  const [recipes, setRecipes] = useState([]);



  useEffect(async () => {
        getRecipes();
  }, []);

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = response.json();
      console.log(data.hits);
      setRecipes(data.hits);

  };

  return(
     <div className="App">
         <form className="Search-form">
            <input className="search-bar" type="text"/>
            <button  className="search-button" type="submit">
            Search</button>
         </form>
     </div>
  );
};
export default App;
