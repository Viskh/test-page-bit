import Avatar from "shared/icons/default-avatar.svg";
import { Button } from "shared/ui/Button";
import { Container } from "shared/ui/Container";
import { Text } from "shared/ui/Text";

import styles from "./styles.module.scss";

export const ShowLogin = () => {
  return (
    <Container
      gap={12}
      justify="center"
      align="center"
      className={styles.container}
    >
      <Button>
        <Avatar />
      </Button>

      <Container flexDirection="column" className={styles.titles}>
        <Text size={12} color="secondary">
          Вы авторизованы
        </Text>

        <Text size={14}>Администратор</Text>
      </Container>
    </Container>
  );
};
