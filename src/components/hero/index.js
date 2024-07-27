import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
import shopping from "../../assets/Shopping.png"

function Hero() {
  return (

  <>
  <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Belanja
            <br class="hidden lg:inline-block"/>Suku cadang dan Variasi Motor
          </h1>
          <p class="mb-8 leading-relaxed">
            Temukan Variasi motor yang cocok untuk motor anda !!
          </p>
          <div class="flex justify-center">
          <div>
              <button className='flex items-center bg-blue-700 px-8 py-4 font-bold text-white rounded-full text-sm hover:bg-blue-800'>
                <FaShoppingBag className='mr-2' /> Belanja Sekarang
              </button>
            </div>
            {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src={shopping}/>
        </div>
      </div>
    </section>
  </>
  )
}

export default Hero;
