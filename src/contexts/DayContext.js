import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";

export const DayDataContext = createContext();
export const SetDayDataContext = createContext();

export const useDayData = () => useContext(DayDataContext);
export const useSetDayData  = () => useContext(SetDayDataContext);

export const QueryContext = createContext();
export const SetQueryContext = createContext();
export const useQueryContext = () => useContext(QueryContext);
export const useSetQueryContext  = () => useContext(SetQueryContext);

export const DayDataProvider = ({children}) => {
  const [hasLoaded, setHasLoaded] = useState(false);
    const[query, setQuery] = useState("");
    const [profileData, setProfileData] = useState({
        pageProfile: { results: [] },
        profiles: { results: [] },
    })

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/profiles/?ordering=-followers_count&search=${query}`);
            setProfileData((prevState) => ({
              ...prevState,
              profiles: data,
            }));
            setHasLoaded(true);
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [currentUser, query]);

      return (
        <ProfileDataContext.Provider value={profileData}>
          <SetProfileDataContext.Provider value={{setProfileData, handleFollow, handleUnfollow}}>
            <QueryContext.Provider value={query}>
              <SetQueryContext.Provider value={setQuery}>
                {children}
              </SetQueryContext.Provider>
            </QueryContext.Provider>
          </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>

      )
}