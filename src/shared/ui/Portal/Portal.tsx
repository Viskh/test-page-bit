import type { FC, ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { createDiv } from "./config";

export type PortalType = {
  children: ReactNode;
};

export const Portal: FC<PortalType> = ({ children }) => {
  const [container] = useState(createDiv);

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return createPortal(children, container);
};
