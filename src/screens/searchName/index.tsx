import { Input } from '../../components/atoms/input'
import styles from './searchName.module.css'
import image from '../../assets/search_name_image.webp'

export function SearchName(){
    return(
        <div className={styles.container_geral_search_name}>
            <div className={styles.container_search_name}>
                <div>
                    <h2>Pesquisar receitas por nome:</h2>
                </div>
                <div>
                    <Input text="Digite sua pesquisa" customClass="input_search_name"/>
                </div>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    )
}