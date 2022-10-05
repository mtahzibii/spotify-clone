import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { logo } from '../assets';
import { links } from '../assets/constants';

const Sidebar = () => {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 return (
  <>
   <div className='md:flex hidden flex-col w-[240px] py-10  px-4 bg-[#191624] text-white'>
    {/* logo */}
    <img className='w-full h-16 object-contain ' src={logo} alt='' />

    {/* Nav Links */}
    <div className='mt-10 text-white flex flex-col gap-4 font-semibold'>
     {links.map((item) => (
      <NavLink
       key={item.name}
       to={item.to}
       //  onClick={() => handleClick()}
       className='flex flex-row text-white p-1 justify-start items-center hover:text-cyan-400 hover:font-bold'
      >
       <item.icon className='w-6 h-6 mr-2' />
       {item.name}
      </NavLink>
     ))}
     <p>hello</p>
     {/* Mobile Menus */}
     <div className='fixed md:hidden block top-6 right-6 text-white'>
      <p>hello</p>
      {mobileMenuOpen ? (
       <p className='text-white'>hello</p>
      ) : (
       <p className='text-white'>hello</p>
      )}
      {/* <HiOutlineMenu className='mr-6 w-6 h-6 text-white' /> */}
     </div>
    </div>
   </div>
  </>
 );
};

export default Sidebar;
