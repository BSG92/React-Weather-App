import { createContext } from "react";
import Type_City from "utils/types/CityType";

export const CityContext = createContext<Type_City | null | undefined>(undefined);