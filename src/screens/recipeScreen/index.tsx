import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./recipe.module.css";

type Meal = {
  idMeal?: string;
  mealIngredients: Array<string>;
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
    mealIngredients: [],
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
      const mealIngredients: string[] = [];
      const mealMeasures: string[] = [];

      for (let i = 1; i <= 20; i++) {
        const ingredient = mealData[`strIngredient${i}`];
        const measure = mealData[`strMeasure${i}`];

        if (ingredient && measure) {
          mealIngredients.push(ingredient);
          mealMeasures.push(measure);
        }
      }

      setRecipe((recipe) => ({
        ...recipe,
        mealIngredients,
        mealName: mealData.strMeal,
        mealArea: mealData.strArea,
        mealImage: mealData.strMealThumb,
        mealInstructions: mealData.strInstructions,
        mealMeasures,
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
            <p>Ingredients</p>
            <p>Measures</p>
          </div>
          <div>
            <div>
              {recipe.mealIngredients.map((ingredient, index) => (
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
