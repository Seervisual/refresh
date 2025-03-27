import React from 'react';
import Hero from '@/components/home/Hero';
import ProductShowcase from '@/components/home/ProductShowcase';
import BrandPromo from '@/components/home/BrandPromo';
import ProductPromo from '@/components/home/ProductPromo';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductShowcase />
      <ProductPromo />
      <BrandPromo />
    </div>
  );
}
