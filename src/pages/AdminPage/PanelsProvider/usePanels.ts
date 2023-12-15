import { useContext } from "react";

import { PanelsContext } from "./provider";

export const usePanels = () => useContext(PanelsContext);
