import { TransactionTable } from "@/components/Custom/TransactionTable";
import { getMyTransaction } from "@/serverActions";

const page = async () => {
      const data = await getMyTransaction();
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

export default page;