import { createContext } from "react";
import provider from "./types/catalogProviderTypes";

const CatalogProvider = createContext<{productListState: provider, setproductListState: any, handleCatalogState: any} | undefined>(undefined);

export { CatalogProvider };