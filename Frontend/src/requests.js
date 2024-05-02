import Api from './Api';
export const getAvailability =async ()=>{
    let response;
    let date= new Date();
    let   currentDate=convertDate(date);

     await  Api.get('api/getAvailability?date='+currentDate+'&sport='+sessionStorage.getItem('sport')).then((res)=>{

       response=res.data.data;
     }).catch((error)=> {
      response={error:error};
     })

     return response?response:null;
}

function convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString();
    var dd  = date.getDate().toString();
  
    var mmChars = mm.split('');
    var ddChars = dd.split('');
  
    return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
  }


  export const getAvailabilityToDate =async(date,sport)=>{
    let response;
    let day=new Date(date);
    let   currentDate=convertDate(day);

     await  Api.get('api/getAvailability?date='+currentDate+'&sport='+sport).then((res)=>{

       response=res.data.data;
     }).catch((error)=> {
      response={error:error};
     })

     return response;
}

export const setAvailability =async (obj)=>{
  let response;
  let date= new Date(obj.date);
   obj.date=convertDate(date);
   obj.from=convertTime(obj.from);
   await  Api.post('api/setAvailability',obj).then((res)=>{

     response=res.data.data;
   }).catch((error)=> {
    response={error:error};
   })

   return response;
}

function convertTime(timeObj)
{
  if(timeObj===0){
    return '12:00:00';
  }
  else if(timeObj<10)
  {
   return '0'+timeObj+':00:00'; 
  }
  else{
    return timeObj+':00:00';
  }
}

export const testRequest =async()=>{
  let response;
  sessionStorage.setItem('adminLogin',false);
  await  Api.get('api/test').then((res)=>{
    response=res.data.data;
  }).catch((error)=> {
   sessionStorage.removeItem('auth');
   response={error:error};
  })
  if(response){
    sessionStorage.setItem('auth',true);
  }
  return response?response:null;
}

export const userBooking=async(obj)=>{
  let response;
  let date= new Date(obj.date);
   obj.date=convertDate(date);
   obj.from=convertTime(obj.from);
   await  Api.post('api/userBooking',obj).then((res)=>{

     response=res.data.data;
   }).catch((error)=> {
    response={error:error};
   })

   return response;
 }

export const adminDashboard= async()=>{
  let response;
  await  Api.get('api/admin/adminDashboard').then((res)=>{
    response=res.data;
    response==='login as admin' &&    sessionStorage.setItem('admin',false);
  }).catch((error)=> {
   response={error:error};
   sessionStorage.setItem('admin',false);
  })

  return response?response:null; 
} 

export const testAdmin= async()=>{
  let response;
  await  Api.get('api/admin/testAdmin').then((res)=>{
    response=res.data;
    response==='login as admin' ? sessionStorage.setItem('admin',false):
    sessionStorage.setItem('admin',true);

  }).catch((error)=> {
   response={error:error};
   sessionStorage.setItem('admin',false);
  })

  return response?response:null; 
} 

export const logout= async()=>{
  let response;
  await  Api.post('api/logout').then((res)=>{
    response=res.data;
  }).catch((error)=> {
   response={error:error};
  })
  sessionStorage.removeItem('auth');
  sessionStorage.removeItem('admin');
  sessionStorage.removeItem('user');
  return response?response:null; 

} 

export const adminSearch=async(val)=>{
  sessionStorage.setItem('page',val);
  let response;
   await  Api.get('api/admin/'+val).then((res)=>{
     response=res.data.data;
   }).catch((error)=> {
    response={error:error};
   })

   return response?response:null;
 }

 export const updateStatus=async(obj)=>{
  let response;
   await  Api.post('api/admin/updateStatus',obj).then((res)=>{

     response=res.data.data;
   }).catch((error)=> {
    response={error:error};
   })

   return response?response:null;
 }