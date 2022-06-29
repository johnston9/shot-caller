import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

export const useRedirect = (userAuthStatus) => {
  const currentUser = useCurrentUser();
  console.log(`RedirCurrent ${currentUser} ${userAuthStatus} `);
  // const history = useHistory();

  useEffect(() => {
    const handleMount = () => {
      // if(!currentUser) {
      //   history.push("/");
      // }
      console.log(`RedirCurrent2 UseEffect ${currentUser} ${userAuthStatus} `);
    };

    handleMount();
  }, [currentUser]);
};