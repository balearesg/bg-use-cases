import * as React from "react";

export const ClinicsContext = React.createContext({} as any);
export const ClinicsUseContext = () => React.useContext(ClinicsContext);
