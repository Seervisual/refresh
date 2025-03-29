import React from 'react';
import Link from 'next/link';

const ProductPromo = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-opal-yellow to-yellow-400 text-opal-dark">
      <div className="opal-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-2">forma DUE.</h2>
          <h3 className="text-2xl md:text-3xl font-light mb-6">Join the evolution.</h3>
          <p className="mb-8 text-lg">50% off for only the first 100 VIPs. <strong>(71 left)</strong></p>
          <Link
            href="/shop/opal-tadpole"
            className="inline-block bg-opal-dark text-white font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Order now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductPromo;
