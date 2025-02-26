import CashOutForm from '@/components/Custom/CashoutForm';
import { getLogeduser } from '@/serverActions';
import React from 'react';

const CashOutPage = async () => {
      const user = await getLogeduser()
      return (
            <div className='flex items-center justify-center'>
                  <CashOutForm user={user} />
            </div>
      );
};

export default CashOutPage;