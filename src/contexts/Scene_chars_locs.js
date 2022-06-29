import { createContext, useContext,  useEffect,  useState } from "react";
import { axiosReq } from "../api/axiosDefaults";

export const ScenesContext = createContext();
export const SetScenesContext = createContext();
export const useScenesContext = () => useContext(ScenesContext);
export const useSetScenesContext = () => useContext(SetScenesContext);

export const CharactersContext = createContext();
export const SetCharactersContext = createContext();
export const useCharactersContext = () => useContext(CharactersContext);
export const useSetCharactersContext = () => useContext(SetCharactersContext);

export const LocationsContext = createContext();
export const SetLocationsContext = createContext();
export const useLocationsContext = () => useContext(LocationsContext);
export const useSetLocationsContext = () => useContext(SetLocationsContext);

export const ScenesCharactersLocationsProvider = ({ children }) => {
    const [scenes, setScenes] = useState({ results: [] });
    const [characters, setCharacters] = useState({ results: [] });
    const [locations, setLocations] = useState({ results: [] });

    const fetchScenes = async () => {
        try {
          const { data } = await axiosReq.get(`/scenes/`);
          setScenes(data);
          console.log("Scenes");
        } catch(err) {
          console.log(err);
        }
      }

    const fetchCharacters = async () => {
        try {
          const { data } = await axiosReq.get(`/characters/`);
          setCharacters(data);
        } catch (err) {
        }
      };

      const fetchLocations = async () => {
        try {
          const { data } = await axiosReq.get(`/locations/`);
          setLocations(data);
        } catch (err) {
        }
      };
    
      useEffect(() => {
        fetchScenes();
        fetchCharacters();
        fetchLocations();
      }, []);

    return (
        <ScenesContext.Provider value={scenes}>
            <SetScenesContext.Provider value={setScenes}>
                <CharactersContext.Provider value={characters}>
                    <SetCharactersContext.Provider value={setCharacters}>
                        <LocationsContext.Provider value={locations}>
                            <SetLocationsContext.Provider value={setLocations}>
                                {children}
                            </SetLocationsContext.Provider>
                        </LocationsContext.Provider>
                    </SetCharactersContext.Provider>
                </CharactersContext.Provider>
            </SetScenesContext.Provider>
        </ScenesContext.Provider>
    )
}