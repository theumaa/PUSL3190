import React from "react";
import styles from "./ReachUsPage.module.css";
import ss from "./ss.png";
import Telephone from './Telephone.svg';
import clock from './clock.svg';
import email from './email.svg';

function ReachUsPage(){
    return(
    <div className={styles.Parent}>
      <div className={styles.Half}>
          <div className={styles.Topic} >REACH US</div>
          <img src={ss} className={styles.Img} alt="k"></img>
      </div>
      <div className={styles.Half}>
          <div className={styles.Topic} >GET IN TOUCH</div>
       <div className={styles.OneThird}>
          <img alt="phone" className={styles.Phone} src={Telephone}/>
          <div className={styles.Phone}>  (+94) 712554961</div> 
       </div> 
        <div className={styles.OneThird}>
            <img alt="email" className={styles.Email} src={email}/>
             Email Us : info@latteral.lk   
        </div>
        <div className={styles.OneThird}>
            <img alt="clock" className={styles.Clock} src={clock}/>
            Open Hours : Everyday 05:00 - 00:00
        </div>
        <div className={styles.Box}>
            

        </div>
        <div className={styles.FormArea}>
            <div className={styles.FormAreaRow}>
                <input className={styles.Input} type ='text' placeholder="First Name *" />
                <input className={styles.Input} type ='text' placeholder="Last Name *" />
            </div>
            <div className={styles.FormAreaRow}>
                <input className={styles.Input} type ='text' placeholder="Email *" />
                <input className={styles.Input} type ='text' placeholder="Mobile *" />
            </div>
            <input className={styles.InputSingle} type ='text' placeholder="Please write your inquiry *" />
            <div className={styles.Button}>
            SUBMIT
            </div>
        </div>
      </div>
    </div>
        
        );
}

export default ReachUsPage;