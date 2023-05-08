import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
    return (
        <div id="about" className="dark:bg-gray-900 w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                        About
                    </p>
                    <h2 className="py-4 dark:text-white">Who I Am</h2>
                    <p className="py-2 text-gray-600 dark:text-white">
                        I specialize in building responsive fullstack web applications. I’m
                        passionate about learning new technologies and understand there is
                        more than one way to accomplish a task. Though I am most proficient
                        in building fullstack applications using the MERN Stack and NextJS, I am a quick learner and can pick up new tech stacks as
                        needed. I believe that being a great developer is not using one
                        specific language, but choosing the best tool for the job.
                    </p>
                    <p className="py-2 text-gray-600 dark:text-white">
                        I started web developement in 2020 when I joined WebAc@demie by Epitech. 
                        I&apos;ve learned all my skills there by doing projects during 2 years. 
                        In my spare time I do some personal projects and learn new technologies.
                    </p>
                    <Link href="/#projects">
                        <p className="py-2 text-gray-600 underline cursor-pointer dark:text-white">
                            Check out some of my latest projects
                        </p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 dark:shadow-gray-400">
                    <Image src={AboutImg} className="rounded-xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;