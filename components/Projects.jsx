import React from 'react';
import ProjectItem from './ProjectItem';


const Projects = () => {
  return (
    <div id="projects" className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          
          <ProjectItem 
            title="ImpactMake" 
            description="
            Addressing the challenge of connecting eager volunteers with suitable projects, I developed a web application. 
            This platform streamlines the process, making it easy for people to discover and engage in impactful volunteer opportunities that align with their interests. 
            It encourages community involvement and positive social change" 
            bgImg="/assets/projects/impact.png" 
            tech="#HTML # CSS # Javascript"
            demoURL="https://ephemeral-dieffenbachia-332c1d.netlify.app/" 
            codeURL="https://github.com/kayitaclever/ImpactMate.git" />
          <ProjectItem 
            title="StoryMates" 
            description="
            To address the need for a safe and creative digital space for children under 10, I created a user-friendly web app. 
            It provides animated videos, books, and music, promoting learning and imagination. 
            Safety is a priority, ensured through age-appropriate content filters and an intuitive design that enhances engagement." 
            bgImg="/assets/projects/storymates.png"
            tech="#HTML #CSS #Javascript"
            demoURL="https://venerable-puffpuff-f6ab83.netlify.app/" 
            codeURL="https://github.com/kayitaclever/Storymates.git" />
             <ProjectItem 
            title="Movie-Magic" 
            description="TThis project addresses the challenge of efficiently finding and exploring movies. 
            By creating a responsive web app with search, filtering, and category features, users can easily discover and access movie details based on their
             preferences, enhancing their movie-watching experience." 
            bgImg="/assets/projects/movie.png"
            tech="#ReactJS # DummyJSON APIs" 
            demoURL="https://movie-magic-ebon.vercel.app/" 
            codeURL="https://github.com/kayitaclever/Movie-Magic.git" />
          <ProjectItem 
            title="GreenKiosk" 
            description="
            Addressing the need for streamlined online shopping, I created an e-commerce platform. This empowers vendors to manage inventory effectively and 
            allows users to make purchases easily. With a user-friendly interface and strong features, it enhances the shopping experience for both vendors and 
            customers." 
            bgImg="/assets/projects/image.png"
            tech="#HTML #CSS #Python #Django" 
            demoURL="/#projects" 
            codeURL="https://github.com/kayitaclever/GreenKiosk.git" />

        </div>
      </div>
    </div>
  )
}

export default Projects