// components/CaptureLandingPageURL.js
'use client';

import { useEffect } from 'react';

const CaptureLandingPageURL = () => {
  useEffect(() => {
    // Function to handle beforeunload event
    const handleBeforeUnload = () => {
      // Do nothing on beforeunload to retain the landingPageURL
    };

    // Add event listener for beforeunload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up event listener
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Retrieve stored landing page URL from local storage
    const storedLandingPageURL = localStorage.getItem('landingPageURL');
    const currentURL = window.location.href;

    // Only set if there is no stored URL
    if (!storedLandingPageURL) {
      localStorage.setItem('landingPageURL', currentURL);
      console.log('Landing Page URL set in local storage:', currentURL);
    } else {
      console.log('Landing Page URL already stored:', storedLandingPageURL);
    }
  }, []);

  return null;
};

export default CaptureLandingPageURL;
