// lib/ga.js
import ReactGA from 'react-ga4';

export const initGA = () => {
  console.log('GA4 init');
  ReactGA.initialize('G-YFPZ9XHRQT'); // Replace with your GA4 Measurement ID
};

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category = '', action = '', label = '') => {
  if (category && action) {
    ReactGA.event({ category, action, label });
  }
};



