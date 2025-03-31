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
                A new species of webcam
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8">
                Introducing the Tadpole
              </h2>
              <p className="text-lg mb-8">
                The smallest webcam ever built. With a category-first directional microphone, a mirrorless Sony sensor, and the easiest way to mute your call with a tap, it's the perfect webcam to take with you everywhere.
              </p>
              <p className="text-lg mb-8">
                And now, it works with both Mac and PC.
              </p>
              <Link
                href="/shop/opal-tadpole"
                className="inline-block bg-opal-yellow text-opal-dark font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Order now - $129
              </Link>
            </div>
            <div className="relative aspect-square">
              <img
                src="/images/tadpole.png"
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
            Uniquely designed for your laptop.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Teenie-Tiny.</h3>
              <p className="text-gray-300">
                The tadpole is just a tad taller than a gummy bear. It fits in your hand and rests nicely on your laptop display.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Clip And Go.</h3>
              <p className="text-gray-300">
                The Opal Tadpole was made to go with you. Wrap it around your wrist or put it in its case to keep it safe.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Mute with a tap.</h3>
              <p className="text-gray-300">
                Touch it or swipe it. Our integrated capacitive USB-C button can mute your mic instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-opal-light text-opal-dark">
        <div className="opal-container">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Mirrorless quality, peerless reputation.
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Our powerful Sony IMX582 RS sensor combined with our f1.8 six element glass lens produces the truest color you can carry in your pocket.
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

      {/* Microphone Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="opal-container">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Out of sight? Out of Mic.
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            A first on any consumer device, our directional VisiMic microphone captures only what the camera can see. By allowing sound waves to pass through a sonic tunnel inside the device, any sound outside the camera's field of view is not recorded. No noise filtering, just physics.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-opal-yellow text-opal-dark">
        <div className="opal-container text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Opal Tadpole.</h2>
          <h3 className="text-2xl md:text-3xl font-light mb-6">Take one home today.</h3>
          <p className="mb-8 text-lg">Get your Tadpole for $129.</p>
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
