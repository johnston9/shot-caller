/* Second Component to hold the fetching data spinner and to display when
   a request fetches no results */
   import React from "react";
   import Spinner from "react-bootstrap/Spinner";
   import styles from "../styles/Asset.module.css";
   
   const Asset3 = ({ spinner, src, message, height, width }) => {
     return (
       <div className={`${styles.Asset3}`}>
         {spinner && <Spinner animation="border" />}
         <div>
         {message && <span className="ml-5 my-1">{message}</span>}
        <span >
         {src && <img className="ml-5" src={src} alt={message} height={height} width={width} />}
         </span>
         </div>
       </div>
     );
   };
   
   export default Asset3;