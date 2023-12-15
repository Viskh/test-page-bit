import { Provider } from "react-redux";
import { AdminPage } from "pages/AdminPage";

import { store } from "./store";

import "shared/styles";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <AdminPage />
      </div>
    </Provider>
  );
};
