import React from "react";
import styles from "./OfferingPage.module.css";
import tik from "./tik.svg";
import { useNavigate } from 'react-router-dom';

function OfferingPage(){
   const navigate=useNavigate();
   const shift=(plan)=>{
      sessionStorage.setItem('plan',plan);
      navigate('/registerPage')
   }
    return (
       <div className={styles.Parent}>
          <div className={styles.Title}>
             <div className={styles.WhiteText}>PLANS</div> 
             <div className={styles.ColoredText}>&nbsp; FOR EVERYONE</div> 
          </div>
          <div className={styles.Rest}>
            <div className={styles.CardSilver}>
                <div className={styles.TopicSilver}>
                   SILVER SHUTTLE
                </div>
                <div className={styles.CardBody}>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       2 HOURS PER DAY
                    </div>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       AVAILABLE FOR 2 DAYS A WEEK                 
                   </div>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       MONTHLY PACKAGE( FOUR WEEKS)                    
                    </div>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       PERFORMANCE TRACKING                    
                    </div>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       TAP & PLAY                    
                    </div>
                    <div className={styles.Price}>
                       Rs 8,000
                    </div>
                </div>
                <div onClick={()=>shift(1)} className={styles.Button}>GET MEMBERSHIP</div>
                
            </div>
            <div className={styles.CardGoldern}>
            <div className={styles.TopicGoldern}>
                   GOLDERN SHUTTLE
                </div>
                <div className={styles.CardBody}>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       2 HOURS PER DAY
                    </div>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       AVAILABLE FOR 3 DAYS A WEEK                   </div>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       MONTHLY PACKAGE( FOUR WEEKS)                    
                    </div>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       PERFORMANCE TRACKING                    
                    </div>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       TAP & PLAY                    
                    </div>
                    <div className={styles.Price}>
                       Rs 12,000
                    </div>
                </div>
                <div onClick={()=>shift(2)} className={styles.Button}>GET MEMBERSHIP</div>
            </div>
            <div className={styles.CardPremium}>

            <div className={styles.TopicPremium}>
                   PREMIUM SHUTTLE
                </div>
                <div className={styles.CardBody}>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       2 HOURS PER DAY
                    </div>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       AVAILABLE FOR EVERYDAY                    </div>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       MONTHLY PACKAGE( FOUR WEEKS)                    
                    </div>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       PERFORMANCE TRACKING                    
                    </div>
                    <div className={styles.Point}>
                       <img className={styles.Tik} src={tik} alt="tik"/>
                       TAP & PLAY                    
                    </div>
                    <div className={styles.Price}>
                       Rs 28,000
                    </div>
                </div>
                <div onClick={()=>shift(3)} className={styles.Button}>GET MEMBERSHIP</div>
            </div>
          </div>
         
       </div> 
    );
}

export default OfferingPage;