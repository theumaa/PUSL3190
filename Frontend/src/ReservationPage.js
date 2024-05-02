import styles from './ReservationPage.module.css';
import React, { useEffect, useState,useRef } from 'react';
import Vector from './Vector.svg';
import bad from './bad.png';
import PopUpThree from './PopUpThree';
import PopUpOne from './PopUpOne';
import PopUpTwo from './PopUpTwo'
import { useLocation ,useLoaderData} from "react-router-dom";
import  * as All  from './requests';   

function ReservationPage() {

  let date=new Date();
  const dayRef=useRef();
  let availableTimeSlots=useLoaderData();
  const [day,setDay]=useState(date.toISOString().substr(0,10));
  const [sport,setSports]=useState(0);
  const [PopUpOneState,setPopUpOneState]=useState(false);
  const [PopUpTwoState,setPopUpTwoState]=useState(false);
  const [PopUpThreeState,setPopUpThreeState]=useState(false);
  const [courtNumber,setCourtNumber]=useState();
  const [selectedTime ,setSelectedTime]=useState();
  const location = useLocation();
  const [bookedTimes,setBookedTimes]=useState([]);
  const popupToggle=useRef();

  useEffect(()=>{
    availableTimeSlots?.forEach(element => {
      setBookedTimes(oldArray => [...oldArray,  'court'+element.court+'at'+element.from]);
       
     });
  },[]);



 const stepTwoBooking=()=>{
  setPopUpOneState(false);
  setPopUpTwoState(true);

 }
document.onclick=()=>{PopUpThreeState && setSportsAndRefresh(sport); setPopUpThreeState(false);}
 const setSportsAndRefresh=async(val)=>{
  await setSports(val);
  sessionStorage.setItem('sport',val);
  changeOccured();
 }

const userBooking=async()=>{
  let obj={
    date:dayRef.current.value,
    from:selectedTime,
    sport:location.state[sport],
    court:courtNumber,
   }
   let res= await All.userBooking(obj);
   if(res==='success'){setPopUpThreeState(true);}else{
    popupToggle.current.innerText="Something went Wrong!";
         popupToggle.current.style.display="block";
         setTimeout(()=>popupToggle.current.style.display="none", 1200);
   }
}


 const stepThreeBooking=async(name,nic,phone,teen)=>{
  let obj={
   date:dayRef.current.value,
   from:selectedTime,
   sport:location.state[sport],
   court:courtNumber,
   name:name,
   nic:nic,
   contact:phone,
   teen:teen?1:0
  }
  await All.setAvailability(obj);
  setPopUpTwoState(false);
  setPopUpThreeState(true);
 }

   const changeOccured= async()=>{
    availableTimeSlots=await All.getAvailabilityToDate(dayRef.current.value,location.state[sessionStorage.getItem('sport')]);
    setBookedTimes([]);
    if(availableTimeSlots && availableTimeSlots.length)
     availableTimeSlots?.forEach(element => {
      setBookedTimes(oldArray => [...oldArray,  'court'+element.court+'at'+element.from]);
       
     });
    }

  const book=(i,j)=>{
    setCourtNumber(i);
    setSelectedTime(j);
    setPopUpOneState(true);
  }
  return (
    <div className={styles.Parent}>
  <      div ref={popupToggle} className={styles.Popup}>
          Invalid entry !
        </div>

      {PopUpOneState && <PopUpOne time={selectedTime} stepTwoBooking={stepTwoBooking} cancel={()=>setPopUpOneState(false)} userBooking={()=>userBooking()} court={courtNumber}/>}
      {PopUpTwoState && <PopUpTwo sport={location.state[sport]} time={selectedTime} stepThreeBooking={stepThreeBooking} cancel={()=>setPopUpTwoState(false)} court={courtNumber}/>}
      {PopUpThreeState && <PopUpThree/>}

     <div>
        <div className={styles.Heading}>ONLINE RESERVATIONS</div>
        <div className={styles.TitleSection}>
           <img alt='vec' src={Vector} className={styles.VectorImg} />
            Select a date & Click on squares to make reservations
        </div>
        <input onChange={()=>changeOccured()} ref={dayRef} className={styles.DateTime}   defaultValue={day} type='date'/>
        <div className={styles.TextsContainerX} >
          <div className={styles.TextsX} >Court 01</div>
          <div className={styles.TextsX} >Court 02</div>
          <div className={styles.TextsX} >Court 03</div>
        </div>
        <div className={styles.ContentWrapper}>
          <div className={styles.TextsContainerY}>  
            <div className={styles.TextsY} >12.00PM</div>
            <div className={styles.TextsY} >1.00PM</div>
            <div className={styles.TextsY} >2.00PM</div>
            <div className={styles.TextsY} >3.00PM</div>
            <div className={styles.TextsY} >4.00PM</div>
            <div className={styles.TextsY} >5.00PM</div>
            <div className={styles.TextsY} >6.00PM</div>
            <div className={styles.TextsY} >7.00PM</div>
            <div className={styles.TextsY} >8.00PM</div>
            <div className={styles.TextsY} >9.00PM</div>
            <div className={styles.TextsY} >10.00PM</div>
            <div className={styles.TextsY} >11.00PM</div>
          </div>
          <div className={styles.CellsContainerColumn}>
            {
              Array.from({ length: 3 }, (_, i) => (
                <div className={styles.CellsContainerRow} key={i}>
                  {
                    Array.from({ length: 12 }, (_, j) => (
                      j < 10 && 
                      bookedTimes.includes('court'+i+'at'+'0'+j+':00:00')?
                      <div key={j}  className={styles.SelectedCell}></div>:
                      j === 0 && 
                      bookedTimes.includes('court'+i+'at'+'12:00:00')?
                      <div key={j}  className={styles.SelectedCell}></div>:

                      bookedTimes.includes('court'+i+'at'+j+':00:00')?
                      <div key={j}  className={styles.SelectedCell}></div>:

                      <div key={j} onClick={()=>{book(i,j)}} className={styles.Cell}></div>

                    ))
                    
                  }
                </div>
              ))
            }
          </div>  
        </div>  
     </div>
     <div>
        <div className={styles.ButtonsArea}>
          <div onClick={()=>setSportsAndRefresh(0)} className={sport===0?styles.ButtonActive:styles.Buttons}>
           {location.state[0]}
          </div>
          <div onClick={()=>setSportsAndRefresh(1)} className={sport===1?styles.ButtonActive:styles.Buttons}>
            {location.state[1]}
          </div>
          <div onClick={()=>setSportsAndRefresh(2)} className={sport===2?styles.ButtonActive:styles.Buttons}>
            {location.state[2]}
          </div>
         </div>      
         <img src={bad} alt='non' className={styles.ImageContainer}/>        
     </div>
    </div>
  );
}

export default ReservationPage;