import { createContext, useContext,  useEffect,  useState } from "react";
import { axiosReq } from "../api/axiosDefaults";

export const CrewInfoContext = createContext();
export const SetCrewInfoContext = createContext();
export const useCrewInfoContext = () => useContext(CrewInfoContext);
export const useSetCrewInfoContext = () => useContext(SetCrewInfoContext);

export const EditCrewInfoContext = createContext();
export const SetEditCrewInfoContext = createContext();
export const useEditCrewInfoContext = () => useContext(EditCrewInfoContext);
export const useSetEditCrewInfoContext = () => useContext(SetEditCrewInfoContext);

export const CrewInfoProvider = ({ children }) => {
    const [editCrewInfo, setEditCrewInfo] = useState(false);
    const [crewInfo, setCrewInfo] = useState({ results: [] });

    const fetchCrewInfo = async () => {
        try {
          const { data } = await axiosReq.get(`/crewinfonew/`);
          setCrewInfo(data);
          setEditCrewInfo(false);
          console.log(data);
          console.log(crewInfo)
        } catch(err) {
          console.log(err);
        }
      }
    
      useEffect(() => {
        fetchCrewInfo();
      }, [editCrewInfo]);

    return (
        <CrewInfoContext.Provider value={crewInfo}>
            <SetCrewInfoContext.Provider value={setCrewInfo}>
            <EditCrewInfoContext.Provider value={editCrewInfo}>
              <SetEditCrewInfoContext.Provider value={setEditCrewInfo}>
                {children}
              </SetEditCrewInfoContext.Provider>
            </EditCrewInfoContext.Provider>
            </SetCrewInfoContext.Provider>
        </CrewInfoContext.Provider>
    )
}