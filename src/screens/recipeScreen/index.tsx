import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./recipe.modules.css";


export function RecipeScreen() {
  const {id} = useParams();
  const [recipe, setRecipe] = useState([]);

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?i=${id}`
      );
      setRecipe(response.data.meals);
      console.log(recipe);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleSearch();
  }, [id]);

  return (
    <div>
      {recipe.map((recipe: any) => (
        <div key={recipe.idMeal}>
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p>{recipe.strInstructions}</p>
        </div>
      ))}
    </div>
    // <div className={styles.container_geral_search_name}>
    //   <div className={styles.container_search_name}>
    //     <div>
    //       <h2>Pesquisar receitas por letra:</h2>
    //       {letters.map((letter) => (
    //         <button onClick={() => setRecipeName(letter)} key={letter}>
    //           {letter}
    //         </button>
    //       ))}
    //     </div>
    //     <div className={styles.container_search_meals}>
    //       {recipesFound ? (
    //         recipesFound.map((recipe: any) => (
    //           <SearchRecipeCard
    //             titulo={recipe.strMeal}
    //             image={recipe.strMealThumb}
    //             key={recipe.idMeal}
    //           />
    //         ))
    //       ) : (
    //         <div className={styles.container_not_found}>
    //           <p>Não foi encontrada nenhuma receita.</p>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}
