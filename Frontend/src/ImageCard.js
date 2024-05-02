import React from "react";
import styles from "./ImageCard.module.css";

function ImageCard({image,caption,onclick}){
 return (
        <div onClick={()=>onclick(caption)} className={styles.Parent}>
            <img src={image} className={styles.Image} alt="t"/>
            <div className={styles.Caption}>{caption[0]}</div>
        </div>
 );
}

export default ImageCard;