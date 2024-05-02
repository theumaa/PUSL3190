import React, { useEffect, useRef, useState } from "react";
import styles from "./PopUpTwo.module.css";
function PopUpTwo({time,court,cancel,stepThreeBooking}){
  const name=useRef();
  const nic =useRef();
  const phone=useRef();
  const teen=useRef();

  const [from, setFrom]=useState(); 
  const [to,setTo]=useState();
 useEffect(()=>{
   if(time<9)
   {
    setFrom('0'+time);
    time+1 < 9 ?setTo('0'+time+1):setTo(time+1);
   }
   if(time===0)
   {
    setTo('01');
    setFrom('12');

   }


 },[])

 const validateInput= (name,nic,phone,teen)=>{
  if(name && nic && phone)
  {
    stepThreeBooking(name,nic,phone,teen);
  }
 }
    return (
       <div className={styles.Expand}>
            <div className={styles.Parent}>
                <div className={styles.Topic}>
                    SELECTED HOURS
                </div>
                <div className={styles.OtherText}>
                   FOR NON MEMBERS
                </div>
                <div className={styles.DateTime}>
                  COURT {court+1}   -   {from}:00 PM  -  {to}:00 PM
                </div>
                <div className={styles.InputArea}>
                    <div className={styles.InputLabel}>
                       Is the player above 18 years old ??
                    </div>
                    <select ref={teen} className={styles.InputElement}>
                        <option value={true}>Yes  </option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <div className={styles.InputArea}>
                    <div className={styles.InputLabel}>
                      Player Name
                    </div>
                    <input ref={name} type="text" placeholder="Player Name" className={styles.InputElement}/>
                </div>
                <div className={styles.InputArea}>
                    <div className={styles.InputLabel}>
                      Player/ Parent NIC Number
                    </div>
                    <input ref={nic} type="text" placeholder="Use parent’s ID if you are child" className={styles.InputElement}/>
                </div>
                <div className={styles.InputArea}>
                    <div className={styles.InputLabel}>
                    Phone Number                    </div>
                    <input ref={phone} type="text" placeholder="Phone Number" className={styles.InputElement}/>
                </div>
                <div className={styles.ButtonsArea}>
                   <div onClick={()=>validateInput(name.current.value,nic.current.value,phone.current.value,teen.current.value)} className={styles.BookNow}>
                     Book Now
                   </div>
                   <div onClick={()=>cancel()} className={styles.Cancel}>
                     Cancel
                   </div>
                </div>
            </div>
       </div> 
    );
}

export default PopUpTwo;