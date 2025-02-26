import { UserTable } from '@/components/Custom/UserTable';
import { getAllUser } from '@/serverActions';
import React from 'react';

const AllAgentsPage = async () => {
      const data = await getAllUser()
      const modifiedData = data?.filter((dt: any) => dt.accountType == "user")
      return (
            <div className='px-4 mt-4'>
                  <h2 className='text-2xl'>All Users</h2>
                  <UserTable users={modifiedData} />
            </div>
      );
};

export default AllAgentsPage;