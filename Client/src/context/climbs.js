import React, { createContext, useContext, useState } from "react";

export const ClimbsContext = createContext();

export default function ClimbsProvider({ children }) {
  const [climbs, setClimbs] = useState(null);
  return (
    <ClimbsContext.Provider value={{ climbs, setClimbs }}>
      {children}
    </ClimbsContext.Provider>
  );
}
export function useClimbs() {
  const context = useContext(ClimbsContext);
  const { climbs, setClimbs } = context;
  return { climbs, setClimbs };
}
