import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import React from 'react';
import HomePage from './HomePage';
import MainTemplate from './MainTemplate';
import ReservationPage from './ReservationPage';
import OfferingPage from './OfferingPage';
import ReachUsPage from './ReachUsPage';
import SportsPage from './SportsPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import  * as All  from './requests';   
import { ProtectAdmin, ProtectReservation, ProtectedRoutes } from './ProtectedRoutes';
import AdminTemplate from './AdminTemplate';
import AdminDashboard from './AdminDashboard';
import AdminLogin from './AdminLogin';
import DataTable from './DataTable';

  const routes = createBrowserRouter(
    createRoutesFromElements(
    <>
        <Route path='/' loader={All.testRequest} element={<MainTemplate/>}>
          <Route index  element={<HomePage/>}/>
          <Route  path='/reservationPage'  element={<ProtectReservation/>}>
             <Route  loader={All.getAvailability} index  element={<ReservationPage/>}/>
           </Route>  
          <Route  path='/offeringPage'  element={<OfferingPage/>}/>
          <Route  path='/reachUsPage'  element={<ReachUsPage/>}/>
          <Route  path='/sportsPage'  element={<SportsPage/>}/>
          <Route  path='/registerPage'  element={<ProtectedRoutes/>}>
            <Route  index  element={<RegisterPage/>}/>
          </Route>  
          <Route  path='/loginPage'  element={<LoginPage/>}/>
        </Route> 
        <Route   path='/admin' loader={	All.testAdmin} element={<ProtectAdmin/>}>
          <Route path=''  element={<AdminTemplate/>}>
            <Route index  loader={All.adminDashboard}   element={<AdminDashboard/>}/>
            <Route path='/admin/users'  loader={()=>All.adminSearch('users')} element={<DataTable/>}/>
            <Route path='/admin/guests'  loader={()=>All.adminSearch('guestMembers')} element={<DataTable/>}/>
            <Route path='/admin/completed'  loader={()=>All.adminSearch('completedSessions')} element={<DataTable/>}/>
            <Route path='/admin/upcoming'  loader={()=>All.adminSearch('upcomingSessions')} element={<DataTable/>}/>

          </Route> 
          <Route loader={()=>{sessionStorage.setItem('adminLogin',true); return null }} path='/admin/adminLoginPage'  element={<AdminLogin/>}/>
        </Route>  

    </>
    )
  );
    export default routes;