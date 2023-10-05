import styles from "./pageNotFoundScreen.module.css";
import image from '../../assets/erro_404.webp'

export function PageNotFoundScreen() {
  
    return (
        <div className={styles.container_page_not_found}>
            <img src={image} alt="" />
        </div>
    )
}
