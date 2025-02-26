import { TransactionTable } from '@/components/Custom/TransactionTable';
import { getAllTransactionForAdmin, getMyTransaction } from '@/serverActions';
import React from 'react';

const AdminTransactionPage = async () => {
      const data = await getAllTransactionForAdmin();
      console.log(data)
      const tableData = data?.map((dt: any) => ({
            profile: dt.reciverId.name,
            type: dt.payType,
            trxId: dt._id,
            time: dt.createdAt,
            amout: dt.amount
      }))
      return (
            <div className='px-4 mt-4'>
                  <h2>Transaction History-</h2>
                  <TransactionTable tableData={tableData} />
            </div>
      );
};

export default AdminTransactionPage;