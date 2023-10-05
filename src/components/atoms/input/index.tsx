import styles from "./input.module.css";
import { BsSearchHeart } from "react-icons/bs";

interface InterfaceProps {
  text: string;
  customClass?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ text, customClass, onChange }: InterfaceProps) {
  const classNames = customClass ? `${styles[customClass]}` : "";

  return (
    <div className={styles.container_input}>
      <input
        type="text"
        placeholder={text}
        className={classNames}
        onChange={onChange}
      />
      <BsSearchHeart />
    </div>
  );
}
