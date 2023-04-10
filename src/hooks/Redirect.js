/* Fix needed - Gmail mobile browser issue and refresh issue
 * useRedirect function to direct non logged in users to the landing page
 * The Gmail mobile browser issue was affecting the original code which
   used a request to see if there is a refresh token
 * It is also affecting the request in CurrentUserContext which I used
   to replace the refresh token request but that was also affected
   after every refresh 
 * The "loggedOut" parameter in all useRedirect functions which are 
   on all components is redundent at the moment */
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();
  const user = useCurrentUser();

  useEffect(() => {
    /* Function to check if a user is logged in and redirect them
      back to the landing page if not but had to be commented out 
      as was redirecting after a refresh page */
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