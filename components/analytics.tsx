// components/Analytics.js
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initGA, logPageView } from '../lib/ga';

const Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  useEffect(() => {
    logPageView();
  }, [pathname]);

  return null;
};

export default Analytics;
