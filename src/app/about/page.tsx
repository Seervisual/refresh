import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-opal-dark text-white py-24">
      <div className="opal-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12">
            <br />
            2024 ended with an idea.
          </h1>

          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Climbing training is exploding<br />
            We should be training with the best tools<br />
            Take back our time to crush harder.
          </h2>

          <div className="text-lg text-gray-300 space-y-6 mb-16">
            <p>
              We believe training has become more synonymous with climbing and with life being so hectic, where do we fit the time? 
            </p>
            <p>
              With this in mind we collaborated with our keen climbing community to mould an exciting new evolution of premium and high quality tools to empower and make training fun for everyone.
            </p>
            <p>
              Time to train.
            </p>
            
          </div>

          <div className="mt-16 pt-16 border-t border-gray-800">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">DUE.</h2>
            <h3 className="text-2xl md:text-3xl font-light mb-6">presale on now.</h3>
            <p className="mb-8 text-lg">Secure yours for a one time only offer.</p>
            <Link
              href="/DUE_presale"
              className="inline-block bg-opal-yellow text-opal-dark font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Pre order now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
