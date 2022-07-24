import { createContext } from "react";
import { AppConfig } from "../types/AppContext.types";

export type AppContextValue = {
  config: AppConfig;
};

export const AppContext = createContext<AppContextValue>(
  {} as unknown as AppContextValue,
);
