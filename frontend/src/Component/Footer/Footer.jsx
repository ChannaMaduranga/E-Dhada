import React from 'react'
import { FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";


function Footer() {
    return (
        <div className='w-[100vm] font-outfit mt-16'>
            <div className='w-full h-auto bg-gradient-to-t from-[#10173d] to-[#1c4c9e]'>
                <div className='bg-white w-[60%] mx-auto h-[13vh] rounded-b-full '>
                    <h2 className='text-center text-6xl font-bold text-[#1E4483]'>SRI LANKA POLICE</h2>
                </div>

                <div className=" mx-auto mt-16 flex flex-col space-y-4 md:space-y-0 md:grid  md:grid-cols-3 md:gap-8  w-[90%] md:w-[90%] text-white">
                    {/* Left Section  */}
                    <div className='w-[80%] md:pl-[10%]'>
                        <a href="/">
                            <div className='flex space-x-2 items-center  mb-4'>
                                <h3 className="font-bold text-sm md:text-xl  ">e Dhada</h3>
                            </div>
                        </a>
                        <p className='text-justify text-sm md:text-sm'>
                            The Sri Lanka Police Traffic Section is dedicated to ensuring road safety and enforcing traffic regulations across the country. Our mission is to reduce accidents, promote responsible driving, and uphold the law for a safer journey on Sri Lanka's roads.
                        </p>
                    </div>
                    {/* middle Section  */}
                    <div className=' md:pl-[35%]  '>
                        <h3 className="font-bold text-xl mb-8">SL Police</h3>
                        <ul className='text-sm md:text- base'>
                            <a href="/"><li className="mb-2 hover:underline cursor-pointer">HOME</li></a>
                            <a href=""><li className="mb-2 hover:underline cursor-pointer">ABOUT US</li></a>
                            <a href=""><li className="mb-2 hover:underline cursor-pointer">DIVISSION</li></a>
                            <a href=""><li className="mb-2 hover:underline cursor-pointer">CONTACT US</li></a>
                        </ul>
                    </div>

                    {/* Right Section  */}
                    <div className=' md:pl-[40%] text-sm md:text-base '>
                        <h3 className="font-bold text-xl mb-8">Get In Touch</h3>
                        <p className="mb-2">011-2345678</p>
                        <p className="mb-2">slpolice.info@gov.lk</p>
                        <p className="mb-2">We are open 24 hours</p>
                        <p className="mb-2">Head Office, Sri Lanka</p>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mt-4 text-base">
                            <a href="#" className="hover:text-gray-300">
                                <i className="fab fa-facebook"><FaFacebook /></i>
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <i className="fab fa-whatsapp"><FaWhatsapp /></i>
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                <i className="fas fa-envelope"><FaEnvelope /></i>
                            </a>
                        </div>
                    </div>




                </div>

                {/* bottom section */}
                <div className="border-t border-white-200 mt-10 pt-4 p-4 text-center  pb-4 ">
                    <p className="text-sm text-white">
                        Copyright © 2024 Solutions by xxx – All Right Reserved.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Footer