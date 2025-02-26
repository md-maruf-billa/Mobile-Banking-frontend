import { TransactionTable } from '@/components/Custom/TransactionTable';
import { getAllTransactionForAdmin, getSingleTransaction } from '@/serverActions';
import React from 'react';

const UserDetailsPage = async ({ params }: { params: { userId: string } }) => {
      const prm = await params
      console.log(prm)
      const data = await getSingleTransaction(prm.userId)

      const tableData = data?.map((dt: any) => ({
            profile: dt.reciverId.name,
            type: dt.payType,
            trxId: dt._id,
            time: dt.createdAt,
            amout: dt.amount
      }))
      return (
            <div className='px-4'>
                  {
                        tableData?.length > 0 ?
                              <h2 className='py-4 '>Transaction History of <span className='italic text-yellow-600'> {tableData[0]?.profile}</span></h2>
                              : <h2 className='py-4 text-center'>No History found!</h2>
                  }
                  <TransactionTable tableData={tableData} />
            </div>
      );
};

export default UserDetailsPage;
