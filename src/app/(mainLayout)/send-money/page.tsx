import SendMoneyForm from '@/components/Custom/SendMoneyForm';
import { getLogeduser } from '@/serverActions';
import React from 'react';

const SendMoneypage = async () => {
      const user = await getLogeduser();
      return (
            <div className='h-full flex justify-center items-center'>
                  <SendMoneyForm user={user} />
            </div>
      );
};

export default SendMoneypage;