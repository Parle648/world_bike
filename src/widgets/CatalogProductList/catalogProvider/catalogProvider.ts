import { createContext } from "react";
import provider from "./types/catalogProviderTypes";

const CatalogProvider = createContext<{handleCatalogState: any} | undefined>(undefined);

export { CatalogProvider };