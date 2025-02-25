import React from 'react';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { GoHome } from "react-icons/go";
import Link from 'next/link';
const AppFooter = () => {


      return (
            <div className='flex justify-between items-center px-16 bg-[#ffb500] shadow-lg text-white py-5 rounded-t-xl '>
                  <Link href="/home" className='flex flex-col items-center'>
                        <GoHome className='text-5xl' />
                        <span className='text-sm'>Home</span>
                  </Link>


                  <Link href="/transaction" className='flex flex-col items-center'>
                        <MdOutlineMail className='text-5xl' />
                        <span className=' text-sm'>Transactions</span>
                  </Link>


                  <button className='flex flex-col items-center'>
                        <RiLogoutBoxRLine className='text-5xl' />
                        <span className=' text-sm'>LogOut</span>
                  </button>


            </div>
      );
};

export default AppFooter;