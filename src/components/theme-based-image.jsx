"use client"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';


const ThemeBasedImage = ({ dark, light, classes }) => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, [])
    if (!mounted) return null;

    return (
        <img
            src={`${resolvedTheme === "light" ? dark : light}`}
            alt=""
            className={classes}
        />
    )
}

export default ThemeBasedImage