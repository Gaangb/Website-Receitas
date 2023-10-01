import { useState, useEffect } from "react";
import axios from "axios";
import image from "../../assets/home_image.webp";
import styles from "./home.module.css";
import { RecipeCard } from "../../components/molecules/recipeCard";

type Meal = {
  mealIngredientes: Array<string>;
  mealName: string;
  mealImage: string;
};

export function Home() {
  const [meal, setMeal] = useState<Meal>({
    mealName: "",
    mealImage: "",
    mealIngredientes: [],
  });

  useEffect(() => {
    getRecipe();
  },[]);

  async function getRecipe() {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      const mealData = response.data.meals[0];
      setMeal((state) => ({
        ...state,
        mealName: mealData.strMeal,
        mealImage: mealData.strMealThumb,
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
      }));
    } catch (error) {
      console.log("erro");
    }
  }

  return (
    <div className={styles.container_home}>
      <div className={styles.card_home}>
        <h2>O que vamos comer hoje?</h2>
        <p>Recomendação do momento</p>
        <RecipeCard
          image={meal.mealImage}
          titulo={meal.mealName}
          ingredientes={meal.mealIngredientes}
        />
      </div>
      <div>
        <img src={image} />
      </div>
    </div>
  );
}
