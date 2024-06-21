import React from 'react';
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const RedirectButton = () => {
  const handleRedirect = () => {
    const landingPageURL = localStorage.getItem('landingPageURL');
    if (landingPageURL) {
      window.location.href = landingPageURL;
    } else {
      console.log('No landing page URL found in local storage.');
    }
  };

  return (
    <a onClick={handleRedirect} className="">
      <Icons.home  className="md:hidden block mt-2"/>
      <p className='dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium hidden md:block'>Home</p>
    </a>
  );
};

export default RedirectButton;
