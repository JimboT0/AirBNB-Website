"use client"


import { SanityPost } from "@/config/post-inventory"
import { PortableText } from '@portabletext/react';
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { logEvent } from '../lib/ga';
import { db } from "@/lib/firebase";

interface Props {
  post: SanityPost
}

export function BlogPostInfo({ post }: Props) {
  const [landingPageURL, setLandingPageURL] = useState('');

  useEffect(() => {
    const storedLandingPageURL = localStorage.getItem('landingPageURL');
    setLandingPageURL(storedLandingPageURL || '');
    console.log(storedLandingPageURL)
  }, []);

  const handleButtonClick = async (buttonLabel: string, pathname: string) => {
    const action = `Click ${buttonLabel}`;
    const label = `click_${buttonLabel.toLowerCase()} on ${pathname}`;
    logEvent('Button', action, label);
    console.log(`Customer from ${landingPageURL} has clicked ${buttonLabel} on ${pathname}`);

    const journey = {
      landingPageURL,
      pathname: pathname,
      timestamp: new Date().toISOString(),
    };


    try {
      await addDoc(collection(db, 'customerJourneys'), journey);
      // Successfully logged journey to Firestore
    } catch (error) {
      console.error('Error saving journey:', error);
    }
  };



  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{post.name}</h1>
      <div className="mt-6">
        <h3 className="sr-only">Content</h3>
        <PortableText value={post.content} />
        <button className="w-full border rounded-lg bg-orange-400 p-2"  type="submit" onClick={() => handleButtonClick('Submit', window.location.pathname)}>
          {post.name}
        </button>
      </div>
    </div>
  )
}
