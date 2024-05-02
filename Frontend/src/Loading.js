import logo from './logo.svg';
import styles from './Loading.module.css';
import React from 'react';

function Loading() {
  return (
    <div className={styles.LoadingPage}>
        <img src={logo}></img>
    </div>
  );
}

export default Loading;
