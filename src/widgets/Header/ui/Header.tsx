import { ShowLogin } from "features/users/ShowLogin";
import BagIcon from "shared/icons/organization.svg";
import { Container } from "shared/ui/Container";
import { Text } from "shared/ui/Text";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container gap={44} align="center">
        <Text size={22} bold>
          BitTest
        </Text>

        <Container align="center" gap={10}>
          <BagIcon />

          <Text size={16}>Моя организация</Text>
        </Container>
      </Container>

      <Container justify="flex-end" align="center">
        <ShowLogin />
      </Container>
    </header>
  );
};
