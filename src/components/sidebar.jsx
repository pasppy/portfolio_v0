"use client"
import { Code2, Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeBasedImage from './theme-based-image'
import { resume_link } from "@/data.json"

const Sidebar = () => {

    const { resolvedTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathName = usePathname();

    // if component not mounted return null to prevent hydration issue
    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;

    return (
        <div className='sticky top-8' >
            <div className='flex flex-col divide-y gap-8'>
                {/* logo */}
                <section className='pb-8'>
                    <div className='flex items-center justify-between'>
                        {/* logo */}
                        <div className='flex gap-2 items-center'>
                            <Code2 size={28} />
                            <h4 className='font-semibold'>pasppy</h4>
                        </div>

                        <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {resolvedTheme === "dark" ? <Moon className='size-5' /> : <Sun className='size-5' />}
                        </Button>
                    </div>
                </section>

                {/* message */}
                <section className='pb-8'><p>Welcome to my portfolio</p></section>

                {/* tabs */}
                <section className='pb-8'>

                    <div className='flex flex-col gap-1'>
                        <Link
                            href={"/"}
                        >
                            <p className={` font-light text-primary/70 py-1 pl-2  ${pathName === "/" ? 'active-menu' : ""}`}>Home</p>
                        </Link>

                        <Link
                            href={"/projects"}

                        >
                            <p className={` font-light text-primary/70 py-1 pl-2  ${pathName === "/projects" ? 'active-menu' : ""}`}>Projects </p>
                        </Link>
                        <Link
                            href={"/blogs"}

                        >
                            <p className={` font-light text-primary/70 py-1 pl-2  ${pathName === "/blogs" ? 'active-menu' : ""}`}>Blogs </p>
                        </Link>
                    </div>
                </section>

                {/* links */}
                <section className='pb-8'>
                    <div className='flex flex-col gap-1'>
                        <a
                            href={resume_link}
                            target='_blank'
                        >
                            <p className='font-light py-1 pl-2'>My resume</p>
                        </a>
                        <Link
                            href={"/projects"}
                        >
                            <p className='font-light py-1 pl-2'>View my work </p>
                        </Link>
                        <Link href={"/#contact"}>
                            <p className='font-light py-1 pl-2'>Contact me </p>
                        </Link>
                    </div>
                </section>

                {/* socials */}
                <section className='pb-8'>
                    <div className=' flex items-center gap-4'>
                        <a href="https://github.com/pasppy" target='_blank' >
                            <ThemeBasedImage dark={"/github-dark.svg"} light={"/github-light.svg"} classes={"h-8 w-8"} />

                        </a>
                        <a href="https://www.linkedin.com/in/nayedul-alam-26b4a6205/" target='_blank' >
                            <ThemeBasedImage dark={"/linkedin-dark.svg"} light={"/linkedin-light.svg"} classes={"h-9 w-9"} />

                        </a>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default Sidebar