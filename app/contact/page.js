"use client";

import { useEffect, useState } from "react";

// import dbConnect from "@/config/db"
// import { userModel } from "@/model/users"
// import mongoose from "mongoose"
// dbConnect()

// const fetchData = async ()=>{
//     try {
//         const data = await userModel.find();
//         console.log("data",data);
//         return data
//     } catch (error) {
//         console.log("erron".error);
//     }
// }

 function Contact() {
  const [data, setData] = useState([])
const  fetchUsers = async ()=>{
    const response = await fetch("http://localhost:3000/api/users")
    const result = await response.json()
    console.log("result",result.users);
    setData(result.users)
  }
    // const data = await fetchData()
    useEffect(()=>{
      fetchUsers();
    }, [])
  return (
    <div>
      <h1>Contact Page</h1>
      {data?.map((item)=>{
        return(
            <>
            <h1>{item.firstName} - {item.lastName}</h1>
            </>
        )
      })}
    </div>
  )
}

export default Contact
