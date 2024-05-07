import Link from 'next/link'
import React from 'react'

export default function feedback() {
    return (
        <div>









            <div className="w-full flex items-center justify-center py-20">

                <div className="max-w-md w-full p-6">
                    <div className="space-y-2 pt-10 container px-4 md:px-6">


                    </div>
                    <h1 className="text-3xl font-semibold mb-6 text-black dark:text-white text-center ">Contact us</h1>
                    <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">We care about our guests and their feedback. <br/> If you have anything you would like to let us know, please feel free to do so. </h1>

                    <form action="#" method="POST" className="space-y-4">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-white">Name</label>
                            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
                            <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-white">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4} // Set the number of rows for the textarea
                                className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            />              </div>
                        <div>
                            <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 dark:text-white">Submit</button>
                        </div>
                    </form>
                    {/* <div className="mt-4 text-sm text-gray-600 text-center">
              <p>Already have an account? <a href="#" className="text-black hover:underline">Login here</a>
              </p>
            </div> */}
                </div>
            </div>



        </div>
    )
}
