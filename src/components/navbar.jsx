"use client"
import { Code2, Menu, Moon, Sun, XIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  // disable scroll when full navbar open
  useEffect(() => {
    const html = document.documentElement;

    if (isMobileMenuOpen)
      html.classList.add('overflow-hidden');
    else
      html.classList.remove('overflow-hidden');

    return () => html.classList.remove('overflow-hidden');

  }, [isMobileMenuOpen])

  // navbar hide on scroll down and show on scroll up
  // useEffect(() => {
  //   let lastScrollY = window.scrollY;

  //   const controlScroll = () => {
  //     let currentScrollY = window.scrollY;

  //     if (currentScrollY > lastScrollY && currentScrollY > 100)
  //       setIsVisible(false);
  //     else
  //       setIsVisible(true);

  //     lastScrollY = currentScrollY;
  //   }

  //   window.addEventListener("scroll", controlScroll)

  //   // effect cleanup, on unmount remove listener
  //   return (() => window.removeEventListener("scroll", controlScroll))

  // }, [])

  // on route change close navbar 
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathName])

  // open full navbar
  const openFullNavbar = () => setIsMobileMenuOpen(true);

  // close full navbar
  const closeFullNavbar = () => setIsMobileMenuOpen(false);

  // if component not mounted return null to prevent hydration issue
  useEffect(() => {
    setMounted(true);
  }, [])
  if (!mounted) return null;

  return (
    <>
      {/* short nav */}
      <nav className={`w-full top-0 z-20 lg:hidden ${isMobileMenuOpen ? "hidden" : ""}fixed transition-transform duration-300 border-b bg-secondary text-primary py-2`}>

        <div className='container'>
          <div className='flex justify-between items-center'>

            {/* logo */}
            <div className='flex gap-2 items-center'>
              <Code2 size={28} />
              <h2 className='font-semibold'>pasppy</h2>
            </div>

            {/* links */}
            <div className=' flex gap-3 items-center'>
              <Menu className='md:hidden' size={24} onClick={openFullNavbar} />
              {/* menu items */}
              <div className='max-md:hidden flex gap-6 '>
                <Link href={"/abc"}><p className='font-light'>Projects</p></Link>
                <Link href={"/blogs"} > <p className='font-light'>Blogs </p> </Link>
                <Link href={"/"} > <p className='font-light'>Contact </p> </Link>
              </div>

              <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Moon className='size-5' /> : <Sun className='size-5' />}
              </Button>

            </div>
          </div>
        </div>
      </nav>

      {/* full nav */}
      <nav className={`overflow-y-auto w-full top-0 z-10 md:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"} fixed transition-transform duration-300 bg-secondary text-primary`}>
        <div className='container'>

          <div className='h-[calc(100dvh-2rem)] flex flex-col mt-8 gap-24 items-center'>
            {/* logo */}
            <div className='relative flex gap-2 items-center'>
              <Code2 size={28} />
              <h2 className='font-semibold'>pasppy</h2>

              <XIcon className='h-8 w-8 cursor-pointer absolute -right-25' onClick={closeFullNavbar} />
            </div>

            {/* links */}
            <div className='flex flex-col divide-y gap-6'>

              <div className='flex flex-col pb-6 gap-2 items-center'>
                <Link
                  href={"/"}
                >
                  <h2 className={` font-light text-primary/70  px-3 ${pathName === "/" ? 'active-menu' : ""}`}>Home</h2>
                </Link>

                <Link
                  href={"/projects"}
                >
                  <h2 className={` font-light text-primary/70 px-3 ${pathName === "/projects" ? 'active-menu' : ""}`}>Projects </h2>
                </Link>
                <Link
                  href={"/blogs"}
                >
                  <h2 className={` font-light text-primary/70 px-3  ${pathName === "/blogs" ? 'active-menu' : ""}`}>Blogs </h2>
                </Link>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                <Link href={"/"}><h2 className='font-light'>My resume</h2></Link>
                <Link href={"/projects"} > <h2 className='font-light'>View my work </h2> </Link>
                <a
                  href={"https://drive.google.com/file/d/1fdBE4PupbdmoN8HypKYcRzRKa-CsrTI-/view?usp=sharing"}
                  target='_blank'
                >
                  <h2 className='font-light'>Contact me </h2>
                </a>
              </div>
            </div>

            {/* socials */}
            <div className=' flex gap-4'>
              <a href="https://github.com/pasppy" target='_blank' onClick={closeFullNavbar}>
                <img src={`${theme === "dark" ? "/github-light.svg" : "/github-dark.svg"}`}
                  alt=""
                  className='h-11 w-11'
                />
              </a>
              <a href="https://www.linkedin.com/in/nayedul-alam-26b4a6205/" target='_blank' onClick={closeFullNavbar}>
                <img src={`${theme === "dark" ? "/linkedin-light.svg" : "/linkedin-dark.svg"}`}
                  alt=""
                  className='h-12 w-12'
                />
              </a>
            </div>

          </div>
        </div>
      </nav >
    </>
  )
}

export default Navbar