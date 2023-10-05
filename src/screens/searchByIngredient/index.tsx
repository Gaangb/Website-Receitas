import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "../../components/atoms/input";
import { SearchRecipeCard } from "../../components/molecules/searchRecipeCard";
import styles from "./searchByIngredient.module.css";
import image from "../../assets/search_ingredient_image.png";

type Recipe = {
  strMeal: string;
  strMealThumb: string;
  idMeal?: number;
}

export function SearchByIngredient() {
  const navigate = useNavigate();
  const [recipeIngredient, setRecipeIngredient] = useState("");
  const [recipesFound, setRecipesFound] = useState([]);
  const [ingredientsFound, setIngredientsFound] =useState([])

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipeIngredient}`
      );
      setRecipesFound(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  async function  getIngredients() {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
      );
      setIngredientsFound(response.data.meals)
      console.log(ingredientsFound)
    } catch (error) {
      console.log(error)
    }
  }

  function handleNavigateToRecipeScreen(id?: number) {
    navigate(`/recipe_by_id/${id}`)
  }

  useEffect(() => {
    handleSearch();
    getIngredients()
  }, [recipeIngredient]);

  return (
    <div className={styles.container_geral_search_name}>
      <div className={styles.container_search_name}>
        <div>
          <h2>Search by ingredient:</h2>
        </div>
        <div>
          <Input
            text="Enter your search"
            customClass="input_search_name"
            onChange={(e) => setRecipeIngredient(e.target.value)}
          />
        </div>
        <div className={styles.container_search_meals}>
          {recipesFound ? (
            recipesFound.map((recipe: Recipe) => (
              <button className={styles.button_searchName} onClick={() => handleNavigateToRecipeScreen(recipe.idMeal)}>
                <SearchRecipeCard
                  title={recipe.strMeal}
                  image={recipe.strMealThumb}
                  key={recipe.idMeal}
                />
              </button>
            ))
          ) : (
            <div className={styles.container_not_found}>
              <p>Not found.</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.search_ingredient_image}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
