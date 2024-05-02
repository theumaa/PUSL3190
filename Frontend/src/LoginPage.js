import React, { useRef, useState } from "react";
import styles from "./LoginPage.module.css";
import logo from "./LogoL.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {useContext } from "react";
import Api from "./Api";
import { UserContext } from './MainTemplate';

function LoginPage(){
  const [user,setUser]=useContext(UserContext) ?? [];
  const email =useRef();
  console.log(user);
    const popupToggle=useRef();
    const password = useRef();
    const [remember,setRemember] = useState(false);
    const login= async()=>{Api.get("sanctum/csrf-cookie").then(() => {

                             let data={
                               email:email.current.value,
                               password:password.current.value,
                               remember:remember

                             }
                            Api.post('api/login',data).then((res)=>{
                            if(res.data.error)
                            {
                              popupToggle.current.style.display="block";
                              setTimeout(()=>popupToggle.current.style.display="none", 1200);
                            } 
                            else if(res==='Invalid request!' || res.data.user==='Invalid Entry' )
                            {
                            sessionStorage.getItem('auth') && sessionStorage.removeItem('auth');
                            navigate('/login');
                            }
                            else
                            {
                            sessionStorage.setItem('auth',true);
                            sessionStorage.setItem('user',res.data.data.name);
                             setUser &&  setUser(res.data.data.name);  
                              
                            if(sessionStorage.getItem('adminLogin')==='true'){ navigate('../admin',{replace:true});navigate(0);}else{  
                              navigate('/')};
                            }
                            }).catch((e)=>
                            {
                              popupToggle.current.innerText="Something went Wrong!";
                              popupToggle.current.style.display="block";
                              setTimeout(()=>popupToggle.current.style.display="none", 1200);
                            });

                         
        
      });}

    const navigate=useNavigate();
    return(
     <div className={styles.Parent}>
         <div ref={popupToggle} className={styles.Popup}>
          Invalid entry !
        </div>
        <div className={styles.LogoArea}>
           <img className={styles.Logo} src={logo} alt='q'/>
           <div className={styles.Topic}>
              LATTERAL
           </div>
           <div className={styles.SupportingText}>
             INDOOR SPORTS COMPLEX
           </div>
        </div>
        <div className={styles.Greeting}>
             Welcome Back !        
        </div> 
        <div className={styles.InstructionText}>
            <div className={styles.BlackText}>
                 Please sign in to your account to access the dashboard.           
           </div>
        </div>
      
        <div className={styles.FormArea}>
            <div className={styles.InputBlock}>
                <div className={styles.Label}>
                  EMAIL
                </div> 
                <input ref={email} placeholder="Enter your email" className={styles.InputElement}/>
            </div>
            <div className={styles.InputBlock}>
               <div className={styles.Wrap}>
                <div className={styles.Label}>
                  PASSWORD
                </div> 
                <div className={styles.Link}>
                    Forgot password
                </div> 
            </div>  
                <input ref={password} placeholder="Enter password" type="password" className={styles.InputElement}/>
            </div>
        </div>
        <div onClick={()=>{setRemember((remember)=>!remember)}} className={styles.WrapClose}>
           <div className={styles.CheckedBox} >
             { remember && <FontAwesomeIcon className={styles.Icon} icon={faCheck} />}
           </div>
           <div className={styles.RememberMe}>
               Remember me
           </div>
        </div>
        <div onClick={()=>{login()}} className={styles.LoginButton}>
            Login
        </div>
        <div className={styles.InstructionTextTwo}>
            <div className={styles.BlackText}>
                Already have an account?
            </div>
            <div onClick={()=>navigate('/offeringPage')} className={styles.BlueText}>
                Sign up instead
            </div>
        </div>
     </div>
    );
}

export default LoginPage;