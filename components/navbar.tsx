import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import Link from "next/link"
import RedirectButton from "./redirectButton";


function Nav() {

    
    return (
        <div >
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">

                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {/* <a
                                        href="/"
                                        className=" hover:bg-gray-700 dark:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </a> */}
                                    <RedirectButton />


                                    <a
                                        href="/shop"
                                        className="dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Shop
                                    </a>

                                    <a
                                        href="/activities"
                                        className="dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Activities
                                    </a>

                                    <a
                                        href="/contact"
                                        className="dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Contact
                                    </a>

                                </div>
                            </div>
                        </div>


                        
                    </div>
                </div>








            </nav>
        </div>
    );
}

export default Nav;
