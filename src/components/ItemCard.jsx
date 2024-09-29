import React from 'react';

const ItemCard = ({ item, onAddToCart }) => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-700">Price: {item.price / 1e18} ETH</p>
            <p className="text-gray-700">Stock: {item.stock}</p>
            <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => onAddToCart(item)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ItemCard;
