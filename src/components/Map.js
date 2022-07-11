import React, { useMemo } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../styles/Map.module.css";
// import TopBox from '../../components/TopBox';
import { GoogleMap, Marker, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete, 
{getGeocode, getLatLng } from "use-places-autocomplete";
import { useState } from "react";
import { useEffect } from "react";

function MapPage({address}) {
  // const center = useMemo(() => ({lat: 53.3498, lng: 6.2603 }), []) ;
  // center={{lat: 53.3498, lng: -6.2603 }}
  // position={{lat: 40.7128, lng: -74.0060 }}
  const [selected, setSelected] = useState(null);
  useEffect(() => {
     const handleAddress = async () => {
     const result = await getGeocode({address});
     console.log(result);
     const {lat, lng} = await getLatLng(result[0]);
     setSelected({lat, lng});
         }
    handleAddress();
  }, []);
  return (
    <div>
    <Row className="my-3">
    <Col md={{span: 10, offset:1 }}>
    <GoogleMap 
    zoom={10}
    center={{lat: 53.3498, lng: -6.2603 }}
    mapContainerClassName={` ${styles.Map}`}
     >
    {selected && <Marker 
     position={selected} /> }
     </GoogleMap>
    </Col>
    </Row>
    </div>
  )
}

  const Map = () => {
  const mapKey = process.env.REACT_APP_MAP_KEY;
  const { isLoaded} = useLoadScript({googleMapsApiKey: mapKey,
  libraries: ["places"],
  })
  const address = "72 Grafton Street, Dublin 1, Ireland"

  return (
    <div>
      {isLoaded ? (<MapPage address={address}  />) : ("") }
    </div>
  )
}

export default Map