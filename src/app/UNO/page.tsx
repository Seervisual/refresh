import React from 'react';
import Link from 'next/link';

export default function TadpolePage() {
  return (
    <div className="bg-opal-dark text-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="opal-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                A modern take on a classic.
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8">
                Introducing the forma UNO
              </h2>
              <p className="text-lg mb-8">
              Our premiere 20mm edge!!! Many of you asked for a static version of the DUE (no loadcell) so we miniaturised it.  Perfect for ripping new PB's in the gym or warming up at the crag.
              </p>
              <p className="text-lg mb-8">Pull with confidence on space grade aluminium. Designed to outperform so you can train smarter and crush harder (slings and weights not included, sorry not sorry).
              </p>
              <p className="text-lg mb-8">
                Comes in Black and Gunmetal.
              </p>
              <Link
                href="/shop/opal-tadpole"
                className="inline-block bg-opal-yellow text-opal-dark font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Order now - $119
              </Link>
            </div>
            <div className="relative aspect-square">
              <img
                src="/images/uno.png"
                alt="Opal Tadpole Webcam"
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
          Unbeatable class
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Compact power.</h3>
              <p className="text-gray-300">
              Milled from the same aerospace aluminium as the forma DUE and looking gorgeous, the forma UNO is your go to finger training device using traditional weights.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Wrap And Pull.</h3>
              <p className="text-gray-300">
                Snug in your pocket, pair the UNO with a sling or custom setup and rip a new PB within seconds.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Squeaky clean.</h3>
              <p className="text-gray-300">
                Sandblasted aluminium remains cool to the touch and grippy in all conditions. Brush lightly and return to a consistent edge, everytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-opal-light text-opal-dark">
        <div className="opal-container">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Technique Schmenique
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Our custom made True Edge is tilt adjusted when pulling (holding a neutral edge). This keeps the 20mm edge consistent and saves time to constantly readjust your setup.
          </p>
          <div className="flex justify-center">
            <Link
              href="/opal-tadpole/comparison"
              className="inline-block border-2 border-opal-dark text-opal-dark font-medium px-8 py-3 rounded-md hover:bg-opal-dark hover:text-white transition-colors"
            >
              See full video comparison
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-opal-yellow text-opal-dark">
        <div className="opal-container text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">forma UNO</h2>
          <h3 className="text-2xl md:text-3xl font-light mb-6">Begin your training journey today</h3>
          <p className="mb-8 text-lg">for only $119.</p>
          <Link
            href="/shop/opal-tadpole"
            className="inline-block bg-opal-dark text-white font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Order now
          </Link>
        </div>
      </section>
    </div>
  );
}
