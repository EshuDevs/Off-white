import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../components/products';
import Navbar from '../components/NavbarTwo'
import Sidebar from '../components/Sidebar'
import ProductDetails from '../components/ProductDetails';

function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((item) => item.id == id);
  const[open, setOpen] = useState(false)

  return (
    <>
      <div>
        {product !== undefined ? (
          <ProductDetails product={product} />
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </>
  );
}

export default ProductPage;
