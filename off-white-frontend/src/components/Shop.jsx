import React, {useContext} from "react"
import { ShopContext } from "../context/shop-context"
import { Link } from "react-router-dom"

const Shop = (props) => { 
  const { products } = props
  const { addToCart, cartItems } = useContext(ShopContext)


    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl mb-10 border-b-2 w-1/12 font-kanit italic font-semibold">Shoes</h2>
  
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
              const cartItemAmount = cartItems[product.id];
              return(
              <a key={product.id} className="group border border-gray-200 rounded-lg">
                <Link to="/ProductPage">
                <div className="w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.image}
                    className="h-full w-full object-cover object-center hover:opacity-75"
                  />
                </div>
                </Link>
                <h3 className="mt-12 text-sm text-gray-700 ml-2">{product.name}</h3>
                <p className="mt-1 py-3 mb-6 text-base font-normal ml-2 text-gray-900">{product.price}</p>
                <button onClick={() => addToCart(product.id)} className="ml-2 rounded-lg p-1 mb-6 border  bg-gray-200 text-gray-700">Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
              </a>)
          })}
          </div>
        </div>
      </div>
    )
  }
export default Shop