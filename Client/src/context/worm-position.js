import React, { createContext, useContext, useState } from "react";

export const WormPosition = createContext();

export default function WormPositionProvider({ children }) {
  const [wormPosition, setWormPosition] = useState(0);
  return (
    <WormPosition.Provider value={{ wormPosition, setWormPosition }}>
      {children}
    </WormPosition.Provider>
  );
}
export function useWormPosition() {
  const context = useContext(WormPosition);
  const { wormPosition, setWormPosition } = context;
  return { wormPosition, setWormPosition };
}
