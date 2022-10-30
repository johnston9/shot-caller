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

const testris = 1667112604;
const testnewris = new Date(testris).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});

const testset = 1667147885;
const testnewset = new Date(testset).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});

// const [weatherData, setWeatherData] = useState([{}]);
// const [weatherData, setWeatherData] = useState([{}]);
// const [city, setCity] = useState("");
// const sunrise = weatherData.sys.sunrise;
// const sun1 = 1661834187;
const sunnewnow = new Date(1667171127).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
// const sunnew = new Date(sun1).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});

// https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=d9aad82b1608c5ec1ba1ed0ced3fc168

useEffect(() => {
    const search = () => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${weather_location}&units=metric&APPID=d9aad82b1608c5ec1ba1ed0ced3fc168`
        )
          .then((response) => response.json())
          .then((data) => {
            const sunrisenew = new Date(data.sys?.sunrise).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});
            const sunsetnew = new Date(data.sys?.sunset).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
            // setWeatherData(data);
            // setForcast(data?.main);
            console.log(data)
            if (data.main) {
                setForcast(data?.weather[0]?.main)
            setTemp(data.main?.temp);
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
      {/* <p style={{ textTransform: 'uppercase'}} >{sunnew} </p>
      <p style={{ textTransform: 'uppercase'}}>{sunnewnow} </p> */}
        {/* <input 
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={search}
        className={`${styles.Input} mb-3`} /> */}
    <div>
    <Row>
    <Col>
    <p>{forcast}</p>
    <p>{temp} C</p>
    <p style={{ textTransform: 'uppercase'}}>{rise}</p>
    <p>{testnewris} </p>
    <p style={{ textTransform: 'uppercase'}}>{setsun}</p>
    <p>{testnewset} </p>
    <p>{sunnewnow} </p>
    </Col>
    </Row>
    </div>
    </div>
  )
}

export default Weather