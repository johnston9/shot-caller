import React, { useMemo } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../styles/Map.module.css";
// import TopBox from '../../components/TopBox';
import { GoogleMap, Marker, useJsApiLoader, useLoadScript } from '@react-google-maps/api';

function MapPage() {
  // const center = useMemo(() => ({lat: 53.3498, lng: 6.2603 }), []) ;
  // center={{lat: 53.3498, lng: -6.2603 }}
  // position={{lat: 40.7128, lng: -74.0060 }}
  return (
    <div>
    <Row className="mt-3">
    <Col md={{span: 10, offset:1 }}>
    <GoogleMap 
    zoom={10}
    center={{lat: 53.3498, lng: -6.2603 }}
    mapContainerClassName={` ${styles.Map}`}
     >
      <Marker 
     position={{lat: 53.3498, lng: -6.2603 }} />
     </GoogleMap>
    </Col>
    </Row>
    </div>
  )
}

const Map = () => {
  const mapKey = process.env.REACT_APP_MAP_KEY;
  const { isLoaded} = useLoadScript({googleMapsApiKey: mapKey })

  return (
    <div>
      {isLoaded ? (<MapPage  />) : ("") }
    </div>
  )
}

export default Map