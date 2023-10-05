import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "../../components/atoms/input";
import styles from "./searchByIngredient.module.css";
import image from "../../assets/search_ingredient_image.webp";
import { SearchRecipeCard } from "../../components/molecules/searchRecipeCard";
import { Button } from "../../components/atoms/button";

export function SearchByIngredient() {
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

  useEffect(() => {
    handleSearch();
    getIngredients()
  }, [recipeIngredient]);

  return (
    <div className={styles.container_geral_search_name}>
      <div className={styles.container_search_name}>
        <div>
          <h2>Pesquisar receitas por ingrediente:</h2>
        </div>
        <div>
          <Input
            text="Digite sua pesquisa"
            customClass="input_search_name"
            onChange={(e) => setRecipeIngredient(e.target.value)}
          />
        </div>
        <div className={styles.container_search_meals}>
          {recipesFound ? (
            recipesFound.map((recipe: any) => (
              <SearchRecipeCard
                titulo={recipe.strMeal}
                image={recipe.strMealThumb}
                key={recipe.idMeal}
              />
            ))
          ) : (
            // ingredientsFound.map((ingredient: any) => (
            //   <Button text={ingredient} onClick={() => setRecipeIngredient(ingredient)} />
            // ))
            // <p>Não foi encontrada nenhuma receita.</p>
            <div className={styles.container_search_buttons} >
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
              <Button text='Chicken temperada' customClass="ingredient_button"/>
            </div>

          )}
        </div>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
