"use client"

import { useEffect } from 'react';

const CaptureLandingPageURL = () => {
  useEffect(() => {
    const storedLandingPageURL = localStorage.getItem('landingPageURL');
    if (!storedLandingPageURL) {
      const currentURL = window.location.href;
      localStorage.setItem('landingPageURL', currentURL);
      console.log('Landing Page URL set in local storage:', currentURL);
    } else {
      console.log('Landing Page URL already stored:', storedLandingPageURL);
    }
  }, []);

  return null;
};

export default CaptureLandingPageURL;

