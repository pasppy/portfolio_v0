"use client"
import { Code2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const scrollControl = () => {
      let currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100)
        setIsVisible(false);
      else
        setIsVisible(true);

      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", scrollControl)

    // effect cleanup, on unmount remove listener
    return (() => window.removeEventListener("scroll", scrollControl))

  }, [])

  return (
    <nav className={`w-full top-0 z-20 fixed transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} `}>

      <div className='container border-b '>
        <div className=''>
          {/* logo */}
          <div>
            <Code2 />
          </div>
          {/* links */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar