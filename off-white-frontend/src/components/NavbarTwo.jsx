import React, { useState, useContext } from 'react';
import Logo from '../assets/logo.png';
import { PRODUCTS } from './products';
import { ShopContext } from '../context/shop-context';
import { Link } from "react-router-dom";

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
  const handleSuggestionClick = (suggestion) => {
    // Handle the suggestion click here
    console.log('Clicked suggestion:', suggestion);
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
    <div className="bg-white">
      <nav className="justify-between w-full flex bg-transparent p-5">
        <Link to='/'>
            <div>
                <img src={Logo} className="w-24 mt-2 md:w-auto md:m-0 lg:w-1/4" alt="Logo" />
            </div>
        </Link>
        <ul className="list-none align-middle flex gap-5 items-center text-brown font-kanit font-bold text-xl w-auto">
          <li className="relative border border-200-grey rounded-xl">
            <input
              type="text"
              placeholder="Search"
              className="px-2 w-32 md:w-auto rounded-2xl"
              value={searchText}
              onChange={handleSearchChange}
            />
            <button className="material-symbols-outlined absolute top-0.5 right-2">search</button>
            {suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white w-[12rem] font-inter text-sm md:w-[18rem] md:text-lg lg:w-[20rem] rounded-lg shadow-lg lg:mr-5 py-2">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="px-4 pb-2 gap-2 lg:gap-5 cursor-pointer hover:bg-gray-200 flex items-center"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <img src={suggestion.image} alt={suggestion.name} className=" w-12 md:w-15 md:h-12 lg:w-20 lg:h-[4rem] " />
                    <div className='ml-auto'>
                      <p className='lg:mt-4'>{suggestion.name}</p>
                      <p className="text-gray-500 text-right">${suggestion.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;