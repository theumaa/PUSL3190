import React, { useEffect, useState,useContext } from "react";
import styles from "./PopUpOne.module.css";
import { UserContext } from "./MainTemplate";
import Api from "./Api";
function PopUpOne({time,court,cancel,stepTwoBooking,userBooking}){
   const [from, setFrom]=useState(); 
   const [to,setTo]=useState();
   const {user,setUser} = useContext(UserContext);
  useEffect(()=>{
    if(time<9)
    {
     setFrom('0'+time);
     time+1 < 9 ? setTo('0'+(parseInt(time)+1)):setTo(parseInt(time)+1);
    }
    if(time===0)
    {
     setTo('01');
     setFrom('12');

    }
    else{
      setFrom(time)
      setTo(time+1)
    }
 

  },[])
    return (
       <div className={styles.Expand}>
            <div className={styles.Parent}>
                <div className={styles.Topic}>
                    SELECTED HOURS
                </div>
                <div className={styles.OtherText}>
                     COURT {court+1}   -   {from}:00 PM  -  {to}:00 PM
                </div>
                <div className={styles.ButtonsArea}>
                   <div onClick={user!=='undefined'? ()=>stepTwoBooking():()=>userBooking()} className={styles.BookNow}>
                     Book Now
                   </div>
                   <div onClick={()=>(cancel())} className={styles.Cancel}>
                     Cancel
                   </div>
                </div>
            </div>
       </div> 
    );
}

export default PopUpOne;