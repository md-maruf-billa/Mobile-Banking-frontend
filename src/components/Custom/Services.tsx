import Link from 'next/link';
import React from 'react';
import { MdOutlineSendToMobile } from 'react-icons/md';
import { SlPresent } from 'react-icons/sl';

const Services = () => {
      return (
            <div className='mt-8 px-4 md:px-16 '>
                  <h2 className='text-xl font-semibold'>Our Services</h2>

                  <div className='flex gap-10 items-center  mt-8'>
                        <Link href="/send-money" className='flex flex-col justify-center items-center gap-2 border rounded-full size-24'>
                              <SlPresent className='text-2xl md:text-4xl' />
                              <span className='text-sm text-gray-600'>Send Mony</span>
                        </Link>


                        <Link href="/cash-out" className='flex flex-col justify-center items-center gap-2 border rounded-full size-24'>
                              <MdOutlineSendToMobile className='text-2xl md:text-4xl' />
                              <span className='text-sm text-gray-600'>Cash Out</span>
                        </Link>

                  </div>

            </div>
      );
};

export default Services;