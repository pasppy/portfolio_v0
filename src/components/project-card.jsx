import React from 'react'
import { Globe } from 'lucide-react'
import ThemeBasedImage from './theme-based-image'

const ProjectCard = ({ project }) => {
    return (
        <div className={"relative"}>
            {/* hover UI */}
            <div className='h-full p-1 rounded-md bg-secondary w-full'>
                {project.preview && <img src={project.preview} loading='lazy' className='rounded-md h-full object-cover' alt="" />
                }
            </div>

            <div className='flex flex-col justify-between absolute p-3 inset-0'>

                {/* upper */}
                <div className=' flex justify-between items-center'>
                    <p className=' bg-secondary/60 backdrop-blur-sm p-1 rounded-full'>{project?.year}</p>

                    {/* links */}
                    <div className='flex gap-2 items-center bg-secondary/60 backdrop-blur-sm p-1 rounded-full'>
                        {project.source && <a href={project.source} target='_blank' >
                            <ThemeBasedImage dark={"/github-dark.svg"} light={"/github-light.svg"} classes={"h-6 w-6"} />
                        </a>
                        }
                        {
                            project.live && <a href={project.live} target='_blank'>
                                <Globe />
                            </a>
                        }
                    </div>
                </div>


                {/* lower */}
                <div className='bg-secondary/60 backdrop-blur-sm p-1 rounded-md'>

                    <h5 className='font-semibold'>{project?.title}</h5>
                    <div className='flex gap-3'>
                        {project?.tags.map((tag, idx) => <small key={idx}>{tag}</small>)}
                    </div>

                </div>
            </div>

        </div >
    )
}

export default ProjectCard