import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-opal-dark text-white py-24">
      <div className="opal-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            Page Not Found
          </h1>
          <p className="text-xl mb-12">
            We couldn't find the page you're looking for.
          </p>
          <Link
            href="/"
            className="inline-block bg-opal-yellow text-opal-dark font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
