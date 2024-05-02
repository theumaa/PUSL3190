import React from "react";
import styles from "./PopUpOne.module.css";
function PopUpOne(){
    return (
       <div className={styles.Expand}>
            <div className={styles.Parent}>
                <div className={styles.Topic}>
                   YOUR BOOKING IS COMPLETED !!!               
                </div>
            </div>
       </div> 
    );
}

export default PopUpOne;