import React, { useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgDetailsMore } from "react-icons/cg";
import logo from "../../assets/logo-jfive.svg"
import toogle from "../../assets/toogle.svg"
import { FaWhatsapp } from "react-icons/fa6";


function Navbar () {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [isMobileNavMore, setMobileNavMore] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleClick = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };

    const handleNavMore = () => {
        setMobileNavMore(!isMobileNavMore);
    }

    const handleDropdownClick = () => {
      setDropdownOpen(!isDropdownOpen);
  };


  return (
    <>
    {/* Navigation */}
    <nav className='py-9 px-4 z-10 relative'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between gap-10'>
          <img src={logo} alt='' className='order-1 sm:order-2 w-40'/>
          <img src={toogle} alt='' className='lg:hidden order-2 sm:order-1' onClick={handleToggleClick}/>
          <div className='order-2 hidden lg:block'>
            <ul className='flex gap-16'>
              {/* Belum Login */}
              <li className='text-grey font-bold text-sm'><a href='/'>Beranda</a></li>
              <li className='text-grey font-bold text-sm opacity-50 hover:text-red-800'><a href='/kategori'>Kategori</a></li>
              <li className='text-grey font-bold text-sm opacity-50 hover:text-red-800'><a href='/artikel'>Artikel</a></li>
              <li className='text-grey font-bold text-sm opacity-50 hover:text-red-800'><a href='/promo'>Promo</a></li>
            </ul>
          </div>
          {/* Belum Login */}
          <div className='order-3 hidden sm:block'>
            <div>
              <button className='flex items-center bg-green-700 px-8 py-4 font-bold text-white rounded-full text-sm hover:bg-green-800'>
                <FaWhatsapp className='mr-2' /> Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`z-50 fixed bottom-0 left-0 right-0 bg-white p-4 border lg:hidden ${isMobileNavOpen ? '' : 'hidden'}`}>
        <ul className='flex justify-between'>
          <li>
            <button href='/' className='flex justify-center flex-col items-center gap-1 text-ungu'>
              <IoHomeOutline className='text-grey text-2xl hover:text-purple-500' />
              <span className='text-grey text-base font-bold'>Beranda</span>
            </button>
          </li>
          <li>
            <button href='/kategori' className='flex justify-center flex-col items-center gap-1 text-ungu'>
              <MdOutlineCategory className='text-grey text-2xl opacity-50' />
              <span className='text-grey opacity-50 text-base font-normal hover:text-purple-500'>Kategori</span>
            </button>
          </li>
          <li>
            <button href='/artikel' className='flex justify-center flex-col items-center gap-1 text-ungu'>
              <MdMiscellaneousServices className='text-grey text-2xl opacity-50' />
              <span className='text-grey opacity-50 text-base font-normal hover:text-purple-500'>Artikel</span>
            </button>
          </li>
          <li>
            <button href='' className='flex justify-center flex-col items-center gap-1 text-ungu'>
              <HiOutlineShoppingBag className='text-grey text-2xl opacity-50' />
              <span className='text-grey opacity-50 text-base font-normal hover:text-purple-500'>Promo</span>
            </button>
          </li>
          <li>
            <button href='' className='flex justify-center flex-col items-center gap-1 text-ungu' onClick={handleNavMore}>
              <CgDetailsMore className='text-grey text-2xl opacity-50' />
              <span className='text-grey opacity-50 text-base font-normal hover:text-purple-500'>Lainnya</span>
            </button>
          </li>
        </ul>
        <div className={`absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 w-3/4 border-separate ${isMobileNavMore ? '' : 'hidden'}`}>
          <button className='grow bg-white px-8 py-4 font-bold text-grey rounded-full text-sm hover:text-purple-700'>Login</button>
          <button className='grow bg-purple-600 px-8 py-4 font-bold text-white rounded-full text-sm hover:bg-purple-700'>Sign Up</button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;