import React from 'react';
import ProjectItem from './ProjectItem';
import chat from '../public/assets/projects/chat.png';
import blog from '../public/assets/projects/blog.png';
import ecommerce from '../public/assets/projects/ecommerce.png';
import food from '../public/assets/projects/food.png';

const Projects = () => {
    return (
        <div id="projects" className="dark:bg-gray-900 w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Projects
                </p>
                <h2 className="py-4 dark:text-white">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title="Chat Application"
                        backgroundImg={chat}
                        projectUrl="/chat"
                        tech="ReactJS Firebase"
                    />
                    <ProjectItem
                        title="Blog Application"
                        backgroundImg={blog}
                        projectUrl="/blog"
                        tech="MongoDB ExpressJS ReactJS NodeJS"
                    />
                    <ProjectItem
                        title="ECommerce Application"
                        backgroundImg={ecommerce}
                        projectUrl="/ecommerce"
                        tech="MongoDB ExpressJS ReactJS NodeJS"
                    />
                    <ProjectItem
                        title="Food Ordering Application"
                        backgroundImg={food}
                        projectUrl="/food"
                        tech="MongoDB NextJS"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;