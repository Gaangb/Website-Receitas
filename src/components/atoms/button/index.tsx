import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  customClass?: string;
  onClick?: () => void;
}

export function Button({ text, customClass, onClick }: ButtonProps) {
  return <button onClick={onClick} className={`${styles}.${customClass}`}>{text}</button>;
}
