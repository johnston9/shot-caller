/* Function to check if a user is logged in and redirect them
      to the home page if so */
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

export const useRedirectHome = () => {
  const history = useHistory();
  const user = useCurrentUser();

  useEffect(() => {
    /* Function to check if a user is logged in and redirect them
      to the home page if so */
    const handleMount = async () => {
      if (user) {
        history.push("/home");
        console.log("Redirected Home")
      }
    };

    handleMount();
    // eslint-disable-next-line
  }, [history, ]);
};

export default useRedirectHome