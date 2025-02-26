"use client"
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { GoHome } from "react-icons/go";
import Link from 'next/link';
import { getLogeduser, logOutUser } from "@/serverActions";
import { toast } from "sonner";
import { useEffect, useState } from "react";
const AppFooter = () => {
      const [user, setUser] = useState<any>();
      useEffect(() => {
            const fetchData = async () => {
                  const res = await getLogeduser()
                  setUser(res)
            }
            fetchData()
      }, [])
      const handleLogOut = async () => {
            const res = await logOutUser();
            if (res) {
                  toast.success("Logout Successfull..")
            } else {
                  toast.error("Logout faild..!!")
            }

      }
      return (
            <div className='flex justify-between items-center px-16 bg-[#ffb500] shadow-lg text-white py-5 rounded-t-xl '>
                  <Link href="/home" className='flex flex-col items-center'>
                        <GoHome className='text-5xl' />
                        <span className='text-sm'>Home</span>
                  </Link>


                  <Link href={user?.role == "user" ? "/user-transaction" : user?.role == "agent" ? "/agent-transaction" : user?.role == "admin" ? "/admin-transaction" : ""} className='flex flex-col items-center'>
                        <MdOutlineMail className='text-5xl' />
                        <span className=' text-sm'>Transactions</span>
                  </Link>


                  <button onClick={handleLogOut} className='flex flex-col items-center'>
                        <RiLogoutBoxRLine className='text-5xl' />
                        <span className=' text-sm'>LogOut</span>
                  </button>


            </div>
      );
};

export default AppFooter;