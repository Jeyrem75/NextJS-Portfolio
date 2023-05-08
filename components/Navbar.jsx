import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import NavLogo from '../public/assets/logo.png';
import useDarkMode from "../pages/useDarkMode";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const [colorTheme, setTheme] = useDarkMode();

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true);
            }
            else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div style={{ backgroundColor: `${navBg}` }} className={shadow ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300" : "fixed w-full h-20 z-[100]"}>
            <div className="dark:bg-gray-900 flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <Image src={NavLogo} alt="/" width="125" height="50" className="cursor-pointer" />
                </Link>
                <div>
                    <ul style={{ color: `${linkColor}`}} className="hidden md:flex">
                        {/* {colorTheme === "light" ? (
                            <li>
                                <BsFillSunFill
                                    onClick={() => setTheme("light")}
                                    className="cursor-pointer text-2xl dark:text-white"
                                />
                            </li>
                        ) : (
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setTheme("dark")}
                                    className="cursor-pointer text-2xl"
                                />
                            </li>
                        )} */}
                        {colorTheme === "light" ? (
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setTheme("light")}
                                    className="cursor-pointer text-2xl dark:text-white"
                                />
                            </li>
                        ) : (
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setTheme("dark")}
                                    className="cursor-pointer text-2xl"
                                />
                            </li>
                        )}
                        <li className="ml-10 text-sm uppercase hover:border-b dark:text-white">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b dark:text-white">
                            <Link href="/#about">About</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b dark:text-white">
                            <Link href="/#skills">Skills</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b dark:text-white">
                            <Link href="/#projects">Projects</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b dark:text-white">
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                    <div style={{ color: `${linkColor}`}} onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} className="dark:text-white" />
                    </div>
                </div>
            </div>

            <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={ nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-gray-900' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href="/">
                                <Image src={NavLogo} width="87" height="35" alt="" />
                            </Link>
                            {colorTheme === "light" ? (
                                <div onClick={() => setTheme("light")} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-gray-400">
                                    <BsFillMoonStarsFill className="dark:text-white" />
                                </div>
                            ) : (
                                <div onClick={() => setTheme("dark")} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-gray-400">
                                    <BsFillMoonStarsFill />
                                </div>
                            )}
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-gray-400">
                                <AiOutlineClose className="dark:text-white" />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4 dark:text-white">
                                Let&apos;s build something together
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li onClick={() => setNav(false)} className="py-4 text-sm dark:text-white">
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={() => setNav(false)} className="py-4 text-sm dark:text-white">
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={() => setNav(false)} className="py-4 text-sm dark:text-white">
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={() => setNav(false)} className="py-4 text-sm dark:text-white">
                                    Projects
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={() => setNav(false)} className="py-4 text-sm dark:text-white">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Let&apos;s connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <a href="https://www.linkedin.com/in/jeremy-ly-dev/" target="_blank" rel="noreferrer">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-gray-400 dark:text-white">
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a href="https://github.com/Jeyrem75" target="_blank" rel="noreferrer">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-gray-400 dark:text-white">
                                        <FaGithub />
                                    </div>
                                </a>
                                <Link href="/#contact">
                                    <div onClick={() => setNav(!nav)} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-gray-400 dark:text-white">
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;