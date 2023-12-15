import type { FC, ReactNode } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

type FlexPosition = "center" | "flex-start" | "flex-end";

type GapProps = {
  gap?: string | number;
  children: ReactNode;
  className?: string;
  flexDirection?: "column" | "row";
  align?: FlexPosition;
  justify?: "space-between" | "space-around" | "initial" | FlexPosition;
};

export const Container: FC<GapProps> = ({
  gap,
  children,
  className,
  flexDirection = "row",
  align = "start",
  justify = "initial",
}) => (
  <div
    style={{ gap, flexDirection, alignItems: align, justifyContent: justify }}
    className={clsx(className, styles.container)}
  >
    {children}
  </div>
);
