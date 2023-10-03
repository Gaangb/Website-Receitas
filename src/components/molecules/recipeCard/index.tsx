import styles from "./recipeCard.module.css";

interface CardProps {
  image: string;
  titulo: string;
  ingredientes: Array<string>;
}

export function RecipeCard({ image, titulo, ingredientes }: CardProps) {
  return (
    <div className={styles.container_recipe_wrapper}>
      <div className={styles.container_recipeCard}>
        <div className={styles.titulo_receita}><p>{titulo}</p></div>
        <div className={styles.imagem_ingredientes}>
          <div className={styles.imagem_receita}>
            <img src={image} alt="" />
          </div>
          <div className={styles.texto_receita}>
            <ul>
              {ingredientes.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
