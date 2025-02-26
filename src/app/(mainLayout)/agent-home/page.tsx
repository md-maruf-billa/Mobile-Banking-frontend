import Link from 'next/link';
import React from 'react';
import { MdAddCard } from 'react-icons/md';

const AgentHomePage = () => {
      return (
            <div className="px-4">
                  <h2 className="my-8">Agent Services</h2>

                  <Link href="/cash-in" className='flex flex-col justify-center items-center gap-2 border rounded-full size-24'>
                        <MdAddCard className='text-2xl md:text-4xl' />
                        <span className='text-sm text-gray-600'>Cash In</span>
                  </Link>
            </div>
      );
};

export default AgentHomePage;