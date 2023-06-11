import Jordan from '../assets/jordan.webp'
  


  export default function Hero() {
    return (
      <div className="overflow-hidden bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-flow-row grid-rows-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none md:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
              <div className='py-5'>
                <div className='gap-4 text-center md:text-start'>
                    <p className=' font-barcode text-2xl'>OFF-WHITE X NIKE</p>
                    <h1 className=' font-kanit text-4xl font-extrabold italic lg:text-8xl'>UNITE IN STYLE</h1>
                    <p className='font-inter py-4 lg:py-0'>Push boundaries and <br/>break barriers with <br/> the off-white x nike <br/>collection</p>
                    <h2 className='font-kanit pb-4 border-brown text-3xl font-extrabold italic lg:5xl md:border-b-2 md:w-1/2'>GET</h2>
                    <p className='font-inter py-3 '>OFF-WHITE x NIKE Jordan 4 White Sail <br/> Price 299.99$</p>
                    <button className='bg-brown text-background align-center justify-center p-4 font-inter'>BUY NOW</button>
                </div>
            </div>
              </div>
            </div>
            <img
              src={Jordan}
              alt="Product screenshot"
              className=" hidden w-[16rem] max-w-3xl md:block md:w-[28rem] md:my-auto lg:w-[48rem] "
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    )
  }