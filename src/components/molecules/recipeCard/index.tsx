import styles from "./recipeCard.module.css";

interface CardProps {
  image: string;
  title: string;
  ingredients: Array<string>;
}

export function RecipeCard({ image, title, ingredients }: CardProps) {
  return (
    <div className={styles.container_recipe_wrapper}>
      <div className={styles.container_recipeCard}>
        <div className={styles.recipe_title}>
          <p>{title}</p>
        </div>
        <div className={styles.ingredient_image}>
          <div className={styles.recipe_image}>
            <img src={image} alt="" />
          </div>
          <div className={styles.recipe_text}>
            <p>Ingredients</p>
            <ul>
              {ingredients.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
