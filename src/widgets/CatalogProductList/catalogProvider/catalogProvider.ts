import { createContext } from "react";
import provider from "./types/catalogProviderTypes";

const catalogProvider = createContext<{productListState: provider, setproductListState: any, handleCatalogState: any} | undefined>(undefined);

export { catalogProvider };