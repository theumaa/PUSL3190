import styles from './AdminLogin.module.css';
import React from 'react';
import LoginPage from './LoginPage';
function AdminLogin(){
    return(
        <div className={styles.MainTemplate} >
             <LoginPage/>
        </div> 
    );
}

export default AdminLogin