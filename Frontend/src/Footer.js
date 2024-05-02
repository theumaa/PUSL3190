import styles from './Footer.module.css';
import React from 'react';
import Telephone from './Telephone.svg';
import Location from './Location.svg';
import clock from './clock.svg';
import email from './email.svg';

function Footer() {
  return (
    <div className={styles.Parent}>
      <div className={styles.OneThird}>
          Call for Bookings :
          <img alt="phone" className={styles.Phone} src={Telephone}/>
             <div className={styles.Phone}>  (+94) 712554961</div> 
            <img alt="place" src={Location}/>

       </div> 
     <div className={styles.OneThird}>
     <img alt="email" className={styles.Email} src={email}/>

     Email Us : info@latteral.lk   
    </div>
     <div className={styles.OneThird}>
       <img alt="clock" className={styles.Clock} src={clock}/>
         Open Hours : Everyday 05:00 - 00:00
     </div>
    </div>
  );
}

export default Footer;