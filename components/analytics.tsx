// components/Analytics.js
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initGA, logPageView, logEvent } from '../lib/ga';

const Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  useEffect(() => {
    logPageView();
  }, [pathname]);



  const handleButtonClick = (buttonLabel: any) => {
    logEvent('Button Click', `Clicked ${buttonLabel}`, buttonLabel);
  };


  

  return null;
};

export default Analytics;
