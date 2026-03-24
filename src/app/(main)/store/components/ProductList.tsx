"use client";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Website Landing Page",
    price: 199,
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    name: "Portfolio Template",
    price: 99,
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    name: "E-commerce UI Kit",
    price: 149,
    image: "https://picsum.photos/400/300?random=3",
  },
];

export default function ProductList() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        Cửa hàng
      </h1>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative">
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
              {/* eslint-disable @next/next/no-img-element */}
              {/* Price Badge */}
              <span className="absolute top-3 right-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                ${product.price}
              </span>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col h-full">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
                High-quality digital product to speed up your workflow.
              </p>

              <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-xl font-medium shadow hover:opacity-90 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
