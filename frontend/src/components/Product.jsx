import React from 'react';
import list from "../../public/list.json";
import Card from './Card';

function ProductPage() {
  const filterData = list.filter((data) => data.category === "Electronics");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

