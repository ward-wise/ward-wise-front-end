import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">About</h1>
      <p className="mb-8">
        Word Wise is a breakout group under Chi Hack Night. Our source code is available on GitHub. We use data scraped from the Chicago Capital Improvements Archive by Jake Smith and John C. Ruf.
      </p>
      <Link href="https://github.com/chihacknight/breakout-groups/issues/224" target="_blank" rel="noopener noreferrer" className="text-cyan-500 underline">
        Check out our Chi Hack Night project page
      </Link>
    </div>
  );
}

