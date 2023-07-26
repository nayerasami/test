import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Blog() {


    // useEffect(()=>{
    //     console.log("mount");
    //     //mount
    //     //
    //     //
    //     return ()=>{
    //         //unmount
    //         //
    //         //

    //     }

    // },[])



 
    // [] لو الاراي فضل فاضي يبقا احنا في مرحله mount/unmount
    // [] بنحط جواه ال dependances اللي عاوز اتابع التغيير اللي بيحصل فيها
    //لو حطيت حاجه بنبقي كدا دخلنا في ال update 



    let [count ,setCount]= useState(0)
    let[name,setName]=useState("Ahmed")
    
    useEffect(()=>{
        console.log("Count Update");  
      },[count])



    function changeCount(){
        setCount(10)
    }

    function ChangeName(){
        setName("Nayera")
    }
  return (
   <div className="container">
  
        <h3>Blog</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, a.</p>
        <h3>Count:{count}</h3>
        <h3>Name:{name}</h3>
        
        <button onClick={changeCount} className='btn btn-warning'>Change Count</button>
    <button onClick={ChangeName} className='btn btn-dark mx-2'>Change Name</button>
    

   </div>
  )
}
