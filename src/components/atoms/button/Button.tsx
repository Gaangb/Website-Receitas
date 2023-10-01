import styles from "./Button.module.css"

interface ButtonProps {
    text: string
    customClass?: string
}

export default function Button({text, customClass}: ButtonProps){
    return <button className={`${styles}.${customClass}`}>{text}</button>
}