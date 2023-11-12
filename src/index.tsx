import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

const root = createRoot(document.querySelector<HTMLDivElement>("#root")!);

root.render(
  <StrictMode>
    <h1>CataLOGue</h1>
  </StrictMode>
);