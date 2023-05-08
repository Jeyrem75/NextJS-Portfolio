import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div id="home" className="dark:bg-gray-900 w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-white">
                        Let&apos;s build something together
                    </p>
                    <h1 className="py-4 text-gray-700 dark:text-white">
                        Hi, I&apos;m <span className="text-[#5651e5]">Jey</span>
                    </h1>
                    <h1 className="py-2 text-gray-700 dark:text-white">A Fullstack Web Developer</h1>
                    <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto dark:text-white">
                        I&apos;m focused on building fullstack web applications
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <a href="https://www.linkedin.com/in/jeremy-ly-dev/" target="_blank" rel="noreferrer">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:shadow-gray-400">
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href="https://github.com/Jeyrem75" target="_blank" rel="noreferrer">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:shadow-gray-400">
                                <FaGithub />
                            </div>
                        </a>
                        <Link href="/#contact">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:shadow-gray-400">
                                <AiOutlineMail />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;