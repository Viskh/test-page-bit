import { ShowLogin } from "features/users/ShowLogin";
import { ShowOrganization } from "features/users/ShowOrganization";
import { Container } from "shared/ui/Container";
import { Text } from "shared/ui/Text";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <Container align="center" justify="center" className={styles.header}>
      <Container gap={44} align="center" className={styles.header__left}>
        <Text size={22} bold>
          BitTest
        </Text>

        <ShowOrganization />
      </Container>

      <ShowLogin />
    </Container>
  );
};
