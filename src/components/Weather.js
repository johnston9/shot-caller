import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from "../styles/Weather.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
 
const Weather = ({weather_location} ) => {
const openkee = "d9aad82b1608c5ec1ba1ed0ced3fc168";
const openKey = process.env.OPEN_WEATHER_KEY;
const [forcast, setForcast] = useState("");
const [temp, setTemp] = useState("");
const [rise, setRise] = useState("");
const [setsun, setSetsun] = useState("");

useEffect(() => {
    const search = () => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${weather_location}&units=metric&APPID=d9aad82b1608c5ec1ba1ed0ced3fc168`
        )
          .then((response) => response.json())
          .then((data) => {
            const sunrisenew = new Date(data.sys?.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});
            const sunsetnew = new Date(data.sys?.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});
            console.log(data)
            if (data.main) {
                setForcast(data?.weather[0]?.main)
            setTemp(Math.round(data.main?.temp));
            setRise(sunrisenew);
            setSetsun(sunsetnew);
            }
          });
    };
    search();
  }, [])

// const search = () => {
//       fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.OPEN_WEATHER_KEY}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setWeatherData(data);
//           setCity("");
//         });
//   };
 
  return (
    <div className={`text-center ${styles.Box}`} >
      <div className={`mt-0 mb-3 text-center ${styles.SubTitle }`}>
      <h3 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >Weather </h3>
      </div>
    <div>
    <Row>
    <Col>
    <p>{forcast}</p>
    <p>{temp} C</p>
    <p style={{ textTransform: 'uppercase'}}>{rise}</p>
    <p style={{ textTransform: 'uppercase'}}>{setsun}</p>
    </Col>
    </Row>
    {/* <p style={{ textTransform: 'uppercase'}} >{sunnew} </p>
      <p style={{ textTransform: 'uppercase'}}>{sunnewnow} </p> */}
        {/* <input 
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={search}
        className={`${styles.Input} mb-3`} /> */}
    </div>
    </div>
  )
}

export default Weather