/* Fix needed - Gmail mobile browser issue and refresh issue
 * useRedirect function to direct non logged in users to the landing page
 * The Gmail mobile browser issue was affecting the original code which
   used a request to see if there is a refresh token
 * It is also affecting the request to dj-rest-auth/user which I used
   to replace the refresh token request 
 * The "loggedOut" parameter in all useRedirect functions which are 
   on all components is redundent at the moment */
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

//   useEffect(() => {
//     /* Function to check if a user is logged in and redirect them
//       back to the landing page if not but had to be commented out 
//       as was redirecting after a refresh page */
//     const handleMount = async () => {
//       const user = useCurrentUser();
//       if (!user) {
//         // history.push("/");
//         console.log(`Redirected ${user} `)
//       }
//     };

//     handleMount();
//     // eslint-disable-next-line
//   }, [history, userAuthStatus, ]);
// };

export default useRedirect