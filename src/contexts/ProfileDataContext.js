import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useSetCurrentUser } from "./CurrentUserContext";


export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData  = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({children}) => {
    const [profileData, setProfileData] = useState({
        popularProfiles: { results: [] },
    })
    // const { popularProfiles } = profileData;
    const currentUser = useSetCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(
              "/profiles/?ordering=-followers_count"
            );
            setProfileData((prevState) => ({
              ...prevState,
              popularProfiles: data,
            }));
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [currentUser]);

      return (
        <ProfileDataContext.Provider value={profileData}>
        <SetProfileDataContext.Provider value={setProfileData}>
            {children}
        </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>

      )
}