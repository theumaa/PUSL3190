import React from "react";
import {createContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminLogin from "./AdminLogin";

export const ProtectedRoutes = () => {
	const sessionStorageToken = sessionStorage.getItem("plan");

	return sessionStorageToken ? <Outlet /> : <Navigate to="/offeringPage"  replace />;
};

export const ProtectReservation =()=>{
	const sessionSport = sessionStorage.getItem('sport');
	return sessionSport ? <Outlet /> : <Navigate to="/sportsPage"  replace />;

}
export const UserContext = createContext();

export const ProtectAdmin =()=>{
	const admin = sessionStorage.getItem('admin');
	const [user,setUser]=useState(sessionStorage.getItem('auth')?sessionStorage.getItem('user'):false);  
	sessionStorage.setItem('adminLogin',true);
	return            <UserContext.Provider value={{user,setUser}}> {admin==='true' ?  
	<Outlet />:<AdminLogin/>}</UserContext.Provider>;

}