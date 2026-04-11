import PageTitle from '@/components/page-template';
import React from 'react'
import data from "@/data.json"
import ProjectCard from '@/components/project-card';

export const metadata = {
    title: "Projects | Nayedul Alam",
    description: "All projects",
};


const Projects = () => {
    const { projects } = data;
    return (
        <div>
            <PageTitle title={"Projects"} subtitle={"All the projects i made so far, using the technologies i have learnt."}>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-12">
                    {projects?.map((project, idx) => <ProjectCard key={idx} project={project} />)}
                </div>
            </PageTitle>
        </div>
    )
}

export default Projects