import React, { useState } from "react";

// Sample products
const sampleProducts = [ {
  id: 5,
  title: "Rolex Sky-Dweller Black Dial",
  brand: "Rolex",
  price: 160,
  condition: "Certified Pre-Owned",
  img: "https://content.rolex.com/dam/2023/upright-bba-with-shadow/m326238-0009.png?impolicy=v6-upright&imwidth=270",
  desc: "42mm Oyster case in yellow gold, black dial, Oysterflex bracelet. Annual calendar and dual time zone functionality. Includes Arowa 12-month warranty and full authentication papers.",
},
{
  id: 6,
  title: "Cartier Santos Diamond Set",
  brand: "Cartier",
  price: 160,
  condition: "Like New",
  img: "https://cdn2.chrono24.com/images/uhren/29165689-0d6s3jqgmb9n0m6gl2nz2i9t-Square360.jpg",
  desc: "Elegant Cartier Santos model with diamond-set bezel and stainless steel case. Automatic movement, 39.8mm case size, luxury bracelet. Fully authenticated and comes with Arowa warranty.",
},
{
  id: 7,
  title: "Rolex Datejust Wimbledon Dial Jubilee",
  brand: "Rolex",
  price: 160,
  condition: "Certified Pre-Owned",
  img: "https://content.rolex.com/dam/2023/upright-bba-with-shadow/m126334-0021.png?impolicy=v6-upright&imwidth=270",
  desc: "41mm Oystersteel case, distinctive Wimbledon slate dial with green Roman numerals. Mounted on the iconic Jubilee bracelet. Chronometer-certified movement. Comes with Arowa warranty.",
},

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
