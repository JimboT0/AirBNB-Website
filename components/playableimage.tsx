import React from 'react'
import Image from 'next/image'

const playableimage = () => {
    return (
        <div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">

                <div className="relative">

                    <Image src="/daytonapic.png" width={1000} height={1000} alt="" className="scale-75 md:scale-100 relative z-30 items-center object-cover md:w-[90%] h-[90%] rounded-tr-[80px] rounded-bl-[80px] rounded bg-slate-300" />

                    <div className="absolute z-30 text-red-500 transform -translate-y-1/2 cursor-pointer top-[47%] left-[44%] hover:text-blue-500">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"

                            className="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">

                            <path

                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z">

                            </path>

                        </svg>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default playableimage
