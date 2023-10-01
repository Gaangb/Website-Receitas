import styles from './navBar.module.css'
import { Button } from "../../atoms/button"

export function NavBar(){
    return(
        <div className={styles.container_NabBar}>
            <div>
                <h1>Receitas BG</h1>
            </div>
            <div className={styles.container_buttons_navBar}>
                <Button text="Home" customClass="Button_NavBar"/>
                <Button text="Busca por nome" customClass="Button_NavBar"/>
                <Button text="Busca Alfabetica" customClass="Button_NavBar"/>
                <Button text="Busca por ingredientes" customClass="Button_NavBar"/>
            </div>
        </div>
    )
}