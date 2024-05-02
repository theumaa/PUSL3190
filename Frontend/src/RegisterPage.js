import React, { useRef } from "react";
import styles from "./RegisterPage.module.css";
import logo from "./LogoL.svg";
import { useNavigate } from 'react-router-dom';
import Api from "./Api";
function RegisterPage(){
    const navigate=useNavigate();
    const fullname=useRef();
    const birthday=useRef();
    const email=useRef();
    const contact=useRef();
    const password=useRef();
    const popupToggle=useRef();
    const password_confirmation = useRef();
    const register= async()=>{Api.get("sanctum/csrf-cookie").then(() => {

        let data={
          email:email.current.value,
          password:password.current.value,
          password_confirmation:password_confirmation.current.value,
          name:fullname.current.value,
          birthday:birthday.current.value,
          contact:contact.current.value,
          package_id:sessionStorage.getItem('plan')
        }
       Api.post('api/register',data).then((res)=>{
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
       navigate('/');
       }
       }).catch((e)=>
       {
         popupToggle.current.innerText="Something went Wrong!";
         popupToggle.current.style.display="block";
         setTimeout(()=>popupToggle.current.style.display="none", 1200);
       });

    

});}

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
                   Welcome to Latteral.lk
        </div> 
        <div className={styles.InstructionText}>
            <div className={styles.BlackText}>
            Please follow the given instructions while filling out the following form.
            </div>
            <div className={styles.BlueText}>
             Click here to view the instruction.
            </div>
        </div>
      
        <div className={styles.FormArea}>
            <div className={styles.InputBlock}>
                <div className={styles.Label}>
                   FULL NAME
                </div> 
                <input ref={fullname} placeholder="Enter your full name" className={styles.InputElement}/>
            </div>
            <div className={styles.InputBlock}>
                <div className={styles.Label}>
                  BIRTHDAY
                </div> 
                <input ref={birthday} type="date" placeholder="Enter your date of birth" className={styles.InputElement}/>
            </div>
            <div className={styles.InputBlock}>
                <div className={styles.Label}>
                  EMAIL
                </div> 
                <input ref={email} placeholder="Enter your email" className={styles.InputElement}/>
            </div>
            <div className={styles.InputBlock}>
                <div className={styles.Label}>
                  PHONE NUMBER
                </div> 
                <input ref={contact} placeholder="Enter your contact number" className={styles.InputElement}/>
            </div>
            <div className={styles.InputBlock}>
                <div className={styles.Label}>
                  CREATE PASSWORD
                </div> 
                <input type="password" ref={password} placeholder="Minimum 6 characters" className={styles.InputElement}/>
            </div>
            <div className={styles.InputBlock}>
                <div className={styles.Label}>
                  CONFIRM PASSWORD
                </div> 
                <input type="password"  ref={password_confirmation} placeholder="Enter the same password" className={styles.InputElement}/>
            </div>
        </div>
        <div onClick={()=>register()} className={styles.RegisterButton}>
            Register
        </div>
        <div className={styles.InstructionTextTwo}>
            <div className={styles.BlackText}>
                Already have an account?
            </div>
            <div onClick={()=>navigate('/loginPage')} className={styles.BlueText}>
                Sign in instead
            </div>
        </div>
     </div>
    );
}

export default RegisterPage;