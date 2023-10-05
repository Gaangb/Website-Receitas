import styles from "./searchRecipeCard.module.css";

interface CardProps {
  image: string;
  title: string;
  key?: number;

}

export function SearchRecipeCard({ image, title}: CardProps) {
  return (
    <div className={styles.container_search_recipe_card}>
        <div>
            <p title={title}>{title}</p>
        </div>
        <div className={styles.search_recipe_card_image}>
            <img src={image}/>
        </div>
    </div>
  );
}
