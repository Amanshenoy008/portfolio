'use client';
import { useState } from 'react';
import ProjectCard from '../components/projectcard'
import AppCard from '../components/appcard'
import BlogCard from '../components/blogcard'
import { projects, apps, blogPosts } from '../data/content.js'
import { LuLinkedin,LuGithub} from "react-icons/lu";
import { PiExport } from "react-icons/pi";

const tabs = ['About', 'Projects', 'Apps', 'Blog']

export default function Home() {
  const [activeTab, setActiveTab] = useState('Projects');

  

  return (
    <main className="flex  justify-center min-h-screen bg-gray-100">
    <div className="p-8 bg-white rounded-lg  ">
      <div className="flex space-x-6">
      <div className=" rounded-md w-96 h-96 flex flex-col items-center justify-center text-center p-4">
          <img src="/not_picture.jpeg" alt="Aman Shenoy" className="w-36 h-36 object-cover rounded-full mb-4" />  {/** Use a cropped image for this */}
          <h1 className="text-xl font-bold">Aman Shenoy</h1>
          <p className="text-sm text-gray-700">I like Tech and Gaming...</p>
          <div className="mt-4 space-x-4 flex ">
            <a href="https://github.com/amanshenoy008" target="_blank" rel="noopener noreferrer"><LuGithub /></a>
            <a href="https://linkedin.com/in/shenoyaman" target="_blank" rel="noopener noreferrer" className=''><LuLinkedin /></a>
          </div>
          <div className='p-4'>
            <button className=''><span><PiExport/></span> Resume</button>
          </div> 
        </div>

        <div className=" rounded-md w-96 h-auto p-4">
  {/* Tab Buttons */}
  <div className="flex space-x-2 mb-4">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
          activeTab === tab ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        {tab}
      </button>
    ))}
   
  </div>

  {/* Tab Content */}
  <div className="bg-white rounded p-4 text-sm shadow-inner">
    {activeTab === 'About' && (
      <p>
        Hey! I'm Aman Shenoy — a cybersecurity grad student who loves tech, gaming, and solving real-world problems through code.
      </p>
    )}
    {activeTab === 'Projects' && (
      <div className="flex flex-col space-y-4">
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    )}
    {activeTab === 'Apps' && (
      <div className="flex flex-col space-y-4">
        {apps.map((a) => (
          <AppCard key={a.name} {...a} />
        ))}
      </div>
    )}
    {activeTab === 'Blog' && (
      <div className="flex flex-col space-y-4">
        {blogPosts.map((b) => (
          <BlogCard key={b.link} {...b} />
        ))}
      </div>
    )}
  </div>
</div>

      </div>
    </div>
  </main>
  );
}
