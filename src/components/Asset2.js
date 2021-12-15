import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "../styles/Asset.module.css";

const Asset2 = ({ spinner, src, message, height, width }) => {
  return (
    <div className={`${styles.Asset}`}>
      {spinner && <Spinner animation="border" />}
      <div>
      {src && <img src={src} alt={message} height={height} width={width} />}
      {message && <span className="ml-5 my-1">{message}</span>}
      </div>
    </div>
  );
};

export default Asset2;