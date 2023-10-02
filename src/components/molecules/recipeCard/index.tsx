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
      <div className={styles.texto_receita}>
        <div className={styles.titulo_receita}>{titulo}</div>
        <ul>
            {ingredientes.map((value, index) => (
            <li key={index}>{value.toUpperCase()}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
