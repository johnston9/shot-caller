/* Fix needed - Gmail mobile browser issue
 * useRedirect function to direct non logged in users to the landing page
* If the user is logged in the landing page will display the home page
   if not it will display the go to sign in or sign up message
  The  Gmail mobile browser issue is affecting the original code which
  used a request to see if there is a refresh token */
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();
  const user = useCurrentUser();

  useEffect(() => {
    /* Function to check if a user is logged in and redirect they
      back to the landing page if not */
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