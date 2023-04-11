/* useRedirect function to direct non logged in users to the landing page
 * Fix needed - Gmail mobile browser issue: 
   The app does not work when the link is clicked in Gmail. 
   The DRF tail logs show 401 for requests
   If the link in Gmail is pressed so as to offer an open in 
   browser option the app does work.
 * The Gmail mobile browser issue was affecting the original code which
   used a request to see if there is a refresh token
 * It is also affecting the request to dj-rest-auth/user which I used
   to replace the refresh token request 
 * FIX NEEDED REFRESH ISSUE
   I attempted to use the useCurrenrUser instead of making continued
   request by on REFRESH this returned null */
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../api/axiosDefaults";

export const useRedirect = () => {
  const history = useHistory();
  /* Function to check if a user is logged in and redirect them
      back to the landing page if not */
      const handleMount = async () => {
        try {
          const { data } = await axiosRes.get("dj-rest-auth/user/");
          if (data) {
            console.log(`Not Redirected ${data.username}`)
        }      
      } catch (err) {
        history.push("/");
          console.log(` Redirected to Landing`)
      }}
      useEffect(() => {   
        handleMount();
        // eslint-disable-next-line
      }, [history]);
    };

export default useRedirect