import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-opal-dark text-white pt-16 pb-8">
      <div className="opal-container">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800 pb-8 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="font-medium mb-4">products</h3>
            <ul className="space-y-2">
              <li><Link href="/opal-tadpole" className="text-gray-400 hover:text-white transition-colors">uno</Link></li>
              <li><Link href="/opal-c1" className="text-gray-400 hover:text-white transition-colors">due</Link></li>
              <li><Link href="/opal-composer" className="text-gray-400 hover:text-white transition-colors">futura</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">about</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">updates</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors"></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">resources</h3>
            <ul className="space-y-2">
              <li><a href="mailto:support@opalcamera.com" className="text-gray-400 hover:text-white transition-colors"></a></li>
              <li><Link href="/media-kit" className="text-gray-400 hover:text-white transition-colors"></Link></li>
              <li><Link href="/opal-composer/download" className="text-gray-400 hover:text-white transition-colors"></Link></li>
              <li><Link href="/newsletter" className="text-gray-400 hover:text-white transition-colors">newsletter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">socials</h3>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/forma.training/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">instagram</a></li>
             
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-sm text-gray-400">
          <p>forma</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
