import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-opal-dark text-white pt-16 pb-8">
      <div className="opal-container">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800 pb-8 mb-8">
          <h2 className="text-3xl md:text-4xl font-light mb-2">
            Subscribe to the<br />
            Opal Newsletter
          </h2>
          <p className="text-gray-400 mb-6">
            Latest news, musings, announcements and updates direct to your inbox.
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

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/opal-tadpole" className="text-gray-400 hover:text-white transition-colors">Tadpole</Link></li>
              <li><Link href="/opal-c1" className="text-gray-400 hover:text-white transition-colors">Opal C1</Link></li>
              <li><Link href="/opal-composer" className="text-gray-400 hover:text-white transition-colors">Composer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="mailto:support@opalcamera.com" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              <li><Link href="/media-kit" className="text-gray-400 hover:text-white transition-colors">Media Kit</Link></li>
              <li><Link href="/opal-composer/download" className="text-gray-400 hover:text-white transition-colors">Downloads</Link></li>
              <li><Link href="/newsletter" className="text-gray-400 hover:text-white transition-colors">Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/opalcamera/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://twitter.com/opalcamera" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-sm text-gray-400">
          <p>Opal Camera Inc.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
