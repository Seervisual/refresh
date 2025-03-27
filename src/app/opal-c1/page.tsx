import React from 'react';
import Link from 'next/link';

export default function C1Page() {
  return (
    <div className="bg-opal-dark text-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="opal-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                Opal C1
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8">
                The first professional webcam
              </h2>
              <p className="text-lg mb-8">
                The Opal C1 is the first professional webcam designed for creators, streamers, and professionals. With a MFT sensor and f1.8 lens, it delivers DSLR-quality video to your calls.
              </p>
              <Link
                href="/shop/opal-c1"
                className="inline-block bg-opal-yellow text-opal-dark font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Order now - $299
              </Link>
            </div>
            <div className="relative aspect-square">
              <img
                src="/images/c1.png"
                alt="Opal C1 Professional Webcam"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="opal-container">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Professional quality for every call
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">DSLR Quality</h3>
              <p className="text-gray-300">
                With a MFT sensor that's 22x larger than typical webcams, the C1 captures professional-grade video.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Perfect Bokeh</h3>
              <p className="text-gray-300">
                The C1's f/1.8 lens creates beautiful depth of field, blurring your background naturally.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Intelligent Processing</h3>
              <p className="text-gray-300">
                Our custom 48MP Sony CMOS sensor, combined with our intelligent software, delivers unmatched clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-16 bg-opal-light text-opal-dark">
        <div className="opal-container">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Designed with intention
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Every detail of the C1 has been crafted with care, from the aerospace-grade aluminum body to the precision-engineered mount.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-medium mb-4">Premium Materials</h3>
              <p className="text-lg mb-6">
                Crafted from a single piece of aluminum, the C1 is both beautiful and durable.
              </p>
              <h3 className="text-2xl font-medium mb-4">Intelligent Cooling</h3>
              <p className="text-lg">
                The ventilated design keeps the C1 cool, even during all-day video calls.
              </p>
            </div>
            <div className="relative aspect-square">
              <div className="w-full h-full bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Composer Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="opal-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <img
                src="/images/composer.png"
                alt="Opal Composer Software"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                Powered by Composer
              </h2>
              <p className="text-lg mb-8">
                The C1 is powered by Composer, our desktop software that gives you complete control over your image. Adjust lighting, color, and more with professional-grade tools.
              </p>
              <Link
                href="/opal-composer"
                className="inline-block bg-opal-yellow text-opal-dark font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Learn more about Composer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-opal-yellow text-opal-dark">
        <div className="opal-container text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Opal C1</h2>
          <h3 className="text-2xl md:text-3xl font-light mb-6">Professional quality for your desktop</h3>
          <p className="mb-8 text-lg">Get your C1 for $299.</p>
          <Link
            href="/shop/opal-c1"
            className="inline-block bg-opal-dark text-white font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Order now
          </Link>
        </div>
      </section>
    </div>
  );
}
