import React from 'react'
import{Link,NavLink} from 'react-router-dom'
export default function Navbar() {
  return (<>
<nav className='navbar navbar-expand-lg bg-light '>
  <div className='container-fluid'>
    <a className='navbar-brand' href=" ">Navbar</a>
    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
          <NavLink className={ ({isActive})=> isActive === true?' test nav-link':'nav-link'} to="home" >Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className={ ({isActive})=> isActive === true?' test nav-link':'nav-link'} to="about">About</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className={ ({isActive})=> isActive === true?' test nav-link':'nav-link'} to="news">News</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className={ ({isActive})=> isActive === true?' test nav-link':'nav-link'} to="gallary">Gallary</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className={ ({isActive})=> isActive === true?' test nav-link':'nav-link'} to="Parent">Parent</NavLink>
        </li>
        <li className='nav-item'>
      <NavLink className={ ({isActive})=> isActive === true?' test nav-link':'nav-link'} to="blog">Blog</NavLink>
        </li>
     </ul>
    </div>
  </div>
</nav>
   </>
  )
}
