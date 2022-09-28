import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();
  const user = useCurrentUser();
  console.log(`${user} user1`)

  useEffect(() => {
    const handleMount = async () => {
      console.log(`${user} user2`)
      if (!user) {
        // history.push("/");
        console.log("redirected");
      }
    };

    handleMount();
    // eslint-disable-next-line
  }, [history, userAuthStatus, ]);
};

export default useRedirect