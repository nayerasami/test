import Axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import x from '../assets/testimonial-4.jpg'
import { NewsContext, NewsContextProvi } from '../Context/NewsContext'
export default function Home() {

let {newsList}=useContext(NewsContext)
function changeCat(){
  let type =document.getElementById("mySelect").value
  NewsContextProvi(type)

  console.log(type);
}
function displayDes(index){
console.log(newsList[index].description?.split(" ").slice(10, ).join(" "));
document.getElementById('seemoreEl'+index).innerHTML=newsList[index].description?.split(" ").slice(10, ).join(" ")
document.getElementById('seemoreEl'+index).classList.remove("text-info")

}

  return (<>

<select onChange={changeCat}  id="mySelect" className='form-select mt-2 mb-2'>
  <option value="sports">sports</option>
  <option value="science">science</option>
  <option value="business">business</option>

</select>
  {newsList.length>0? 
<div className="row g-2">
{ newsList.map(  (el,i)=>{
  return <div className="col-md-3 prod">
  <div className='border rounded border-info'>
    <img src={el.urlToImage||x} className='w-100 immg' alt="" />
    <h3 className='p-2'>{el.title}</h3>
    <p className='p-2 text-muted'>
      <span>
      {el.description != null? el.description.split(" ").slice(0,10).join(" "):""}
      </span>
      <span id={'seemoreEl'+i} onClick={()=>{displayDes(i)}} className='text-info ms-1'>see more</span>
    </p>
  </div>
</div>
}  )}
</div>:<div className='vh-100 d-flex justify-content-center align-items-center'>
    <i className='fa-solid fa-spinner fa-spin fa-4x'></i>
  </div>}
  



  </>
 
  )
}
