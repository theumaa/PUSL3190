import styles from './AdminTemplate.module.css';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import  * as All  from './requests';   

function AdminTemplate() {
  const navigate=useNavigate();
  useEffect(()=>{
    sessionStorage.getItem('admin')==='false' &&
    navigate('/admin/adminLoginPage');

  },[navigate]);
  const logout=()=>{
    All.logout();
    navigate('/admin/adminLoginPage');
  }
  return (
        <div className={styles.AdminTemplate}>
        <div className={styles.NavBar}>
            <div className={styles.Topic}>
                ADMIN DASHBOARD
            </div>
            <div className={styles.Item}>
                DASHBOARD
            </div>
            <div onClick={()=>navigate('/admin/users')} className={styles.Item}>
                USERS
            </div>
            <div onClick={()=>navigate('/admin/guests')}  className={styles.Item}>
                GUESTS
            </div>
            <div onClick={()=>navigate('/admin/upcoming')} className={styles.Item}>
                UPCOMING SESSIONS
            </div>
            <div onClick={()=>navigate('/admin/completed')} className={styles.Item}>
                COMPLETED SESSIONS
            </div>
            <div onClick={()=>logout()} className={styles.ItemLast}>
                Log Out
            </div>
            </div>  
            <Outlet/>
            
        </div>
  );
}

export default AdminTemplate;
