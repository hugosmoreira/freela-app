import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
          window.removeEventListener("scroll", isActive);
        };
    }, []);

    //const currentUser = null

    const currentUser = {
        id: 1,
        username: "Anna",
        isSeller: true,
      };

   return (
    <div className={active ? "navbar active" : "navbar"}>
        <div className='container'>
            <div className='logo'>
                
                    <span className='text'>Freela</span>
                
                <span className='dot'>.</span>
            </div>
            <div className='links'>
                <span>Freela Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign In</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {
                                currentUser?.isSeller && (
                                    <>
                                        <span>Gigs</span>
                                        <span>Add New Gig</span>
                                    </>
                                )
                            }
                            <span>Orders</span>
                            <span>Messages</span>
                            <span>Logout</span>
                        </div>}
                    </div>    
                )}
            </div>
        </div>
        {active &&
        <>
          <hr />
          <div className="menu">
        
          </div>
          <hr />
        </>
        }
    </div>
  )
}

export default Navbar