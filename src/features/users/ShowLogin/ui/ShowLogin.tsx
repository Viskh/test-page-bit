import Avatar from "shared/icons/default-avatar.svg";
import { Button } from "shared/ui/Button";
import { Container } from "shared/ui/Container";
import { Text } from "shared/ui/Text";

import styles from "./styles.module.scss";

export const ShowLogin = () => {
  return (
    <div className={styles.container}>
      <Container gap={12} justify="center">
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
    </div>
  );
};
