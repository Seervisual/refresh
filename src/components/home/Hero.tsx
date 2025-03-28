import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative w-full bg-opal-dark text-white">
      <div className="w-full h-screen min-h-[640px] overflow-hidden relative">
        {/* Background Image - Using div with background image for static site compatibility */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/forma_website_reformed_hero.jpg)' }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="opal-container">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-light">
                Designed to outperform<br />
                
              </h1>
              <div className="mt-8">
                <Link
                  href="/opal-tadpole"
                  className="inline-block bg-opal-yellow text-opal-dark font-medium px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
                >
                  presale on now $200 <strong>(71 left)</strong>.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
