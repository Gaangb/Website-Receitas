import styles from "./input.module.css";

interface InterfaceProps {
  text: string;
  customClass?: string;
}

export function Input({ text, customClass }: InterfaceProps) {
    const classNames = customClass ? `${styles[customClass]}` : "";
  
    return <input type="text" placeholder={text} className={classNames} />;
}
