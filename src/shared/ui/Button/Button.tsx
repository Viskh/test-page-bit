import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={clsx(className, styles.button)} {...props}>
      {children}
    </button>
  );
};
