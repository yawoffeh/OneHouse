import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import itemsData from '../components/data/items.json';

const MarketPlace = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    return (
        <div className="my-5 px-4 min-h-screen">
            <h1 className="text-4xl font-semibold my-12">🛒 Welcome to the OnHouse Marketplace</h1>
            <h2 className='text-2xl font-normal my-2'>Shop Your Everyday Essentials!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {itemsData.map((item) => (
                    <ItemCard key={item.id} item={item} onAddToCart={addToCart} />
                ))}
            </div>

            {/* Display Cart */}
            {/* <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Cart</h2>
                {cart.length > 0 ? (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.price / 1e18} ETH
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div> */}
        </div>
    );
};

export default MarketPlace;
