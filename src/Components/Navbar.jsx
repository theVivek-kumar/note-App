import React from 'react'

function Navbar() {
  return (
    
        
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-yellow-500">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="#" class="flex items-center">
      <span class="self-center text-xl ml-10 font-semibold whitespace-nowrap dark:text-white">Note-App</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white-700 hover:text-white bg-orange-200 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mr-10">Get started</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  
  </div>
</nav>

    
  )
}

export default Navbar