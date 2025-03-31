import React from 'react';
import Link from 'next/link';

const ProductCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  link
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="block bg-white p-6 rounded-lg hover:shadow-lg transition duration-300 text-center border border-gray-100"
    >
      <div className="aspect-square relative mb-6">
        {/* Using regular img tag instead of Next.js Image component for static export */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain p-4"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-opal-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-opal-light">
      <div className="opal-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            title="UNO"
            description="a traditional pull, modernised"
            imageSrc="/images/formaUNO_website_01.png"
            imageAlt="Opal Tadpole Webcam"
            link="/UNO"
          />
          <ProductCard
            title="DUE"
            description="an evolution of climbing training"
            imageSrc="/images/formaDUE_website_01.png"
            imageAlt="Opal C1 Professional Webcam"
            link="/DUE_presale"
          />
          <ProductCard
            title="FUTURA"
            description="a reminder to stay in the present"
            imageSrc="/images/futura_website.png"
            imageAlt="Opal Composer Software"
            link="/FUTURA"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
