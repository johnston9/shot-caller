import { createContext, useContext,  useEffect,  useState } from "react";
import { axiosReq } from "../api/axiosDefaults";

export const CrewInfoContext = createContext();
export const SetCrewInfoContext = createContext();
export const useCrewInfoContext = () => useContext(CrewInfoContext);
export const useSetCrewInfoContext = () => useContext(SetCrewInfoContext);

export const DayContext = createContext();
export const SetDayContext = createContext();
export const useDayContext = () => useContext(DayContext);
export const useSetDayContext = () => useContext(SetDayContext);

export const CrewInfoProvider = ({ children }) => {
    const [shootDay, setShootDay] = useState("");
    const [crewInfo, setCrewInfo] = useState({ results: [] });
    const crewInfoOne = crewInfo[0];

    const fetchCrewInfo = async () => {
        try {
          const { data } = await axiosReq.get(`/crewinfo/`);
          console.log(data)
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
               <DayContext.Provider value={shootDay} >
                 <SetDayContext.Provider value={setShootDay} >
                   {children}
                </SetDayContext.Provider>
                </DayContext.Provider>
            </SetCrewInfoContext.Provider>
        </CrewInfoContext.Provider>
    )
}