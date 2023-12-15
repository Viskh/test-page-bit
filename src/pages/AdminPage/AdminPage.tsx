import { Header } from "widgets/Header";
import { UserList } from "widgets/UserList";

import { PanelsProvider, usePanels } from "./PanelsProvider";

import styles from "./styles.module.scss";

const Page = () => {
  const { openDrawer } = usePanels();

  return (
    <div className={styles.content}>
      <Header />

      <UserList openTransactionDrawer={openDrawer} />
    </div>
  );
};

export const AdminPage = () => (
  <PanelsProvider>
    <Page />
  </PanelsProvider>
);
