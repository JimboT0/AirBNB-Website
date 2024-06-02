import React from 'react';

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
    <a onClick={handleRedirect} className="dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
      Home
    </a>
  );
};

export default RedirectButton;
