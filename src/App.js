import React, { useEffect, useState } from "react";
import Recipe from "./recipe";
import "./App.css";

const App = () => {
  const APP_ID = "d53b6896";
  const APP_KEY = "91919ce67dd8a9d849db18518470c00c";
  const [recipe, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://www.edamam.com/search?q=potatoes&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <div className="blob"></div>
      <h1>Recipe-App</h1>
      <form>
        <input className="search" type="text" placeholder="What are you looking for?" />
        <button className="btn" type="Submit">
          Search
        </button>
      </form>
      <div className="row">
        <div className="col-1">
          <div className="blob2">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#B2A5C4"
                d="M44.1,-74.5C57.3,-68.8,68.2,-57.2,73.2,-43.8C78.2,-30.4,77.4,-15.2,75.9,-0.9C74.4,13.4,72.1,26.9,66.4,39.2C60.8,51.4,51.6,62.5,40,70.3C28.3,78.1,14.2,82.5,0.5,81.6C-13.1,80.6,-26.2,74.3,-40.2,67.9C-54.2,61.5,-69.2,55.1,-78.1,43.7C-86.9,32.4,-89.7,16.2,-88.3,0.8C-86.9,-14.6,-81.4,-29.2,-73.2,-41.7C-65,-54.2,-54.1,-64.5,-41.4,-70.5C-28.8,-76.5,-14.4,-78.1,0.5,-79.1C15.5,-80,30.9,-80.2,44.1,-74.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="hero font">
            <h1>
              Special Food Everytime for you With the Healthiest{" "}
              <span className="ingredients">Ingredients</span> Ever!
            </h1>
            <p>Be the first to try out our famous healthiest recipes! With us, make the most delicious foods with the recipes that we provide for FREE! </p>
            <div>
              <button type="button" className="button">View Recipes</button>
              <button type="button" className="how-btn">
                <span><img src={require("./turkey.png")} alt="" className="icon"/></span>
                How to</button>
            </div>
            <div className="icons">
              <img src={require("./foodicon.png")} alt=""/>
              <img src={require("./food.png")} alt=""/>
              <img src={require("./food.png")} alt=""/>
              <img src={require("./food.png")} alt=""/>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#63A8E7"
                d="M44.1,-74.5C57.3,-68.8,68.2,-57.2,73.2,-43.8C78.2,-30.4,77.4,-15.2,75.9,-0.9C74.4,13.4,72.1,26.9,66.4,39.2C60.8,51.4,51.6,62.5,40,70.3C28.3,78.1,14.2,82.5,0.5,81.6C-13.1,80.6,-26.2,74.3,-40.2,67.9C-54.2,61.5,-69.2,55.1,-78.1,43.7C-86.9,32.4,-89.7,16.2,-88.3,0.8C-86.9,-14.6,-81.4,-29.2,-73.2,-41.7C-65,-54.2,-54.1,-64.5,-41.4,-70.5C-28.8,-76.5,-14.4,-78.1,0.5,-79.1C15.5,-80,30.9,-80.2,44.1,-74.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="food-hero">
            <img src={require("./food.png")} alt=""/>


          </div>
        </div>
      </div>
      {recipe.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
