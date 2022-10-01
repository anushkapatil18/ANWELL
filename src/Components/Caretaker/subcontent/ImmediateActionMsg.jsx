import React, { useEffect, useLayoutEffect } from 'react'

function ImmediateActionMsg() {
 let token = "Bearer " + localStorage.getItem("token");
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
}

useEffect(() => {
  CallApi();  
})
  return (
    <div>ImmediateActionMsg</div>
    

  )
}

export default ImmediateActionMsg