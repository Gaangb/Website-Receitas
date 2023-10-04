import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "../../components/atoms/input";
import styles from "./searchName.module.css";
import image from "../../assets/search_name_image.webp";
import { SearchRecipeCard } from "../../components/molecules/searchRecipeCard";

export function SearchName() {
  const [recipeName, setRecipeName] = useState("");
  const [recipesFinded, setRecipesFinded] = useState([]);

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
      );
      setRecipesFinded(response.data.meals);
      console.log(recipesFinded);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleSearch();
  }, [recipeName]);

  return (
    <div className={styles.container_geral_search_name}>
      <div className={styles.container_search_name}>
        <div>
          <h2>Pesquisar receitas por nome:</h2>
        </div>
        <div>
          <Input
            text="Digite sua pesquisa"
            customClass="input_search_name"
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>
        <div className={styles.container_search_meals}>
          {recipesFinded ? (
            recipesFinded.map((recipe: any) => (
              <SearchRecipeCard
                titulo={recipe.strMeal}
                image={recipe.strMealThumb}
                key={recipe.idMeal}
              />
            ))
          ) : (
            <p>Não foi encontrada nenhuma receita.</p>
          )}
        </div>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
