import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  customClass?: string;
  onClick?: () => void;
}

export function Button({ text, customClass, onClick }: ButtonProps) {
  const buttonClasses = customClass ? styles[customClass] : "";

  return (
    <button onClick={onClick} className={`${styles.button} ${buttonClasses}`}>
      {text}
    </button>
  );
}
