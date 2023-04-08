/* Fix needed - for the gmail mobile browser issue
 * useRedirectSign function to direct a logged in user to the landing page
   when they go to the Signin or Sign up pages
 * If the user is logged in the landing page will display the home page
   if not it will display the go to sign in or sign up message
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
      back to the landing page if so */
    const handleMount = async () => {
      try {
        const data = await axios.post("/dj-rest-auth/token/refresh/");
        console.log(data);
        console.log("RedirectSign");
        // if user is logged in
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // if user is not logged in
        // if (userAuthStatus === "loggedOut") {
        //   history.push("/");
        // }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};

export default useRedirectSign