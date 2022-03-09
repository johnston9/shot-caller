import { createContext, useContext,  useEffect,  useState } from "react";
import { axiosReq } from "../api/axiosDefaults";

export const CrewInfoContext = createContext();
export const SetCrewInfoContext = createContext();
export const useCrewInfoContext = () => useContext(CrewInfoContext);
export const useSetCrewInfoContext = () => useContext(SetCrewInfoContext);

export const CrewInfoProvider = ({ children }) => {
    const [crewInfo, setCrewInfo] = useState({ results: [] });
    const crewInfoOne = crewInfo[0];

    const fetchCrewInfo = async () => {
        try {
          const { data } = await axiosReq.get(`/crewinfo/`);
          setCrewInfo(data);
        } catch(err) {
          console.log(err);
        }
      }
    
      useEffect(() => {
        fetchCrewInfo();
      }, []);

    return (
        <CrewInfoContext.Provider value={crewInfoOne}>
            <SetCrewInfoContext.Provider value={setCrewInfo}>
                {children}
            </SetCrewInfoContext.Provider>
        </CrewInfoContext.Provider>
    )
}