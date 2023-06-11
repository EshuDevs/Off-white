import React,{ Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ShopContext } from '../context/shop-context';
import SidebarItem from './sidebar-item'





export default function Sidebar(props) {

  const { open, setOpen, products } = props;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 ml-8 mr-8 flex pr-2 pt-5 sm:-ml-10 sm:pl-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-500 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <div>X</div>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        Panel title
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {products.map((product) => {
                        const cartItemAmount = cartItems[product.id]
                        let totalItemPrice = (parseFloat(product.price) * cartItemAmount).toFixed(2)
                        if (cartItems[product.id] !== 0 ){
                          return (
                          <div>
                          <div className='flex gap-5 mb-3 overflow-hidden'>
                              <img src={product.image} className='w-1/5 mt-2'/>
                              <div className='mt-4'>
                                {product.name}
                              </div>
                              <div className='flex gap-4 text-center'>
                                <div className='my-auto'>{cartItemAmount}</div>
                                <div className='my-auto'>
                                  <button onClick={() => addToCart(product.id)} className=' border border-gray-500 py-0.1 px-1'>+</button>
                                  <button onClick={() => removeFromCart(product.id)} className=' border border-gray-500 py-0.1 px-1.5'>-</button>
                                  </div>
                              </div> 
                            </div>
                            <div className='ml-2'>
                              {totalItemPrice}$
                            </div>
                          </div>
                        )}
                      }
                    )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}