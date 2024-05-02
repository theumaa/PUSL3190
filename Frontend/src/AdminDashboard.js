import styles from './AdminDashboard.module.css';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
function AdminDashboard(){
    const loaderData=useLoaderData();
    return(
        <div >
        <div className={styles.CardsAreaRow}>
          <div className={styles.Card}>
             {loaderData.users} Users
          </div>
          <div className={styles.Card}>
             {loaderData.guests} Guests
          </div>
          <div className={styles.Card}>
              {loaderData.completed} Completed Sessions
          </div>
        </div>
        <div className={styles.CardsAreaRow}> 
            <div className={styles.Card}>
              {loaderData.ongoing} Ongoing Sessions
            </div>
            <div className={styles.Card}>
               {loaderData.income}LKR Total Income
            </div>
        </div>
      </div> 
    );
}

export default AdminDashboard