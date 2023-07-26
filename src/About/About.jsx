import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'
import { NewsContext } from '../Context/NewsContext'


export default function About() {

let {count,ChangeCount} = useContext( CounterContext)
let {newsList}=useContext(NewsContext)


  return (
    <div>
      <h1>About</h1>
   <h2>Count:{count}</h2>
   <button className='btn btn-info' onClick={ChangeCount}>Change Count</button>
<div className='container'>
<div className='row g-3 mt-5'>
{newsList? newsList.map((el)=>{
    return <div className="col-md-3 border rounded border-info">
    <img src={el.urlToImage} alt=""  className='w-100 immg'/>
    <h3 className='p-2'>{el.title}</h3>
    <p className='p-2 text-muted'></p>
  </div>
}):""}
</div>
</div>
    </div>
  )
}
