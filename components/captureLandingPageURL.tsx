// components/CaptureLandingPageURL.js
'use client';

import { useEffect } from 'react';

const CaptureLandingPageURL = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      const storedLandingPageURL = localStorage.getItem('landingPageURL');
      if (storedLandingPageURL) {
        localStorage.removeItem('landingPageURL');
        console.log('Landing Page URL removed from local storage:', storedLandingPageURL);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const storedLandingPageURL = localStorage.getItem('landingPageURL');
    const currentURL = window.location.href;

    // Only update if the stored URL is different from the current URL
    if (!storedLandingPageURL || storedLandingPageURL !== currentURL) {
      localStorage.setItem('landingPageURL', currentURL);
      console.log('Landing Page URL set in local storage:', currentURL);
    } else {
      console.log('Landing Page URL already stored:', storedLandingPageURL);
    }
  }, []);

  return null;
};

export default CaptureLandingPageURL;
