import { ChangeEventHandler, useEffect, useState } from "react";
import { usersModel } from "entities/users";
import { useAppDispatch, useDebounce } from "shared/hooks";
import ClearIcon from "shared/icons/delete.svg";
import SearchIcon from "shared/icons/search-circle.svg";
import { Container } from "shared/ui/Container";

import styles from "./styles.module.scss";

export const SearchUsers = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const onClear = () => {
    setValue("");
  };

  useEffect(() => {
    dispatch(usersModel.actions.setSearch(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className={styles.container}>
      <Container gap={10} justify="center" align="center">
        <SearchIcon />

        <input
          value={value}
          type="text"
          className={styles.search__input}
          onChange={onChange}
        />

        <span onClick={onClear} className={styles.search__clear}>
          <ClearIcon />
        </span>
      </Container>
    </div>
  );
};
