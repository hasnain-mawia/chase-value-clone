import React from 'react'
import { FaPhoneAlt, FaEnvelope,FaRegHeart,FaShoppingCart,FaSearch,FaChevronDown} from "react-icons/fa";

function Header() {
  return (
    <>
    {/* ---------------------- Top Bar [Start] -------------------- */}
    <div className='bg-[#10658B]'>
      <div className='max-w-[1550px] mx-auto grid grid-cols-1 sm:grid-cols-2 relative'>
        <div className='text-white flex gap-4'>
          <a className='flex items-center gap-2 py-4 text-[14px]' href="tel:021111124273"><FaPhoneAlt/> (021) 11-11-CHASE (24273)</a>
          <a className='flex items-center gap-2 py-4 text-[14px]' href="mailto:customercare@chasevalue.pk"><FaEnvelope />customercare@chasevalue.pk</a>
        </div>
        <div className='text-white flex justify-end gap-4'>
          <a className='flex items-center gap-2' href="">My Account <FaRegHeart/></a>
          <button onClick={()=> window.history.back()} className='flex items-center gap-2 bg-[#FC8B09] py-4 px-3 text-black'><FaShoppingCart/>Cart:0</button>
        </div>
      </div>
    </div>
    {/* ---------------------- Top Bar [End] -------------------- */}
    <div className='max-w-[1550px] mx-auto'>
    <div className=' grid grid-cols-1 sm:grid-cols-3 my-4'>
      <div><img className='w-[180px]' src={require('../assets/images/logo.png')} alt="" /></div>
      <div className='flex items-center'>
        <input type="text" className='bg-[#ebebeb] w-full p-3 focus:outline-none' placeholder='Search by product name'/>
        <button className='bg-[#10658B] p-4 hover:bg-[#FC8B09] duration-150'><FaSearch className='text-white'/></button>
      </div>
      <div>
        <h2 className='text-[#10658B] flex text-[30px] items-center justify-end gap-2 font-semibold'> Wholesale <span className='text-[#FC8B09]'> Prices </span> Rozana</h2>
      </div>
    </div>

      <div className='flex gap-[40px] text-[17px] my-5 text-[#424242] w-full sticky right-0 top-0 h-[70px]'>
        <a className='flex items-center gap-2 hover:text-[#10658B]' href="">Women <FaChevronDown className='text-[12px]'/></a>
        <a className='flex items-center gap-2 hover:text-[#10658B]' href="">Men <FaChevronDown className='text-[12px]'/></a>
        <a className='flex items-center gap-2 hover:text-[#10658B]' href="">Kids <FaChevronDown className='text-[12px]'/></a>
        <a className='flex items-center gap-2 hover:text-[#10658B]' href="">Footware <FaChevronDown className='text-[12px]'/></a>
        <a className='flex items-center gap-2 hover:text-[#10658B]' href="">Home & LifeStyle <FaChevronDown className='text-[12px]'/></a>
        <a className='flex items-center gap-2 hover:text-[#10658B]' href="">Beauty & Personal Care <FaChevronDown className='text-[12px]'/></a>
        <a className='flex items-center gap-2 hover:text-[#10658B]' href="">Summer Collection <FaChevronDown className='text-[12px]'/></a>
        <a className='flex items-center' href="">Pacakegs & Bundles</a>
        <a className='flex items-center' href="">Offer of the Week</a>
      </div>
    </div>

    </>
  

  )
}

export default Header
