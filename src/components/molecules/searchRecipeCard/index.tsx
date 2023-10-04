import styles from "./searchRecipeCard.module.css";

interface CardProps {
  image: string;
  titulo: string;
  key?: number;

}

export function SearchRecipeCard({ image, titulo}: CardProps) {
  return (
    <div className={styles.container_search_recipe_card}>
        <div>
            <p title={titulo}>{titulo}</p>
        </div>
        <div className={styles.search_recipe_card_image}>
            <img src={image}/>
        </div>
    </div>
  );
}
