import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./home.module.css";
import { RecipeCard } from "../../components/molecules/recipeCard";

type Meal = {
  mealIngredients: Array<string>;
  mealName: string;
  mealImage: string;
};

export function Home() {
  const [meal, setMeal] = useState<Meal>({
    mealName: "",
    mealImage: "",
    mealIngredients: [],
  });

  useEffect(() => {
    getRecipe();
  }, []);

  async function getRecipe() {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      const mealData = response.data.meals[0];
      const mealIngredients: string[] = [];

      for (let i = 1; i <= 20; i++) {
        const ingredient = mealData[`strIngredient${i}`];

        if (ingredient) {
          mealIngredients.push(ingredient);
        }
      }
      setMeal((state) => ({
        ...state,
        mealName: mealData.strMeal,
        mealImage: mealData.strMealThumb,
        mealIngredients,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container_home}>
      <div className={styles.card_home}>
        <div>
          <h2>Welcome!</h2>
          <h3>What would you like to cook today?</h3>
        </div>
        <div className={styles.container_home_recipe}>
          <RecipeCard
            image={meal.mealImage}
            title={meal.mealName}
            ingredients={meal.mealIngredients}
          />
        </div>
      </div>
    </div>
  );
}
