import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
       <Link to='/'>Home</Link>
       <Link to='/register'>Register</Link>
       <Link to='/login'>Login</Link>
       <Link to='/Auth'>Auth</Link>
      
      </nav>
    </>
  )
}
