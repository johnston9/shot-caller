// Fix needed - Gmail mobile browser issue, (if there is a better way of doing this)
// useRedirect function to direct non logged in users to the landing page
// It originally used a request to see if there is a refresh token
// but this did not work in the mobile gmail browser
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