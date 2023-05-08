import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'portfolio', e.target, 'user_Pdun9eBkg78WDKDDF2dKH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div id="contact" className="dark:bg-gray-900 w-full lg:h-full">
            <div className="max-w-[1240px] m-auto px-2 py-8 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contact
                </p>
                <h2 className="py-4 dark:text-white">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 dark:shadow-gray-400">
                        <div className="lg:p-4 h-full">
                            <div>
                                <Image className="rounded-xl hover:scale-105 ease-in duration-300" src={ContactImg} alt="" />
                            </div>
                            <div>
                                <h2 className="py-2 dark:text-white">Jey</h2>
                                <p className="dark:text-white">Fullstack Developer</p>
                                <p className="py-4 dark:text-white">I&apos;m available for freelance or full-time positions. Contact me and let&apos;s talk !</p>
                            </div>
                            <div>
                                <p className="uppercase pt-8 dark:text-white">Connect with me</p>
                                <div className="flex items-center justify-between py-4">
                                    <a href="https://www.linkedin.com/in/jeremy-ly-dev/" target="_blank" rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:shadow-gray-400">
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a href="https://github.com/Jeyrem75" target="_blank" rel="noreferrer">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:shadow-400">
                                            <FaGithub />
                                        </div>
                                    </a>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:shadow-gray-400">
                                        <AiOutlineMail />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:shadow-gray-400">
                        <div className="p-4">
                            <form method="POST" encType="multipart/form-data" onSubmit={sendEmail}>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2 dark:text-white">Name</label>
                                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2 dark:text-white">Phone Number</label>
                                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 dark:text-white">Email</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 dark:text-white">Subject</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 dark:text-white">Message</label>
                                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10" name="message"></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4 dark:shadow-gray-400">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-gray-400">
                            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;