import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  customClass?: string;
}

export function Button({ text, customClass }: ButtonProps) {
  return <button className={`${styles}.${customClass}`}>{text}</button>;
}
