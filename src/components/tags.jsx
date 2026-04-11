import React from 'react'
import { Button } from './ui/button'

const Tags = ({ tags, size = "lg" }) => {
    return (
        <div className='flex gap-2 flex-wrap mt-2'>
            {tags.map(tag => <Button variant='outline' size={size} key={tag}>{tag}</Button>)}
        </div>
    )
}

export default Tags 