/* Fix needed - for the gmail mobile browser issue
 * useRedirectSign function to direct a logged in user to the Home page
   when they go to the Signin page
 * The catch block throws an error because of the mobile gmail 
   browser issue not allowing posts and returned a 404
   so it is commented out */
import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useRedirectSign = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    /* Function to check if a user is logged in and redirect they
      to the Home page if so */
    const handleMount = async () => {
      try {
        const data = await axios.post("/dj-rest-auth/token/refresh/");
        // if user is logged in
        history.push("/home");
        console.log(`RedirectSign loggedIn ${data}`);
      } catch (err) {
        console.log("RedirectSign NOT loggedIn");
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};

export default useRedirectSign