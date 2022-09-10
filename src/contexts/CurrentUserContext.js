import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router-dom";
import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";

export const SigninContext = createContext();
export const SetSigninContext = createContext();
export const useSignin = () => useContext(SigninContext);
export const useSetSignin = () => useContext(SetSigninContext);

export const RedirectContext = createContext();
export const SetRedirectContext = createContext();
export const useRedirect = () => useContext(RedirectContext);
export const useSetRedirect = () => useContext(SetRedirectContext);

export const TokenContext = createContext();
export const SetTokenContext = createContext();
export const useToken = () => useContext(TokenContext);
export const useSetToken = () => useContext(SetTokenContext);

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

// npm install -g heroku heroku login -i
// davejohnston9@gmail.com
// Chasing9%
// heroku logs --tail
// git push heroku main
// git rm .env --cached
// git commit -m "Stopped tracking .env File"
// xxxxx

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [redirect, setRedirect] = useState(null);
  const [signin, setSignin] = useState(null);
  const history = useHistory();

  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  useMemo(() => {
    axiosReq.interceptors.request.use(
      async (config) => {
        if (shouldRefreshToken()) {
          try {
            const {data} = await axios.post("/dj-rest-auth/token/refresh/");
            setToken(data);
            setSignin(`inter`)
          } catch (err) {
            setSignin(`inter error`)
            console.log(err);
              }
        }        
        return config;
      },
      (err) => {
        console.log(`inter req 3 error `);
        return Promise.reject(err);
      }
    );

    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                history.push("/signin");
              }
              return null;
            });
            removeTokenTimestamp();
          }
          return axios(err.config);
        }
        return Promise.reject(err);
      }
    );
  }, [history]);

  // useMemo(() => {
  //   axiosReq.interceptors.request.use(
  //     async (config) => {
  //       if (shouldRefreshToken()) {
  //         try {
  //           const {data} = await axios.post("/dj-rest-auth/token/refresh/");
  //           setToken(data);
  //           console.log(data);
  //         } catch (err) {
  //           setCurrentUser((prevCurrentUser) => {
  //             if (prevCurrentUser) {
  //               history.push("/signin");
  //             }
  //             return null;
  //           });
  //           removeTokenTimestamp();
  //           return config;
  //         }
  //       }        
  //       return config;
  //     },
  //     (err) => {
  //       console.log(`inter req 3 error `);
  //       return Promise.reject(err);
  //     }
  //   );

  //   axiosRes.interceptors.response.use(
  //     (response) => response,
  //     async (err) => {
  //       if (err.response?.status === 401) {
  //         try {
  //           await axios.post("/dj-rest-auth/token/refresh/");
  //         } catch (err) {
  //           setCurrentUser((prevCurrentUser) => {
  //             if (prevCurrentUser) {
  //               history.push("/signin");
  //             }
  //             console.log(`inter res 2 error `);
  //             return null;
  //           });
  //           removeTokenTimestamp();
  //         }
  //         return axios(err.config);
  //       }
  //       return Promise.reject(err);
  //     }
  //   );
  // }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
      <TokenContext.Provider value={token}>
      <SetTokenContext.Provider value={setToken}>
      <RedirectContext.Provider value={redirect}>
      <SetRedirectContext.Provider value={setRedirect}>
      <SigninContext.Provider value={signin}>
      <SetSigninContext.Provider value={setSignin}>
        {children}
      </SetSigninContext.Provider>
      </SigninContext.Provider>
        </SetRedirectContext.Provider>
      </RedirectContext.Provider>
      </SetTokenContext.Provider>
    </TokenContext.Provider>
    </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};