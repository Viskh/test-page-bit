import { FC, ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { Portal } from "../Portal";

import styles from "./styles.module.scss";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export const Drawer: FC<DrawerProps> = ({
  isOpen,
  children,
  className,
  onClose,
}) => {
  return (
    <Portal>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className={styles.background}
        />
      )}

      <motion.div
        className={clsx(styles.drawer, className)}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "just", stiffness: 260, damping: 20 }}
      >
        {children}
      </motion.div>
    </Portal>
  );
};
