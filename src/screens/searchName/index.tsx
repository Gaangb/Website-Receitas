import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "../../components/atoms/input";
import { SearchRecipeCard } from "../../components/molecules/searchRecipeCard";
import styles from "./searchName.module.css";
import image from "../../assets/search_name_image.png";

type Recipe = {
  strMeal: string;
  strMealThumb: string;
  idMeal?: number;
};

export function SearchName() {
  const navigate = useNavigate();
  const [recipeName, setRecipeName] = useState("");
  const [recipesFound, setRecipesFound] = useState([]);

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
      );
      setRecipesFound(response.data.meals);
      console.log(recipesFound);
    } catch (error) {
      console.log(error);
    }
  }

  function handleNavigateToRecipeScreen(id?: number) {
    navigate(`/recipe_by_id/${id}`);
  }

  useEffect(() => {
    handleSearch();
  }, [recipeName]);

  return (
    <div className={styles.container_geral_search_name}>
      <div className={styles.container_search_name}>
        <div>
          <h2>Search by name:</h2>
        </div>
        <div>
          <Input
            text="Enter your search"
            customClass="input_search_name"
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>
        <div className={styles.container_search_meals}>
          {recipesFound ? (
            recipesFound.map((recipe: Recipe) => (
              <button
                className={styles.button_searchName}
                onClick={() => handleNavigateToRecipeScreen(recipe.idMeal)}
              >
                <SearchRecipeCard
                  title={recipe.strMeal}
                  image={recipe.strMealThumb}
                  key={recipe.idMeal}
                />
              </button>
            ))
          ) : (
            <div className={styles.container_not_found}>
              <p>Não foi encontrada nenhuma receita.</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.search_name_image}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
