"use client"
import React, { useEffect, useState } from 'react'

const UserImage = () => {

    const [userImage, setUserImage] = useState("/blur.png");


    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch("https://api.github.com/users/pasppy");
            const user = await res.json();
            setUserImage(user?.avatar_url);
        }
        fetchUser();
    }, [])

    return (
        <>
            <img src={userImage} className='h-full w-full border rounded-full object-cover' />
        </>
    )
}

export default UserImage