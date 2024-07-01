// "use client"
// import { useEffect, useState } from "react";
// import { Login } from "../../actions/Auth"

// export default function Page() {
//     const [data,setData] = useState(null)
    
// // useEffect(()=>{
// //     const run = async () => {
// //         let data =  await Login(username , password);
// //        setData(data)      

// //     }
    
// //     run();
// // },[])


// const handleLogin =  async(username , password) => { 
//     let data =  await Login(username , password);
//     setData(data)   
// }
//     return <> 
//     {data &&  Object.keys(data).map((key)=> <h1>{data[key]}</h1>)}
//     <button onClick={()=>handleLogin("n0b","qwety")} > Login</button>
//         </>
// }