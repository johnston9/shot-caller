import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
// import { axiosReq } from '../../api/axiosDefaults';
import appStyles from "../../App.module.css";
// import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
import Asset from "../../components/Asset";
import Profile from './Profile';
import { useProfileData } from '../../contexts/ProfileDataContext';
import { useRedirect } from '../../hooks/Redirect';

const PopularProfiles = ({mobile}) => {
  useRedirect("loggedOut")
  const [show, setShow] = useState(false);
  const { popularProfiles } = useProfileData();
    return (
        <Container 
          className={`${appStyles.Content} ${
          mobile && "d-lg-none mb-3"
          }`}
         >
            {popularProfiles.results.length ? (
        <>
        <p onClick={() => setShow(show => !show)} >Most followed profiles.</p>
        {!show ? (
            ""
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} mobile />
            ))
          )}
      </>
      ) : (
        <Asset spinner />
      )}
        </Container>
    )
}

export default PopularProfiles
