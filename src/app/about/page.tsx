import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-opal-dark text-white py-24">
      <div className="opal-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12">
            Opal was founded in<br />
            2020 with a singular idea.
          </h1>

          <h2 className="text-3xl md:text-4xl font-light mb-8">
            The objects you use most<br />
            often, should be the best<br />
            things you own.
          </h2>

          <div className="text-lg text-gray-300 space-y-6 mb-16">
            <p>
              We believe that if you are surrounded by quality, each day is a bit better.
            </p>
            <p>
              We want to bring more of that into the world. We started with one camera, the Opal C1.
            </p>
            <p>
              Here's to more better days.
            </p>
            <p>
              The Opal team.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-800">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Opal Tadpole.</h2>
            <h3 className="text-2xl md:text-3xl font-light mb-6">Take one home today.</h3>
            <p className="mb-8 text-lg">Get your Tadpole for $129.</p>
            <Link
              href="/shop/opal-tadpole"
              className="inline-block bg-opal-yellow text-opal-dark font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Order now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
