import styles from './NavBar.module.css';
import ColourLogo from './ColourLogo.svg';
import Telephone from './Telephone.svg';
import Location from './Location.svg';
import { useNavigate } from 'react-router-dom';
import {useContext } from "react";
import { UserContext } from './MainTemplate';
import Api from './Api';


function NavBar() {
const [user,setUser]=useContext(UserContext);
   const logOut =async ()=>{
    let response;
     await  Api.post('api/logout').then((res)=>{
       response={success:res.data};
     }).catch((error)=> {
      response={error:error};
     })
     console.log(response);
     sessionStorage.removeItem('auth');
     setUser('undefined');
  }

  const navigate=useNavigate();
  return (
    <div className={styles.NavBarPage}>
        
        <div className={styles.FirstHalf} > 
          <div className={styles.OneItem} >
            <img className={styles.Img} alt="Nologo" src={ColourLogo}/>
          </div>       
          <div onClick={()=>navigate('/')} className={styles.OneItem} >HOME</div>
          <div onClick={()=>navigate('sportsPage')} className={styles.OneItem} >RESERVATIONS</div>
          <div onClick={()=>navigate('offeringPage')} className={styles.OneItem} >PRICING</div>
          <div onClick={()=>navigate('reachUsPage')} className={styles.OneItem} >CONTACT US</div>

        </div>
        <div className={styles.SecondHalf} > 
          <div className={styles.SecondHalfItemOne} >
            <div onClick={()=>{user!=='undefined' ?logOut():  navigate('loginPage')}} className={styles.Button}>
                 {user!=='undefined' && user!==false ?user:'MEMBERS’ AREA'} 
            </div>
          </div>
          <div className={styles.SecondHalfItemTwo} >
            <img alt="phone" src={Telephone}/>
             <div className={styles.Phone}>  (+94) 712554961</div> 
            <img alt="place" src={Location}/>


        </div>

        </div>
    </div>
  );
}

export default NavBar;
