import styles from "./navBar.module.css"
import Button from "../../atoms/button/index"

export default function NavBar(){
    return(
        <div>
            <Button text="Home" customClass="Button_NavBar"/>
        </div>
    )
}