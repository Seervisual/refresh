import React from 'react';
import Link from 'next/link';

const BrandPromo = () => {
  return (
    <section className="bg-opal-dark text-white py-24">
      <div className="opal-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-light mb-12">FORMA</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-light mb-6">
                Subscribe to the<br />
                forma newsletter
              </h3>
              <p className="text-gray-400 mb-6">
                We promise to notify you only when necessary. Maybe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-opal-yellow"
                />
                <button className="bg-opal-yellow text-opal-dark font-medium px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-medium mb-4">Press</h3>
                <p className="text-gray-400 mb-4">Latest updates and articles online.</p>
                <Link
                  href="/press"
                  className="text-opal-yellow hover:underline"
                >
                  Learn more →
                </Link>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4">Media Kit</h3>
                <p className="text-gray-400 mb-4">Press releases, brand resources and photo gallery.</p>
                <Link
                  href="/media-kit"
                  className="text-opal-yellow hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPromo;
