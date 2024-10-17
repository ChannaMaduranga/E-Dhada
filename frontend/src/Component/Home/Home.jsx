import React from 'react'
import Header from '../header/Header'
import accidentImg from '../../assets/accident.png';
import speedImg from '../../assets/speed.jpg';
import finesbanner from '../../assets/fines list.png';

function Home() {
    return (
        <div className='font-outfit'>
            <Header />

            <div className='w-[80%] mx-auto'>
                <div className='my-16 w-full'>
                    <h2 className='text-5xl font-bold text-center text-gray-700'>How to Solve <span className='text-[#234D92]'>Trafic Fines</span></h2>
                </div>

                {/* how to use video section */}
                <div className='flex w-[80%] mx-auto space-x-8 h-[40vh] '>
                    <div className='w-1/2 h-full  flex flex-col justify-center '>
                        <p className='text-2xl text-gray-600'>
                            Follow these simple steps to resolve your traffic fines through the eDhada portal.

                        </p>
                        <p className='text-xl'>
                            <span className='text-[#234D92] font-semibold'>Watch this video </span><br />
                            for a step-by-step guide!
                        </p>
                    </div>
                    <div className='w-1/2 h-full'>
                        <div className='bg-gray-400 w-full h-full'>
                            <p className='font-medium text-xl  text-gray-500 items-center justify-center flex h-full'>Vido Thumbnail </p>
                        </div>
                    </div>
                </div>

                {/* phatgraph section */}

                <div className='flex  mx-auto space-x-8 h-auto my-32'>

                    <div className='w-1/2 h-auto'>
                        <div className='bg-gray-400 w-full h-full'>
                            {/* <p className='font-medium text-xl  text-gray-500 items-center justify-center flex h-full'>Vido Thumbnail </p> */}
                            <img src={accidentImg} alt='accident' className='w-full h-full object-cover' />
                        </div>
                    </div>

                    <div className='w-1/2 h-full  flex flex-col justify-center '>
                        <p className='text-xl text-gray-600 text-justify'>
                            The causes of traffic accidents are numerous. Traffic accidents are one of the problems that often occur on the highway and can cause huge losses, both material losses and loss of life. According to data from the Ministry of Transportation, every year there are hundreds of thousands of traffic accidents in Sri Lanka, resulting in thousands of deaths and millions of injuries.
                            Traffic accidents can occur due to various factors, such as human error, poor road conditions, natural factors, and poor vehicle conditions. Therefore, it is important to understand the factors that cause these accidents in order to take appropriate preventive measures.

                        </p>

                    </div>
                </div>

                {/* Causes of Traffic Accidents */}
                <div className='my-12 w-full'>
                    <div className=' w-full'>
                        <h2 className='text-4xl font-bold text-center text-gray-700'>Causes of Traffic Accidents</h2>
                    </div>

                    <div className='flex  mx-auto space-x-16 h-auto mt-24'>
                        <div className='w-2/3 h-full  flex flex-col justify-center '>
                            <div className='my-2'>
                                <p className='text-base text-gray-700 font-semibold'>
                                    Experiencing fatigue while driving
                                </p>
                                <p className='text-base text-gray-500 mt-0'>
                                    Drivers who experience fatigue while driving tend to become unfocused and respond slowly to situations on the road. This can lead to accidents.
                                </p>
                            </div>

                            <div className='my-2'>
                                <p className='text-base text-gray-700 font-semibold'>
                                    The driver is not yet fluent or even able to drive the vehicle



                                </p>
                                <p className='text-base text-gray-500 mt-0'>
                                    Many accidents occur because drivers are not fluent or even able to drive a vehicle properly. This can be caused by a lack of training or experience in driving.
                                </p>
                            </div>

                            <div className='my-2'>
                                <p className='text-base text-gray-700 font-semibold'>
                                    Vehicle speed that is not controlled by the driver
                                </p>
                                <p className='text-base text-gray-500 mt-0'>
                                    Drivers who are unable to control the speed of their vehicles tend to be unable to avoid collisions or accidents that can occur in front of them.
                                </p>
                            </div>

                            <div className='my-2'>
                                <p className='text-base text-gray-700 font-semibold'>
                                    Drivers violate traffic signs
                                </p>
                                <p className='text-base text-gray-500 mt-0'>
                                    Violating traffic signs such as disobeying red lights or going too fast where they are not allowed can lead to serious accidents.
                                </p>
                            </div>

                            <div className='my-2'>
                                <p className='text-base text-gray-700 font-semibold'>
                                    Drivers do not find traffic signs
                                </p>
                                <p className='text-base text-gray-500 mt-0'>
                                    Some accidents are also caused by drivers not clearly spotting traffic signs or not understanding the meaning of the signs.

                                </p>
                            </div>


                        </div>
                        <div className='w-1/3 h-auto bg-red-300'>
                            <div className='bg-gray-400 w-full h-full items-center justify-center'>
                                <img src={speedImg} alt='accident' className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>

                </div>

                {/* fines list banner */}

                <section className="relative w-full h-auto mx-auto md:my-32 rounded-2xl">
                    <div className="container relative h-full mx-auto flex md:flex-row items-center">
                        {/* Image Container */}
                        <div className='w-full h-full overflow-hidden items-center rounded-2xl object-contain'>
                            <img src={finesbanner} className='object-cover items-center' alt="" />
                            <div className='absolute rounded-2xl top-0 left-0 w-full h-full bg-black opacity-60'></div>
                        </div>

                        {/* Text and Button Container */}
                        <div className="md:w-2/4 text-white absolute right-0 px-8 mt-4 h-full flex flex-col justify-center">
                            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-right">
                                VIEW FINES LIST
                            </h1>

                            {/* Button aligned to the right */}
                            <div className="flex justify-end mt-4">
                                <button className="border-2 text-white px-6 py-2 rounded-full font-bold hover:bg-black hover:text-white hover:border-white">
                                    View List
                                </button>
                            </div>
                        </div>
                    </div>
                </section>



            </div>
        </div>
    )
}

export default Home