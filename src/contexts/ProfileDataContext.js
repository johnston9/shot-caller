// Context file to fetch all Profiles
// Containing the handleFollow and unhandleFollow functions
// Which use the followHelper function in utils
// query context is just used to reload after selection is changed
import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { followHelper, unfollowHelper } from "../utils/utils";
import { useSetCurrentUser } from "./CurrentUserContext";


export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData  = () => useContext(SetProfileDataContext);

export const QueryContext = createContext();
export const SetQueryContext = createContext();
export const useQueryContext = () => useContext(QueryContext);
export const useSetQueryContext  = () => useContext(SetQueryContext);

export const ProfileDataProvider = ({children}) => {
  // eslint-disable-next-line
  const [hasLoaded, setHasLoaded] = useState(false);
    const[query, setQuery] = useState("");
    const [profileData, setProfileData] = useState({
        pageProfile: { results: [] },
        profiles: { results: [] },
    })

    const currentUser = useSetCurrentUser();

    const handleFollow = async (clickedProfile) => {
      try {
        const { data } = await axiosRes.post("/followers/", {
          followed: clickedProfile.id,
        });

        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: {
            results: prevState.pageProfile.results.map((profile) => 
            followHelper(profile, clickedProfile, data.id)
            ),
          },
          profiles: {
            ...prevState.profiles,
            results: prevState.profiles.results.map((profile) => 
            followHelper(profile, clickedProfile, data.id)
            ),
          },
        }));
      } catch(err) {
        console.log(err)
      }
    }

    const handleUnfollow = async (clickedProfile) => {
      try {
        await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: {
            results: prevState.pageProfile.results.map((profile) =>
              unfollowHelper(profile, clickedProfile)
            ),
          },
          profiles: {
            ...prevState.profiles,
            results: prevState.profiles.results.map((profile) =>
              unfollowHelper(profile, clickedProfile)
            ),
          },
        }));
      } catch(err) {
      }
    }

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