import React from "react";
import ComponentD from "./components/useContext Hook/ComponentD";
// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// ComponentD -> ComponentE -> ComponentF 
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function useContextHook() {
  return (
    <div>
      <UserContext.Provider value={"Maheswar"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentD />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default useContextHook;
