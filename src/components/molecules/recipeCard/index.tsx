import styles from './recipeCard.module.css'

interface CardProps {
  image: string;
  titulo: string;
  ingredientes: Array<string>;
}

export function RecipeCard({ image, titulo, ingredientes }: CardProps) {
  return (
    <div className={styles.container_recipeCard}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div>{titulo}</div>
        <div>
            {ingredientes.map((value, index) => (
            <div key={index}>{value}</div>
            ))}
        </div>
      </div>
    </div>
  );
}
