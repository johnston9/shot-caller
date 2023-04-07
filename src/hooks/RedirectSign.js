// Fix needed - gmail mobile browser issue
// useRedirectSign function to direct a logged in user to the landing page
// when they go to the Signin or Sign up pages
// It originally allowed them to stay on these pages in the catch part
// but this did not work in the mobile gmail browser 
// as the fetch always returned a 404
// so it is commented out
import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useRedirectSign = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
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