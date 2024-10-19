import React from 'react';
import styles from "../../styles/Indexes.module.css";

const Content = ({content}) => {
  return (
    <div className={` ${styles.Content }`}>
      <p>{content}</p>
    </div>
  )
}

export default Content