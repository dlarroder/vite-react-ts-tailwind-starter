import { ComponentProps, forwardRef } from "react";
import styles from "./Button.module.css";

const Button = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<"button">, "className">
>(({ children, ...rest }, ref) => {
  return (
    <button ref={ref} className={styles.button} {...rest}>
      {children}
    </button>
  );
});

export default Button;
