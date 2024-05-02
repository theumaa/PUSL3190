import React from "react";
import styles from "./SportsPage.module.css";
import vector1 from "./Vector (1).svg";
import vector2 from "./Vector (2).svg";
import vector3 from "./Vector (3).svg";
import vector4 from "./Vector (4).svg";
import vector5 from "./Vector (5).svg";
import vector6 from "./Vector (6).svg";
import vector7 from "./Vector (7).svg";
import vector8 from "./Vector (8).svg";
import vector9 from "./Vector (9).svg";
import ImageCard from "./ImageCard";
import rrrr from "./rrrr.svg";
import rugby from "./rugby.svg";
import shuttlecock from "./shuttlecock.svg";
import handball from "./handball.svg";
import karathe from "./karathe.svg";
import football from "./football.svg";
import "@fontsource/jua"; // Defaults to weight 400
import { useNavigate } from 'react-router-dom';

function SportsPage(){
  const navigate=useNavigate();

 const setSports=(caption)=>{
  sessionStorage.setItem('sport',caption[0]);
  navigate('/reservationPage',{state:caption});
 }
  return (
   <div className={styles.Parent}>
      <div className={styles.Topic}>
        SPORTS FOR YOU...
      </div>
      <div className={styles.Grid}>
         <ImageCard image={vector1} onclick={(caption)=>setSports(caption)}  caption={['CRICKET','TABLE TENNIS','INDOOR HOCKEY']}/>
         <ImageCard image={vector3} onclick={(caption)=>setSports(caption)}  caption={['TABLE TENNIS','INDOOR HOCKEY','KABADY']}/>
         <ImageCard image={vector4} onclick={(caption)=>setSports(caption)}  caption={['INDOOR HOCKEY','KABADY','BASKETBALL']}/>
         <ImageCard image={vector5} onclick={(caption)=>setSports(caption)}  caption={['KABADY','BASKETBALL','VOLLEYBALL']}/>
         <ImageCard image={vector6} onclick={(caption)=>setSports(caption)}  caption={['BASKETBALL','VOLLEYBALL','GYMNASTIC']} />
         <ImageCard image={vector7} onclick={(caption)=>setSports(caption)}  caption={['VOLLEYBALL','GYMNASTIC','BOXING']} />
         <ImageCard image={vector8} onclick={(caption)=>setSports(caption)}  caption={['GYMNASTIC','BOXING','ARCHERY']} />
         <ImageCard image={vector9} onclick={(caption)=>setSports(caption)}  caption={['BOXING','ARCHERY','RUGBY']} />
         <ImageCard image={rrrr}    onclick={(caption)=>setSports(caption)}  caption={['ARCHERY','RUGBY','BADMINTON']} />
         <ImageCard image={rugby}   onclick={(caption)=>setSports(caption)}  caption={['RUGBY','BADMINTON','CHESS']} />
         <ImageCard image={shuttlecock} onclick={(caption)=>setSports(caption)}  caption={['BADMINTON','CHESS','MARTIAL ARTS']} />
         <ImageCard image={vector2} onclick={(caption)=>setSports(caption)}  caption={['CHESS','MARTIAL ARTS','FUTSAL']} />
         <ImageCard image={karathe} onclick={(caption)=>setSports(caption)}  caption={['MARTIAL ARTS','FUTSAL','HANDBALL']} />
         <ImageCard image={football} onclick={(caption)=>setSports(caption)}  caption={['FUTSAL','HANDBALL','CRICKET']} />
         <ImageCard image={handball} onclick={(caption)=>setSports(caption)}  caption={['HANDBALL','CRICKET','TABLE TENNIS']} />


      </div>
   </div> 
  );

}

export default SportsPage;