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
                the forma DUE
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8">
                A pocket sized powerhouse.
              </h2>
              <p className="text-lg mb-8">
                The forma DUE (doo-eh) is redefining the way we train. Evolutionising the existing finger training method to give you measurable progress. No guesswork - just data driven gains for climbers in a world where time is of the essence. <br /><br />Train smarter to climb harder.
              </p>
              <Link
                href="/shop/opal-c1"
                className="inline-block bg-opal-yellow text-opal-dark font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Presale available for half price - $200 <strong>(70 left).</strong>
              </Link>
            </div>
            <div className="relative aspect-square">
              <img
                src="/images/formaDUE_website_01.png"
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
          All the training you need, in the palm of your hand.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Outer space quality</h3>
              <p className="text-gray-300">
              Milled from a solid block of aluminium and bluetooth enabled, we created the next gen training tool that fits in your pocket!
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">20mm True Edge</h3>
              <p className="text-gray-300">
                Adjusted for angle tilt, our custom 20mm edge will give you accurate and consistent pulling.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Community App</h3>
              <p className="text-gray-300">
                With our inhouse built training app, join the next generation of crushers and track your progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Construction section */}
      <section className="py-16 bg-opal-light text-opal-dark">
        <div className="opal-container">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Outer space construction.
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
          Sandblasted and anodised aluminium keeps your fingers cool to the touch for consistent performance. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-medium mb-4">Space age design</h3>
              <p className="text-lg mb-6">
                Sculpted from a single block and made from the same components as satellites, we married outer space durability with a gorgeous look that fits in your pocket.
              </p>
              <h3 className="text-2xl font-medium mb-4">20mm True Edge</h3>
              <p className="text-lg">
              Training on our 20mm edge is the quickest way to accelerate and maintain climbing gains as well as being tilt corrected ours (first on the market) allowing consistent level pulling.
              </p>
              <br />
              <h3 className="text-2xl font-medium mb-4">Premium surfacing</h3>
              <p className="text-lg">
                The sandblasted finish is not only aesthetically pleasing but also provides a durable surface that helps prevent dry/wet firing and maintaining a consistent pull surface.
              </p>
            </div>
            <div className="relative aspect-square">
            <img
                src="/images/due_edge.jpg"
                alt="app in hand"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="opal-container">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
        Data driven training.
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
          The DUE is powered by our in house built, integrated iOS/Android mobile app. Track - real time, with historical data to improve your workouts the more you session. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <img
                src="/images/data.jpg"
                alt="Opal Composer Software"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8">
           
              </h2>
              <p className="text-lg mb-8">
       
              Offline support is available for training in remote areas or on extended holidays where internet is not available.
              <br />
              <br />
              A training planner and industry level exercises will be included with future plans of exporting raw data reports for customers and/or Exercise Physiologists (EPs).
              </p>
             
              <br />
              <h2 className="text-3xl md:text-4xl font-light mb-8">
              Free lifelong subscription.
              </h2>
              <p className="text-lg mb-8">
              That's right. 
              <br />
              <br />
              Lifelong free subscription as a thankyou to our first 100 DUE supporters for unlimited data storage and access to advanced training programs (70 left).
              </p>
              
              <Link
                href="/opal-composer"
                className="inline-block bg-opal-yellow text-opal-dark font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                
                Learn more about the App
              </Link>
            </div>
          </div>
        </div>
      </section>

        {/* Loadcell section */}
        <section className="py-16 bg-opal-light text-opal-dark">
        <div className="opal-container">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Inbuilt bluetooth Loadcell.
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            We've included our local climbing community with our vision to build a solution from the ground up to empower future climbing training.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-medium mb-4">Premium Materials</h3>
              <p className="text-lg mb-6">
                Sculpted from a single block of space grade aluminium, we brought future durability and aesethics into the present.
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

      {/* CTA Section */}
      <section className="py-16 bg-opal-yellow text-opal-dark">
        <div className="opal-container text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">DUE</h2>
          <h3 className="text-2xl md:text-3xl font-light mb-6">Evolutionise your finger training</h3>
          <p className="mb-8 text-lg">Join now for $200 (70 left).</p>
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
