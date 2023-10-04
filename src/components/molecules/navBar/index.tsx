import { useNavigate } from "react-router-dom";
import styles from './navBar.module.css'
import { Button } from "../../atoms/button"

export function NavBar(){
    const navigate = useNavigate()

    function handleNavigateToHome(){
        navigate('/');
    }

    function handleNavigateToSearchByName(){
        navigate('/search_by_name');
    }

    function handleNavigateToSearchByLetter(){
        navigate('/search_by_letter')
    }

    function handleNavigateToSearchByIngredient(){
        navigate('/search_by_ingredient')
    }

    return(
        <div className={styles.container_NabBar}>
            <div>
                <h1>Receitas BG</h1>
            </div>
            <div className={styles.container_buttons_navBar}>
                <Button text="Home" customClass="Button_NavBar" onClick={() => handleNavigateToHome()}/>
                <Button text="Busca por nome" customClass="Button_NavBar" onClick={() => handleNavigateToSearchByName()}/>
                <Button text="Busca Alfabetica" customClass="Button_NavBar" onClick={() => handleNavigateToSearchByLetter()}/>
                <Button text="Busca por ingredientes" customClass="Button_NavBar" onClick={() => handleNavigateToSearchByIngredient()}/>
            </div>
        </div>
    )
}