// src/components/JourneyTable.js

'use client';

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

type CustomerJourney = {
  landingPageURL: string;
  pathname: string;
  timestamp: string;
};

const JourneyTable = () => {
  const [customerJourneys, setCustomerJourneys] = useState<CustomerJourney[]>([]);

  useEffect(() => {
    const fetchJourneys = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'customerJourneys'));
        const journeys = querySnapshot.docs.map(doc => doc.data() as CustomerJourney);
        setCustomerJourneys(journeys);
      } catch (error) {
        console.error('Error fetching customer journeys:', error);
      }
    };

    fetchJourneys();
  }, []);

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
