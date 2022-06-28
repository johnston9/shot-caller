import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

export const useRedirect = (userAuthStatus) => {
  const currentUser = useCurrentUser();
  const history = useHistory();

  useEffect(() => {
    const handleMount = () => {
      // if(!currentUser) {
      //   history.push("/");
      // }
      console.log("REDIRECT")
    };

    handleMount();
  }, []);
};