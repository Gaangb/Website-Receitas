import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SearchRecipeCard } from "../../components/molecules/searchRecipeCard";
import styles from "./searchByLetter.module.css";

type Recipe = {
  strMeal: string;
  strMealThumb: string;
  idMeal?: number;
}

export function SearchByLetter() {
  const navigate = useNavigate();
  const [recipeName, setRecipeName] = useState("");
  const [recipesFound, setRecipesFound] = useState([]);
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${recipeName}`
      );
      setRecipesFound(response.data.meals);
      console.log(recipesFound);
    } catch (error) {
      console.log(error);
    }
  }

  function handleNavigateToRecipeScreen(id?: number) {
    navigate(`/recipe_by_id/${id}`)
  }

  useEffect(() => {
    handleSearch();
  }, [recipeName]);

  return (
    <div className={styles.container_geral_search_name}>
      <div className={styles.container_search_name}>
        <div>
          <h2>Search by letter:</h2>
          <div>
          {letters.map((letter) => (
            <button onClick={() => setRecipeName(letter)} key={letter} className={styles.button_letters}>
              {letter}
            </button>
          ))}
          </div>
        </div>
        <div className={styles.container_search_meals}>
          {recipesFound ? (
            recipesFound.map((recipe: Recipe) => (
              <button onClick={() => handleNavigateToRecipeScreen(recipe.idMeal)}>
                <SearchRecipeCard
                  title={recipe.strMeal}
                  image={recipe.strMealThumb}
                  key={recipe.idMeal}
                />
              </button>
            ))
          ) : (
            <div className={styles.container_not_found}>
              <p>Recipe not found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
