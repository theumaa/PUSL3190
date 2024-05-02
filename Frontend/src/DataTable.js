import styles from './DataTable.module.css';
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import PopUpFour from './PopUpFour';
import  * as All  from './requests';   
import { useNavigate } from 'react-router-dom';
function DataTable(){
     const loaderData= useLoaderData();
     const [ld,setLd]=useState(loaderData);
     const [popup,setPopup]=useState(false);
     const [page,setPage]=useState(sessionStorage.getItem('page')==='upcomingSessions'?'Upcoming Sessions':sessionStorage.getItem('page')==='completed'?'Past Sessions':sessionStorage.getItem('page'));
     useEffect(()=>{
      setPage(sessionStorage.getItem('page')==='upcomingSessions'?'Upcoming Sessions':sessionStorage.getItem('page')==='completedSessions'?'Past Sessions':sessionStorage.getItem('page'));
         setLd(loaderData);
     })
     const navigate=useNavigate();
     const [id,setId]=useState();
     const update=(id)=>{
         setId(id);
         setPopup(true);
     }
     const save=async(status,amount)=>{
      let obj={
        type:status,
        id:id,
        amount:amount
      }
      await All.updateStatus(obj);
      setPopup(false);
      let l= await All.adminSearch('upcomingSessions');
      setLd(l);
      navigate('/admin/upcoming')
     }
    return(
        <div className={styles.MainTemplate} >
           {popup && <PopUpFour save={(status,amount)=>save(status,amount)} cancel={()=>setPopup(false)} /> }
            <div className={styles.Topic} >{page}</div>          
            <table className={styles.tbl} >
              <thead>
                <tr>

                  { 
                     Object.entries( ld.length && ld[0]).map(([key,val])=>{
                       return <th key={val+key} >{key  }</th> ;
                    })  
                  } 
                </tr>
             </thead>    
             <tbody>
               { ld.map((element)=>{
               return( 
                <tr key={element.id} >
                    { Object.entries(element).map(([key,val])=>{
                     return key==='status' && (val!=='paid' && val!=='completed') ? <td className={styles.Cell} key={key} onClick={()=>update(element.id)} >{val}</td>:<td key={key} >{val}</td>;
                    })
                    } 
                </tr>
               );
               })
               
               } 
             </tbody>
            </table> 
        </div> 
    );
}

export default DataTable