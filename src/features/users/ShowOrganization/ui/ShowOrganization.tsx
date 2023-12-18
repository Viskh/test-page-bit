import BagIcon from "shared/icons/organization.svg";
import { Container } from "shared/ui/Container";
import { Text } from "shared/ui/Text";

import styles from "./styles.module.scss";

export const ShowOrganization = () => {
  return (
    <Container align="center" gap={10} className={styles.container}>
      <BagIcon />

      <Text size={16}>Моя организация</Text>
    </Container>
  );
};
