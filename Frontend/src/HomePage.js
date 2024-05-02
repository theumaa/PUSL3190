import styles from './HomePage.module.css';
import React from 'react';
import LogoImg from './LogoImg.svg';
import REG from  './REG.svg';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate=useNavigate();
  
  return (
    <div className={styles.HomePage}>
      <img alt='noImg' className={styles.LogoImg} src={LogoImg}/>
      <div className={styles.Text}>LATTERAL</div>
      <div className={styles.SmallText}>INDOOR SPORTS COMPLEX</div>
      <div onClick={()=>navigate('/offeringPage')}  className={styles.RegisterButton}>
         <img className={styles.Img} src={REG} alt='none'/>
           REGISTER NOW
      </div>
    </div>
  );
}

export default HomePage;
