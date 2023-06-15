import React, { useState, useContext } from 'react';
import Logo from '../assets/logo.png';
import { PRODUCTS } from './products';
import { ShopContext } from '../context/shop-context';

function Navbar(props) {
  const { open, setOpen, } = props;
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const { cartItems } = useContext(ShopContext)

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  
    if (value.length >= 2) {
      // Filter the products based on the search text
      const filteredProducts = PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
  
      // Modify the product names in the suggestions
      const modifiedSuggestions = filteredProducts.map((product) => {
        const modifiedName = product.name.replace(/OFF-WHITE x NIKE /i, '');
        return { ...product, name: modifiedName };
      });
  
      setSuggestions(modifiedSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const calculateTotalItems = () => {
    let totalItems = 0;

    for (const productId in cartItems) {
      const quantity = cartItems[productId];
      totalItems += quantity;
    }

    return totalItems;
  };

  return (
    <div className="bg-background">
      <nav className="justify-between w-full flex bg-transparent p-5">
        <div>
          <img src={Logo} className="w-24 mt-2 md:w-auto md:m-0 lg:w-1/4" alt="Logo" />
        </div>
        <ul className="list-none align-middle flex gap-5 items-center text-brown font-kanit font-bold text-xl w-auto">
          <li className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-2 w-32 lg:w-[12rem] md:w-auto rounded-2xl"
              value={searchText}
              onChange={handleSearchChange}
            />
            <button className="material-symbols-outlined absolute top-0.5 right-2">search</button>
            {suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white w-100% font-inter rounded-lg shadow-lg py-2">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
          <button onClick={() => setOpen(true)} className="material-symbols-outlined flex text-3xl cursor-pointer relative">
              shopping_bag
              {calculateTotalItems() > 0 && (
                <span className="relative top-5 right-4 font-inter bg-blue-500 font-semibold text-white pt-0.5 rounded-full w-4 h-4 flex justify-center items-center text-xs">
                  {calculateTotalItems()}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;