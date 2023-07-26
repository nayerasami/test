import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/CounterSlice';

export default function News() {
let dispatch =useDispatch()
let {count}=useSelector((state)=>state.counter)
console.log(count);
  return (
    <div>
        <h1>News</h1>
        <h3>count:{count}</h3>
        <button onClick={()=>{dispatch(increment())}} className='btn btn-info'>
            Increment
        </button>
        <button className='btn btn-danger' onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </div>
  )
}
