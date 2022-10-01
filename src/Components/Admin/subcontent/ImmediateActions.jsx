import React, { useState } from 'react'

function immediateActions() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[t,setT]=useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  
  const handleChange=()=>{
    setT(true);
  }
  return (
    <>
    <br></br>
    
    {
            t && <>
            <label
              htmlFor="message"
              className="  mx-80 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Enter message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-6/12 mx-80 block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter message..."
              defaultValue={""}
            />
            <button type="button" class="mx-80 my-2 text-white bg-lime-600 hover:bg-lime-600 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

          </>
          
          }
<div className="ml-24 my-24">
    
    <table class="class=state-fixed  border-2 border-lime-600 text-center" >
  <thead>
    <tr>
      <th class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center">Caretaker Name</th>
      <th class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center ">Contact</th>
      <th class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center">E-mail</th>
      <th class="border border-slate-300 p-6 text-lg border-2  border-lime-600 text-center " >No.of animals assigned</th>
      <th class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center" >Specialist</th>
      
      <th class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center"></th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 p-6 text-lg border-2  border-lime-600 text-center">Rohan</td>
      <td class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center">9505946698</td>
      <td class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center">john123@gmail.com</td>
      <td class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center">6</td>
      <td class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center">Bones</td>

      <td class="border border-slate-300 p-6 border-2 border-lime-600 text-center "><button type="button" onClick={handleChange} className="border-md bg-lime-500/75 p-2 text-white rounded-lg">Action 
     
          
    </button></td>
    </tr>
    <tr>
    <td class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center">Rehan</td>
      <td class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center ">9234946698</td>
      <td class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center">rahul123@gmail.com</td>
      <td class="border border-slate-300 p-6 text-lg border-2  border-lime-600 text-center">5</td>
      <td class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center">Teeth</td>
      <td class="border border-slate-300 p-6 text-lg border-2 border-lime-600 text-center"><button type="button" onClick={handleChange} className="border-md bg-lime-500/75 p-2 text-white rounded-lg">Action
      

          </button></td>
    </tr>
    <tr>
    <td class="border border-slate-300 p-8 text-lg border-2 border-lime-600 text-center ">Rahul</td>
      <td class="border border-slate-300 text-lg  p-8 border-2 border-lime-600 text-center">9234946622</td>
      <td class="border border-slate-300 text-lg  p-8 border-2 border-lime-600 text-center">rehan23@gmail.com</td>
      <td class="border border-slate-300 text-lg  p-8 border-2 border-lime-600 text-center">4</td>
      <td class="border border-slate-300 text-lg  p-8 border-2  border-lime-600 text-center">muscles</td>
      <td class="border border-slate-300 text-lg p-8 border-2 border-lime-600 text-center"><button type="button" onClick={handleChange} className="border-md bg-lime-500/75 p-2 text-white rounded-lg">Action
   </button></td>
    </tr>
  </tbody>
</table>
</div>


    
    </>
    
    
  )
}

export default immediateActions