import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();
  const user = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      if (!user) {
        // history.push("/");
        console.log("Redirected")
      }
    };

    handleMount();
    // eslint-disable-next-line
  }, [history, userAuthStatus, ]);
};

export default useRedirect