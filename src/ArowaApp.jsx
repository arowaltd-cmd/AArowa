import React, { useState } from "react";

// Sample products
const sampleProducts = [
  {
    id: 1,
    title: "Rolex Submariner Date 126610LN",
    brand: "Rolex",
    price: 160,
    condition: "Certified Pre-Owned",
    img: "https://www.rolex.com/content/dam/rolex-com/new-watches/2020/new-submariner/new-submariner-date/m126610ln-0001/rolex-submariner-date-m126610ln-0001.jpg",
    desc: "The iconic 41mm Rolex Submariner Date in Oystersteel with black Cerachrom bezel and Oyster bracelet. Waterproof to 300 meters, COSC-certified automatic movement.",
  },
  {
    id: 2,
    title: "Audemars Piguet Royal Oak 15510ST",
    brand: "Audemars Piguet",
    price: 160,
    condition: "Certified Pre-Owned",
    img: "https://www.audemarspiguet.com/content/dam/ap/com/models/15510ST.OO.1320ST.01/15510ST.OO.1320ST.01-mov.jpg",
    desc: "41mm Royal Oak in stainless steel, iconic Grande Tapisserie dial in blue, integrated bracelet, automatic movement with date function.",
  },
];

export default function ArowaApp() {
  const [products] = useState(sampleProducts);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b p-4 font-bold text-xl">Arowa</header>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Latest Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((p) => (
            <article key={p.id} className="bg-white rounded-2xl shadow p-4">
              <img src={p.img} alt={p.title} className="rounded-md h-48 w-full object-cover"/>
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.brand}</p>
              <p className="text-sm mt-2">{p.desc}</p>
              <div className="mt-2 font-bold">£{p.price}</div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
