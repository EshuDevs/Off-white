import React, {useContext} from 'react'
import { ShopContext } from '../context/shop-context'

function SidebarItem(props) {
    
    const { product } = props 
    const { cartItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[product.id]

  return (
    <div>
        <div>
            <div>
              {product.name}
            </div>
            <div>
              {cartItemAmount}
            </div>
          </div>
    </div>
  )
}

export default SidebarItem