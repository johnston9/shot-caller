import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSetRedirect } from "../contexts/CurrentUserContext";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();
  // const [redirect, setRedirect] = useState(null);
  const setRedirect = useSetRedirect();
  useEffect(() => {
    const handleMount = async () => {
      try {
        // const {data} = await axios.post("/dj-rest-auth/token/refresh/");
        const { data } = await axiosRes.get("dj-rest-auth/user/");
        setRedirect(data);
        console.log(data);
        console.log("Redirect");
        // if user is logged in
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // if user is not logged in
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};

export default useRedirect