import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../api/axiosDefaults";
import { useCurrentUser, useSetRedirect } from "../contexts/CurrentUserContext";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();
  const setRedirect = useSetRedirect();
  const user = useCurrentUser();
  useEffect(() => {
    const handleMount = async () => {
      if (!user) {
        history.push("/");
      }
    };

    handleMount();
  }, [history]);
};

export default useRedirect