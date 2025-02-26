import Link from 'next/link';
import { FaUser, FaUserShield } from "react-icons/fa";
const AdminHome = () => {
      return (
            <div className='mt-8 px-4 md:px-16 '>
                  <h2 className='text-xl font-semibold'>Admin services</h2>
                  <div className="flex items-center gap-8">
                        <div className='flex gap-10 items-center  mt-8'>
                              <Link href="/users" className='flex flex-col justify-center items-center gap-2 border rounded-full size-24'>
                                    <FaUser className='text-2xl md:text-3xl' />
                                    <span className='text-sm text-gray-600'>User's</span>
                              </Link>
                        </div>
                        <div className='flex gap-10 items-center  mt-8'>
                              <Link href="/agents" className='flex flex-col justify-center items-center gap-2 border rounded-full size-24'>
                                    <FaUserShield className='text-2xl md:text-3xl' />
                                    <span className='text-sm text-gray-600'>Agent's</span>
                              </Link>
                        </div>
                  </div>

            </div>
      );
};

export default AdminHome;