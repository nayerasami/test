import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let NewsContext =createContext(null)

export function NewsContextProvi(props){

let[newsList,setNewsList]=useState([])
async function getAllData(){
 let   {data} = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=546d9473fa18418e926417050425f7ef")
 setNewsList(data.articles)
}
useEffect(()=>{
getAllData()
},[])
return<NewsContext.Provider value={{newsList}}>
{props.children}
</NewsContext.Provider>

}