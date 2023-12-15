import { createContext, type FC, type ReactNode, useState } from "react";
import { TransactionsDrawer } from "widgets/TransactionsDrawer";

export type PanelsContextValue = {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

export const PanelsContext = createContext<PanelsContextValue>({
  isOpen: false,
  openDrawer: () => {},
  closeDrawer: () => {},
});

export type PanelsProviderProps = {
  children: ReactNode;
};

export const PanelsProvider: FC<PanelsProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);

  const closeDrawer = () => setOpen(false);

  const value: PanelsContextValue = {
    isOpen: open,
    openDrawer,
    closeDrawer,
  };

  return (
    <PanelsContext.Provider value={value}>
      {children}

      <TransactionsDrawer isOpen={open} onClose={closeDrawer} />
    </PanelsContext.Provider>
  );
};
