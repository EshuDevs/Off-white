import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context';

function ProductDetails(props) {
    const { product } = props
    const productName = product.name.replace(/OFF-WHITE x NIKE /i, '');
    const { addToCart } = useContext(ShopContext)
  return (
<section className="text-gray-700 mt-20 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto border border-gray-100 rounded-lg flex flex-wrap">
      <img alt={product.name} className="lg:w-1/2 w-full object-cover md:object-fill lg:object-cover object-center rounded border bg-gray-200" src={product.image}/>
      <div className="lg:w-1/2 pr-4 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">OFF-WHITE X NIKE</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productName}</h1>
        
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          <div className="flex items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
              {product.size.map((size, index) => (
                <option key={index}>{size}</option>
              ))}
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex pr-4">
          <span className="title-font font-medium text-2xl text-gray-900">{product.price}</span>
          <button onClick={() => addToCart(product.id)} className="ml-auto rounded-lg p-1.5 mb-6 border bg-blue-500 text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ProductDetails