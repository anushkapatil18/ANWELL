
import React, { useEffect, useLayoutEffect, useState } from 'react'

function ImmediateActionMsg() {
 let token = "Bearer " + localStorage.getItem("token");
 const[t,setT]=useState(false);
 const[msg,setMsg]  = useState("");
 const handleChange=()=>{
  setT("This is message for care taker bhavik ");
 }
  async function CallApi(){
  const response = await fetch(process.env.REACT_APP_BASE_URL+"caretaker/getMessages", {
    method: "POST",
    headers: { 
      "Authorization" : token,

      "Content-Type": "application/json" },
    body: JSON.stringify({id: localStorage.getItem("id")}),
  });
  const content = await response.json();
  console.log(content.action.message[0]);
  setMsg(content.action.message[0]);
  setT(true);
  
}

useEffect(() => {
  CallApi();  
})
  return (
   <>
    {
     t  ? (<>{msg}</>) : "NO MESSAGE"
    }
    </>

  )
}

export default ImmediateActionMsg