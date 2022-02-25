import { createContext, useContext,  useEffect,  useState } from "react";
import { useHistory } from 'react-router';
import { axiosReq } from "../api/axiosDefaults";

export const DateContext = createContext();
export const SetDateContext = createContext();
export const useDateContext = () => useContext(DateContext);
export const useSetDateContext = () => useContext(SetDateContext);

export const DateProvider = ({ children }) => {
  const history = useHistory();
    const [date, setDate] = useState("");

    useEffect(() => {
      const handleMount = async () => {
        try {
          const { data } = await axiosReq.get(`/days/?date=${date} `);
          const id = data.id
          history.push(`/days/${id}/`);
        } catch (err) {
          console.log(err);
        }
      };
  
      handleMount();
    }, [date]);

    return (
        <DateContext.Provider value={date}>
          <SetDateContext.Provider value={setDate}>
            {children}
          </SetDateContext.Provider>
        </DateContext.Provider>
    )
}