import { FC, type ReactNode } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

export type Family = "medium" | "semibold" | "regular";
export type Align = "left" | "center" | "right";

export type TextProps = {
  children: ReactNode;
  align?: Align;
  size?: number;
  bold?: boolean;
  family?: Family;
  color?: "primary" | "secondary";
  className?: string;
};

export const Text: FC<TextProps> = ({
  children,
  align,
  bold = false,
  color = "primary",
  family = "regular",
  size = 14,
  className,
}) => {
  return (
    <span
      className={clsx(
        styles.text,
        styles[`textColors-${color}`],
        styles[`family_${family}`],
        styles[`align_${align ?? ""}`],
        {
          [styles.bold]: bold,
        },
        className,
      )}
      style={{
        fontSize: size,
      }}
    >
      {children}
    </span>
  );
};
