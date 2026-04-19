import SectionTemplate from "@/components/section-template";
import Tags from "@/components/tags";
import { Button } from "@/components/ui/button";
import UserImage from "@/components/user-image";
import Link from "next/link";
import data from "@/data.json"
import ExperienceCard from "@/components/experience-card";
import ProjectCard from "@/components/project-card";
import ThemeBasedImage from "@/components/theme-based-image";
import { Indie_Flower } from 'next/font/google'

const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"]

})

export default function Home() {
  const { works, resume_link, projects: allProjects } = data;
  const projects = allProjects.filter((p) => p?.display_main_page);

  return (
    <div className="">
      {/* hero */}
      <section className="md:mt-16">
        <div className="flex flex-col gap-20">

          {/* description + profile photo */}
          <div className="grid max-sm:gap-6 sm:grid-cols-[3fr_1fr]">
            <div className="relative h-42 w-42 sm:h- sm:w- lg:h-52 lg:w-52 sm:order-2">
              <UserImage />
              <p className="absolute bottom-0 -right-6 sm:-left-6 small">He/Him</p>
            </div>

            <div className="">
              <h1>Hi, I'm <span className="font-bold text-">Nayedul Alam</span></h1>
              <div className="sm:w-5/6 mt-6">
                <p className="">I build web applications that solve real problems — not just tutorials.</p>
                <p className=" mt-2">Focused on JavaScript, React, and backend systems, I care about writing clean code and building things that actually get used.</p>
              </div>


              <div className="mt-12 flex gap-4">
                <Button asChild size="lg">
                  <Link href={"/#work-experience"}>View my work</Link>
                </Button>
                <Button asChild size="lg">
                  <Link href={"#contact"}>Contact me</Link>

                </Button>
              </div>
            </div>
          </div>

          {/* resume */}
          <div className="self-end pr-6">
            <a
              href={resume_link} className="underline"
              target="_blank"
            > *My resume</a>
          </div>
        </div>
      </section >
      {/* about */}
      <SectionTemplate title={"About Me"} subtitle={"I don’t just learn technologies — I use them to solve problems."}>
        <div className="space-y-4">

          <p>I’m a Computer Science student who prefers building over just learning.</p>

          <p> Instead of jumping between technologies, I focus on understanding how things actually work — from frontend interactions to backend logic and data flow.</p>

          <p> Right now, I’m working on real-world projects that solve everyday problems, while strengthening my problem-solving and system design skills.</p>

          <p> My goal is simple: become an engineer who can build reliable, scalable systems — not just write code that works.</p>
        </div>

      </SectionTemplate>

      {/* tech stack */}
      <SectionTemplate title={"Tech Stack"}>
        <div className="space-y-4">
          <div>
            <h4 className="underline">Frontend</h4>
            <Tags tags={["React.js", "Next.js", "Javascript", "Tailwind", "Shadcn"]} />
          </div>
          <div>
            <h4 className="underline">Backend</h4>
            <Tags tags={["Node.js", "Express.js", "Rest APIs", "Auth", "Supabase"]} />
          </div>
          <div>
            <h4 className="underline">Tools</h4>
            <Tags tags={["Github", "Vercel", "Render", "Postman"]} />
          </div>
        </div>
      </SectionTemplate>

      {/* work experience */}
      <SectionTemplate id={"work-experience"} title={"Work Experience"}>

        <div className="mx-2 pl-6 border-l-4 space-y-4">

          {works?.map((work, idx) => <ExperienceCard key={idx} work={work} />)}

        </div>
      </SectionTemplate>

      {/* projects */}
      <SectionTemplate title={"Projects"}>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {projects?.map((project, idx) => <ProjectCard key={idx} project={project} />)}
        </div>

        <Button className={"mt-4"} size="lg"> <Link href={"/projects"}>See All</Link></Button>

      </SectionTemplate>

      <SectionTemplate title={"Current Focus"} subtitle={"What I’m Currently Working On"}>
        <div className="space-y-1">
          <p>- Building more full-stack applications with real use cases</p>
          <p>- Improving problem solving through DSA </p>
          <p>- Learning how scalable systems are designed in real-world products</p>
        </div>
      </SectionTemplate>

      {/* contact links */}
      <section id="contact" className="mt-26 space-y-12">
        <h4 className="text-right ">Let's build something meaningful.</h4>
        <div className=" ">
          <h4>If you have an opportunity, a project, or just want to connect — feel free to reach out.</h4>
        </div>

        <div className="space-y-4 inline-block relative">

          <div className="absolute -right-45 top-20">
            <ThemeBasedImage dark={"/arrow-dark.svg"} light={"/arrow-light.svg"} classes={"w-8 h-8  scale-y-[-1]"} />
            <small className={`${indieFlower.className} underline`}>Let’s connect just drop a message</small>
          </div>

          <h4>My Socials</h4>
          <div className="flex flex-col items-start gap-2">
            <a href="https://github.com/pasppy" className="underline">Github</a>
            <a href="https://www.linkedin.com/in/nayedul-alam-26b4a6205/" className="underline">linkedIn</a>
            <a href="mailto:nayedul05@gmail.com" className="underline">Email</a>
          </div>
        </div>

        <div className="space-y-4">
          <h4>Quick Links</h4>
          <div className="flex flex-col items-start gap-2">
            <a href={resume_link} target="_blank" className=" underline">My resume</a>
            <a href="mailto:nayedul05@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Nayedul%2C%0A%0AI%20came%20across%20your%20work%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0AThanks" className="underline">Hire Me</a>
          </div>
        </div>
      </section>

    </div>
  );
}
