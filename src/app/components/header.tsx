"use client"
import React, {useState} from 'react'

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  function handleMenu(){
    setIsMenuVisible(!isMenuVisible);
  }
  return (
      <header>
        <div className='fixed top-0 bg-slate-50 flex justify-between p-[14px] pr-[400px] xs:hidden md:flex'>
          <h1 className='font-semibold '>eCommerce</h1>
          <nav className='fixed top-0 right-0 flex gap-16 cursor-pointer p-[10px] bg-slate-50'>
            <div className='group'>
              <h3 className='relative group-hover:font-semibold'>Start</h3>
              <ul className='absolute hidden group-hover:block py-[5px] pr-[10px] bg-slate-50 p-[10px]'>
                <li className='my-[10px]'>eCommerce Websites</li>
                <li className='my-[10px]'>Online Store</li>
                <li className='my-[10px]'>eCommerce Tempelates</li>
                <li className='my-[10px]'>Migrate</li>
              </ul>
            </div>
            <div className='group'>
              <h3 className='relative group-hover:font-semibold'>Sell</h3>
              <ul className='absolute hidden group-hover:block py-[5px] pr-[10px] bg-slate-50 p-[10px]'>
                <li className='my-[10px]'>Sell on wix</li>
                <li className='my-[10px]'>Dropshipping</li>
                <li className='my-[10px]'>Print On Demand</li>
                <li className='my-[10px]'>Sales Channels</li>
                <li className='my-[10px]'>Sell Internationally</li>
                <li className='my-[10px]'>Wix POS</li>
              </ul>
            </div>
            <div className='group'>
              <h3 className='relative group-hover:font-semibold'>Manage</h3>
              <ul className='absolute hidden group-hover:block py-[5px] pr-[10px] bg-slate-50 p-[10px]'>
                <li className='my-[10px]'>Manage Your Store</li>
                <li className='my-[10px]'>eCommerce Features</li>
                <li className='my-[10px]'>eCommerce Marketing</li>
                <li className='my-[10px]'>Buy Now, Pay Later</li>
              </ul>
            </div>
            <div className='group'>
              <h3 className='relative group-hover:font-semibold'>Learn</h3>
              <ul className='absolute hidden group-hover:block py-[5px] pr-[10px] bg-slate-50 p-[10px]'>
                <li className='my-[10px]'>eCommerce Blog</li>
                <li className='my-[10px]'>Learn eCommerce</li>
                <li className='my-[10px]'>Support</li>
              </ul>
            </div>
            <div className='hover:font-semibold'>pricing</div>
            <div>
              <button className='bg-blue-600 hover:bg-blue-500 py-[6px] px-[20px] rounded-full text-sm text-white '>Create Your Store</button>
            </div>
          </nav>
        </div>
        <div className='md:hidden'>
          <div className='flex justify-between'>
            <h3 className='fixed bg-slate-50 p-[10px] pr-[80%] font-bold text-xl '>eCommerce</h3>
            <img src="\svgs\hamburger-menu-svgrepo-com.svg" className='fixed right-0 p-[10px] bg-slate-50 w-[60px] h-[47px]' onClick={handleMenu}/>
          </div>  
          {isMenuVisible && (
            <div className='fixed inset-x-0 bg-slate-400'>
              <div className='flex justify-between'>
                <h3 className='font-bold p-[15px] text-xl'>eCommerce</h3>
                <img src="\svgs\cross-svgrepo-com.svg" className='w-[60px] h-[40px]' onClick={handleMenu}/>
              </div>
              <div className='relative py-[3%] pl-[3%]'>
                <div className='group'>
                  <h3 className='relative font-semibold text-lg'>Start</h3>
                  <ul className='hidden group-hover:block p-[5px]'>
                    <li className='my-[10px]'>eCommerce Websites</li>
                    <li className='my-[10px]'>Online Store</li>
                    <li className='my-[10px]'>eCommerce Tempelates</li>
                    <li className='my-[10px]'>Migrate</li>
                  </ul>
                </div>
              <div className='group mt-[10px]'>
                <h3 className='relative font-semibold text-lg'>Sell</h3>
                <ul className='hidden group-hover:block p-[5px]'>
                  <li className='my-[10px]'>Sell on wix</li>
                  <li className='my-[10px]'>Dropshipping</li>
                  <li className='my-[10px]'>Print On Demand</li>
                  <li className='my-[10px]'>Sales Channels</li>
                  <li className='my-[10px]'>Sell Internationally</li>
                  <li className='my-[10px]'>Wix POS</li>
                </ul>
              </div>
              <div className='group mt-[10px]'>
                <h3 className='relative font-semibold text-lg'>Manage</h3>
                <ul className='hidden group-hover:block p-[5px]'>
                  <li className='my-[10px]'>Manage Your Store</li>
                  <li className='my-[10px]'>eCommerce Features</li>
                  <li className='my-[10px]'>eCommerce Marketing</li>
                  <li className='my-[10px]'>Buy Now, Pay Later</li>
                </ul>
              </div>
              <div className='group mt-[10px]'>
                <h3 className='relative font-semibold text-lg'>Learn</h3>
                <ul className='hidden group-hover:block p-[5px]'>
                  <li className='my-[10px]'>eCommerce Blog</li>
                  <li className='my-[10px]'>Learn eCommerce</li>
                  <li className='my-[10px]'>Support</li>
                </ul>
              </div>
              <div className='mt-[10px] font-semibold text-lg'>pricing</div>
              </div>
            </div>
          )}
        </div>
      </header>
  )
}

export default Header;