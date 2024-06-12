import React from 'react'
import LabelInput from "./LabelInput";
const Childs = () => {
  return (
    <>
    <div className="mt-5">
    <label htmlFor="">Child 01</label>
   <div className="  pt-5 pr-5 pb-5 pl-5 bg-[#F0F0F0] rounded">
     <div className="flex gap-5">
       <LabelInput
         className="w-[226px]"
         type="text"
         label="First Name"
         id="fName"
         placeholder="Enter Your First Name"
       />
       <LabelInput
         className="w-[226px]"
         type="text"
         label="Last Name"
         id="lName"
         placeholder="Enter Your Last Name"
       />
     </div>
     <LabelInput
     className="w-[474px]"
     type="text"
     label="Email"
     id="email"
     placeholder="Enter Your Email"
   />
   </div>
 </div>
 <div className="mt-5">
    <label htmlFor="">Child 02</label>
   <div className="  pt-5 pr-5 pb-5 pl-5 bg-[#F0F0F0] rounded">
     <div className="flex gap-5">
       <LabelInput
         className="w-[226px]"
         type="text"
         label="First Name"
         id="fName"
         placeholder="Enter Your First Name"
       />
       <LabelInput
         className="w-[226px]"
         type="text"
         label="Last Name"
         id="lName"
         placeholder="Enter Your Last Name"
       />
     </div>
     <LabelInput
     className="w-[474px]"
     type="text"
     label="Email"
     id="email"
     placeholder="Enter Your Email"
   />
   </div>
 </div>
 </>

  )
}

export default Childs