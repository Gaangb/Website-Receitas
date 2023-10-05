import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./recipe.module.css";

type Meal = {
  idMeal?: string;
  mealIngredientes: Array<string>;
  mealName: string;
  mealArea: string;
  mealImage: string;
  mealInstructions: string;
  mealMeasures: Array<string>;
};

export function RecipeScreen() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Meal>({
    idMeal: id,
    mealIngredientes: [],
    mealName: "",
    mealArea: "",
    mealImage: "",
    mealInstructions: "",
    mealMeasures: [],
  });

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      const mealData = response.data.meals[0];
      setRecipe((recipe) => ({
        ...recipe,
        mealIngredientes: [
          mealData.strIngredient1,
          mealData.strIngredient2,
          mealData.strIngredient3,
          mealData.strIngredient4,
          mealData.strIngredient5,
          mealData.strIngredient6,
          mealData.strIngredient7,
          mealData.strIngredient8,
          mealData.strIngredient9,
          mealData.strIngredient10,
          mealData.strIngredient11,
          mealData.strIngredient12,
          mealData.strIngredient13,
          mealData.strIngredient14,
          mealData.strIngredient15,
          mealData.strIngredient16,
          mealData.strIngredient17,
          mealData.strIngredient18,
          mealData.strIngredient19,
          mealData.strIngredient20,
        ],
        mealName: mealData.strMeal,
        mealArea: mealData.strArea,
        mealImage: mealData.strMealThumb,
        mealInstructions: mealData.strInstructions,
        mealMeasures: [
          mealData.strMeasure1,
          mealData.strMeasure2,
          mealData.strMeasure3,
          mealData.strMeasure4,
          mealData.strMeasure5,
          mealData.strMeasure6,
          mealData.strMeasure7,
          mealData.strMeasure8,
          mealData.strMeasure9,
          mealData.strMeasure10,
          mealData.strMeasure11,
          mealData.strMeasure12,
          mealData.strMeasure13,
          mealData.strMeasure14,
          mealData.strMeasure15,
          mealData.strMeasure16,
          mealData.strMeasure17,
          mealData.strMeasure18,
          mealData.strMeasure19,
          mealData.strMeasure20,
        ],
      }));
      console.log(recipe);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleSearch();
  }, [id, setRecipe]);

  return (
    <div className={styles.container}>
      <div>
        <img src={recipe.mealImage} alt={recipe.mealName} />
        <div className={styles.container_ingredients_measures}>
          <div>
            <p>Ingredientes</p>
            <p>Medidas</p>
          </div>
          <div>
            <div>
              {recipe.mealIngredientes.map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
              ))}
            </div>
            <div>
              {recipe.mealMeasures.map((measures, index) => (
                <p key={index}>{measures}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container_lateral}>
        <h2>{recipe.mealName}</h2>
        <h2>Culinária {recipe.mealArea}</h2>
        <p>{recipe.mealInstructions}</p>
      </div>
    </div>
  );
}
