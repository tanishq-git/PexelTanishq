import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const Navbar = ({setsearch}) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
    <div className="nav mt-3">
      <div onClick={() => {setsearch('nature')
        navigate('/');
      }} className="button btn btn-outline-warning mx-3">Nature</div>
      <div onClick={() => {setsearch('travel')
        navigate('/');
      }}  className="button btn btn-outline-primary mx-3">Travel</div>
      <div onClick={() => {setsearch('city')
        navigate('/');
      }}  className="button btn btn-outline-info mx-3">City</div>
      <div onClick={() => {setsearch('car')
        navigate('/');
      }}  className="button btn btn-outline-secondary mx-3">Car</div>
      <div onClick={() => {setsearch('fashion')
        navigate('/');
      }}  className="button btn btn-outline-warning mx-3">Fashion</div>
      <div onClick={() => {setsearch('animals')
        navigate('/');
      }}  className="button btn btn-outline-light mx-3">Animals</div>
      <div onClick={() => {setsearch('technology')
        navigate('/');
      }}  className="button btn btn-outline-info mx-3">Technology</div>
      <div onClick={() => {setsearch('finance')
        navigate('/');
      }}  className="button btn btn-outline-warning mx-3">Business & finance</div>
      <div onClick={() => {setsearch('tokyo')
        navigate('/');
      }}  className="button btn btn-outline-primary mx-3">Tokyo</div>
      <div onClick={() => {setsearch('dubai')
        navigate('/');
      }}  className="button btn btn-outline-info mx-3">Dubai</div>
      {
        location.pathname === "/saved" ? (
      <div   className="button btn btn-warning mx-3" onClick={() => navigate('/')}>Home</div>

          
        ) : (
          <div   className="button btn btn-warning mx-3" onClick={() => navigate('/saved')}>Saved</div>
        )
      }
    </div>
    <div className="container" style={{width:"780px"}}>
    <div className="mt-3 text-white ">
      <input onChange={(e) => setsearch(e.target.value)} type="text" className="form-control bg-dark text-light" id="exampleInputEmail1" aria-describedby="emailHelp"/>
     </div>
    </div>
    </>
  )
}

export default Navbar
