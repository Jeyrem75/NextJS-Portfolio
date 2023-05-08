import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import foodImg from '../public/assets/projects/food.png';

const food = () => {
    return (
        <>
            <Head>
                <title>Jey | Fullstack Developer</title>
                <meta name="description" content="" />
                <link rel="icon" href="/fav.png" />
            </Head>
            <div className="w-full lg:h-screen md:h-screen dark:bg-gray-900">
                <div className="w-screen h-[50vh] relative">
                    <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                    <Image className="absolute z-1" style={{ objectFit: "cover" }} src={foodImg} alt="" fill />
                    <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                        <h2 className="py-2">Food Ordering App</h2>
                        <h3>MongoDB, NextJS</h3>
                    </div>
                </div>

                <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                    <div className="col-span-4">
                        <p className="dark:text-white">Project</p>
                        <h2 className="dark:text-white">Overview</h2>
                        <p className="dark:text-white">
                            I built this app to demonstrate knowledge working with NextJS and MongoDB.
                            This fullstack app was built using Next JS and MongoDB. 
                            Users are able to order food by putting the item in the cart and then can begin
                            the payment process supporting by Stripe or can select the cash on delivery method.
                            There is an order page that resume step by step what the order&apos;s status is.
                            Admins can log to create new pizzas and delete them. They can also change the orders&apos;
                            status to the next step.
                        </p>
                        <a href="https://github.com/Jeyrem75/NextJS-Food-Ordering-App" target="_blank" rel="noreferrer">
                            <button className="px-8 py-2 mt-4 mr-8">Code</button>
                        </a>
                        {/* <a href="" target="_blank" rel="noreferrer">
                            <button className="px-8 py-2 mt-4" disabled>Demo</button>
                        </a> */}
                    </div>

                    <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:shadow-gray-400">
                        <div className="p-2">
                            <p className="text-center font-bold pb-2 dark:text-white">Technologies</p>
                            <div className="grid grid-cols-3 md:grid-cols-1">
                                <p className="text-gray-600 py-2 flex items-center dark:text-white">
                                    <RiRadioButtonFill className="pr-1" /> MongoDB
                                </p>
                                <p className="text-gray-600 py-2 flex items-center dark:text-white">
                                    <RiRadioButtonFill className="pr-1" /> NextJS
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link href="/#projects">
                        <p className="underline cursor-pointer dark:text-white">Back</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default food;