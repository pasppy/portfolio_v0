"use client"
import { Code2, Menu, Moon, Sun, XIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { resume_link } from "@/data.json"
import ThemeBasedImage from './theme-based-image';

const Navbar = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
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
              <h3 className='font-semibold'>pasppy</h3>
            </div>

            {/* links */}
            <div className=' flex gap-3 items-center'>
              <Menu className='sm:hidden' size={24} onClick={openFullNavbar} />
              {/* menu items */}
              <div className='max-sm:hidden flex gap-6 '>
                <Link href={"/projects"}><p className='font-light'>Projects</p></Link>
                <Link href={"/blogs"} > <p className='font-light'>Blogs </p> </Link>
                <Link href={"/#contact"} > <p className='font-light'>Contact</p> </Link>
              </div>

              <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {resolvedTheme === "dark" ? <Moon className='size-5' /> : <Sun className='size-5' />}
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
                  <h3 className={` font-light text-primary/70  px-3 py-1 ${pathName === "/" ? 'active-menu' : ""}`}>Home</h3>
                </Link>

                <Link
                  href={"/projects"}
                >
                  <h3 className={` font-light text-primary/70 px-3 py-1 ${pathName === "/projects" ? 'active-menu' : ""}`}>Projects </h3>
                </Link>
                <Link
                  href={"/blogs"}
                >
                  <h3 className={` font-light text-primary/70 px-3 py-1  ${pathName === "/blogs" ? 'active-menu' : ""}`}>Blogs </h3>
                </Link>
              </div>
              <div className='flex flex-col gap-3 items-center'>
                <a
                  href={resume_link}
                  target='_blank'
                >
                  <h3 className='font-light'>My resume</h3>
                </a>
                <Link href={"/projects"} > <h3 className='font-light'>View my work </h3> </Link>
                <Link
                  href={"/#contact"}
                  onClick={closeFullNavbar}
                >
                  <h3 className='font-light'>Contact me </h3>
                </Link>
              </div>
            </div>

            {/* socials */}
            <div className=' flex gap-4'>
              <a href="https://github.com/pasppy" target='_blank' onClick={closeFullNavbar}>
                <ThemeBasedImage dark={"/github-dark.svg"} light={"/github-light.svg"} classes={"h-11 w-11"} />
              </a>
              <a href="https://www.linkedin.com/in/nayedul-alam-26b4a6205/" target='_blank' onClick={closeFullNavbar}>
                <ThemeBasedImage dark={"/linkedin-dark.svg"} light={"/linkedin-light.svg"} classes={"h-12 w-12"} />

              </a>
            </div>

          </div>
        </div>
      </nav >
    </>
  )
}

export default Navbar