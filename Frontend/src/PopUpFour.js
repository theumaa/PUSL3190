import React, { useEffect, useState,useRef } from "react";
import styles from "./PopUpFour.module.css";
function PopUpFour({cancel,save}){
   const status= useRef();
   const amount=useRef();
    return (
       <div className={styles.Expand}>
            <div className={styles.Parent}>
                <div className={styles.Topic}>
                    SELECT STATUS
                </div>

                <div className={styles.OtherText}>
                    <input ref={amount} type='text' placeholder="Paid amount" className={styles.InputElement}/>
                    <select className={styles.InputElement} ref={status} >
                        <option value='paid'>paid</option>
                        <option value='completed'>completed</option>
                        <option value='rejected'>rejected</option>

                    </select>
                </div>
                <div className={styles.ButtonsArea}>
                   <div onClick={()=>save(status.current.value,amount.current.value)} className={styles.BookNow}>
                     Save
                   </div>
                   <div onClick={()=>{cancel()}} className={styles.Cancel}>
                     Cancel
                   </div>
                </div>
            </div>
       </div> 
    );
}

export default PopUpFour;