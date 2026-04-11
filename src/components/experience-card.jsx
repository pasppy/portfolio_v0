import { BriefcaseBusiness, Calendar, MapPin } from 'lucide-react'
import React from 'react'
import { Card } from './ui/card';
import Tags from './tags';

const ExperienceCard = ({ work }) => {

    return (
        <div className='relative'>
            <div className='bg-accent absolute p-2 rounded-full -left-11 top-3'><BriefcaseBusiness size={18} /></div>

            <Card className='px-4'>
                <div className='flex items-baseline gap-5'>
                    <h5>{work?.role}</h5>
                    <li className='relative'>
                        <a href={work?.website_link} className='underline' target='_blank'>{work?.employer}</a>
                    </li>
                </div>
                <div className='text-primary/60 flex justify-between items-center'>
                    <div className=' flex gap-1 items-center'>
                        <Calendar size={16} />
                        {/* start */}
                        <small>{work?.start_date}</small>
                        {/* end */}
                        {work?.end_date && <small >- {work?.end_date}</small>}
                    </div>
                    {/* location */}
                    <div className='flex gap-1 items-center'>
                        <MapPin size={16} />
                        <small>{work?.location}</small>
                        <small>- {work?.work_type}</small>
                    </div>
                </div>

                <div>
                    {/* bullets */}
                    <ul className='ml-2 space-y-1'>
                        {work?.details.map((item, idx) => <li className='list-disc' key={idx}>{item}</li>)}
                    </ul>

                </div>
                <Tags tags={work?.tags} size='sm' />
                <div>

                </div>
            </Card >
        </div >

    )
}

export default ExperienceCard