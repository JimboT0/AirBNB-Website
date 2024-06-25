'use client'

import React, { useState, useEffect } from 'react';

type CustomerJourney = {
  landingPageURL: string;
  pathname: string;
  timestamp: string;
};

const JourneyTable = () => {
  const [customerJourneys, setCustomerJourneys] = useState<CustomerJourney[]>([]);

  useEffect(() => {
    // Function to fetch customer journeys from localStorage
    const fetchJourneys = () => {
      const storedJourneys = localStorage.getItem('customerJourneys');
      if (storedJourneys) {
        const parsedJourneys: CustomerJourney[] = JSON.parse(storedJourneys);
        setCustomerJourneys(parsedJourneys);
      }
    };

    fetchJourneys(); // Invoke the function to fetch journeys when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Customer Journeys</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Landing Page URL</th>
              <th className="border border-gray-200 px-4 py-2">Booking Submitted</th>
              <th className="border border-gray-200 px-4 py-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {customerJourneys.map((journey, index) => (
              <tr key={index}>
                <td className="border border-gray-200 px-4 py-2">{journey.landingPageURL}</td>
                <td className="border border-gray-200 px-4 py-2">{journey.pathname}</td>
                <td className="border border-gray-200 px-4 py-2">{journey.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default JourneyTable;
