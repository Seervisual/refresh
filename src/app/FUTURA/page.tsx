import React from 'react';
import Link from 'next/link';

export default function ComposerPage() {
  return (
    <div className="bg-opal-dark text-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="opal-container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Composer
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8">
              The magic behind the camera
            </h2>
            <p className="text-lg mb-8">
              Your webcam needs a sidekick. Composer is the only place to amplify your Opal Cameras. Customize your video, tune your picture, become a better speaker, even cause a little mischief. Let's dive in.
            </p>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
            <img
              src="/images/composer.png"
              alt="Opal Composer Software"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="opal-container">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
            Pro tools.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-medium mb-6">Total image control</h3>
              <p className="text-lg text-gray-300 mb-6">
                Professional grade controls let you adjust your image quality down to the finest detail.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-opal-yellow mr-2">•</span>
                  <span>See over and under exposed areas with Zebra lines and histogram</span>
                </li>
                <li className="flex items-start">
                  <span className="text-opal-yellow mr-2">•</span>
                  <span>Adjust lighting, white balance, and exposure with precision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-opal-yellow mr-2">•</span>
                  <span>Fine-tune colors with hue, saturation, and brightness controls</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg aspect-video"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-gray-900 rounded-lg aspect-video order-2 md:order-1"></div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-medium mb-6">Small and Big Preview</h3>
              <p className="text-lg text-gray-300 mb-6">
                See yourself as big or small as you need with our menu bar app. Perfect for keeping an eye on your video during presentations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="opal-container">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-center">
            Personalization.
          </h2>
          <h3 className="text-xl md:text-2xl font-light mb-16 text-center">
            From ordinary to extraordinary calls.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-medium mb-6">Stickers from front to back</h3>
              <p className="text-lg text-gray-300 mb-6">
                Customize your video with images, frames, copy, and dynamic widgets. Add text, timers, and more to create the perfect setup.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg aspect-video"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-gray-900 rounded-lg aspect-video order-2 md:order-1"></div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-medium mb-6">Backgrounds</h3>
              <p className="text-lg text-gray-300 mb-6">
                Customize your background using our advanced segmentation models. Perfect for hiding a messy room or creating a professional environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-black">
        <div className="opal-container">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-center">
            On call.
          </h2>
          <h3 className="text-xl md:text-2xl font-light mb-16 text-center">
            Tools for every occasion.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Loops</h3>
              <p className="text-gray-300">
                Record, perform, and repeat. And repeat. Create short video loops for those moments when you need a break.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Timer</h3>
              <p className="text-gray-300">
                Keep your meetings structured with our onscreen timer. Perfect for presentations and timed discussions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-4">Video Recording</h3>
              <p className="text-gray-300">
                Record video from your Opal C1 and desktop at the same time. Capture presentations, tutorials, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-opal-yellow text-opal-dark">
        <div className="opal-container text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Your download is waiting.</h2>
          <p className="text-lg mb-8">Requires MacOS Monterey 12.3 or later.</p>
          <Link
            href="/opal-composer/download"
            className="inline-block bg-opal-dark text-white font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Download
          </Link>
        </div>
      </section>
    </div>
  );
}
