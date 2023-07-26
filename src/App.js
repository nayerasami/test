import React, { Component } from 'react'
import Layout from './Layout/Layout'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home'
import Blog from './Bolg/Blog'
import About from './About/About'
import Parent from './Parent/Parent'
import Gallary from './Gallary/Gallary'
import Web from './web.jsx'
import Mobile from './mobile'
import Notfound from './Notfound/Notfound.jsx'
import CounterContextProvider from './Context/CounterContext'
import { NewsContextProvi } from './Context/NewsContext'
import { Provider } from 'react-redux'
import { storeConfig } from './Redux/Store'
import News from './News/News'



export default class App extends Component {
  render() {

    let routes =createBrowserRouter([
{path:"",element:<Layout/>,children:[
  {path: "home",element:<Home/>},
  {path:"Blog",element:<Blog/>},
  {path:"news",element:<News/>},
  {path:"about",element:<About/>,children:[
    {path:"web",element:<Web/>},
    {path:"mobile",element:<Mobile/>}
  ]},
{path:"parent",element:<Parent/>},
  {path:"gallary",element:<Gallary/>},
  {path:"*",element:<Notfound/>}
]},
   
    ]
    )
    return (<>

<Provider store={storeConfig}>
<RouterProvider  router={routes}/>
</Provider>
  

   


         </>

    )
  }
}
