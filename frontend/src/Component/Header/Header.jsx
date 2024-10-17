import React from 'react'
import headerImg from "../../assets/header.jpg";




function Header() {


    return (
        <div>
            <div className='w-[100vw] h-[70vh] relative flex justify-center items-center font-outfit'>
                <div className='w-full h-full object-contain overflow-hidden'>
                    <img src={headerImg} alt="" className='object-cover w-full h-full' />
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
                    <div className='absolute  top-0 w-full h-full text-white  flex flex-col justify-center items-center'>
                        <h2 className='text-6xl font-bold text-center'>e Dhada</h2>
                        <p className='text-lg font-base text-center '>
                            Quickly access and settle your police fines with our secure and convenient online service.
                        </p>

                    </div>
                    <div className='flex flex-row absolute top-0 justify-center w-full h-full items-center mt-24'>
                        <h3 className=' w-full h-full text-2xl text-white font-medium absolute flex flex-col justify-center items-center '>Search Your Fines</h3><br />
                        <div className="absolute text-gray-600 mt-24 ">
                            <input type="search" name="serch" placeholder="Search" className="bg-white opacity-80 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"/>
                                <button type="submit" className="absolute right-0 top-0 ">
                                    {/* <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                                    </svg> */}
                                </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header