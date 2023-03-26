import { createContext, useContext,  useEffect,  useState } from "react";
import { axiosReq } from "../api/axiosDefaults";

export const CrewInfoContext = createContext();
export const SetCrewInfoContext = createContext();
export const useCrewInfoContext = () => useContext(CrewInfoContext);
export const useSetCrewInfoContext = () => useContext(SetCrewInfoContext);

export const CrewEmailsContext = createContext();
export const SetCrewEmailsContext = createContext();
export const useCrewEmailsContext = () => useContext(CrewEmailsContext);
export const useSetCrewEmailsContext = () => useContext(SetCrewEmailsContext);

export const EditCrewInfoContext = createContext();
export const SetEditCrewInfoContext = createContext();
export const useEditCrewInfoContext = () => useContext(EditCrewInfoContext);
export const useSetEditCrewInfoContext = () => useContext(SetEditCrewInfoContext);

export const CrewInfoProvider = ({ children }) => {
    const [editCrewInfo, setEditCrewInfo] = useState(false);
    const [crewInfo, setCrewInfo] = useState({ results: [] });
    const [emails, setEmails] = useState({ results: [] });

    // for ( const [key,value] of Object.entries( obj ) ) {
    //   if (key.includes("email")) {
    //     return value
    //   }
    // }

  //   for (const [key, value] of Object.entries(test)) {
  //     console.log(key, value);
  //   }

  //   const emailArray = Object.keys(obj).forEach(function (key) {
  //     return key.includes("email");
  //  });

    // let check = [{name: 'trent'}, {name: 'jason'}]
    // .map(item => item.name)
    // .includes('email');

    // const checkIfEmailExist = (objectName, keyName) => {
    //   let emailExist = Object.keys(objectName).some(key => key === keyName);
    //   return emailExist;};

    const fetchCrewInfo = async () => {
        try {
          const { data } = await axiosReq.get(`/crewinfonew/`);
          setCrewInfo(data.results[0]);
          // const emailArray = Object.keys(data.results[0]).forEach(function (key) {
          //   return key.includes("email");
          // });
          // console.log(emailArray);
          let emailArray = [] ;
          for ( const [key,value] of Object.entries( data.results[0] ) ) {
            if (key.includes("email") && value.length > 0 ) {
              emailArray.push(value)
            }
          }
          setEmails(emailArray);
          setEditCrewInfo(false);
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
            <CrewEmailsContext.Provider value={emails}>
              <SetCrewEmailsContext.Provider value={setEmails}>
               <EditCrewInfoContext.Provider value={editCrewInfo}>
                <SetEditCrewInfoContext.Provider value={setEditCrewInfo}>
                {children}
                </SetEditCrewInfoContext.Provider>
              </EditCrewInfoContext.Provider>
            </SetCrewEmailsContext.Provider>
            </CrewEmailsContext.Provider>
            </SetCrewInfoContext.Provider>
        </CrewInfoContext.Provider>
    )
}