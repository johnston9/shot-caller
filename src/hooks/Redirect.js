import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCurrentUser, useSetRedirect } from "../contexts/CurrentUserContext";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();
  const setRedirect = useSetRedirect();
  const user = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      setRedirect(user.username);
      console.log(user.username);
      console.log(userAuthStatus);
      if (!user) {
        history.push("/");
      }
    };

    handleMount();
    // eslint-disable-next-line
  }, [history, userAuthStatus, ]);
};

export default useRedirect