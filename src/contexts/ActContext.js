import { createContext, useContext,  useState } from "react";
import { useHistory } from "react-router";

export const ActContext = createContext();
export const SetActContext = createContext();
export const useActContext = () => useContext(ActContext);
export const useSetActContext = () => useContext(SetActContext);

export const ActProvider = ({ children }) => {
    const [act, setAct] = useState("");
    const history = useHistory();

    return (
        <ActContext.Provider value={act}>
          <SetActContext.Provider value={setAct}>
            {children}
          </SetActContext.Provider>
        </ActContext.Provider>
    )
}