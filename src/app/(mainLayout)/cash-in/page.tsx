import CashInForm from "@/components/Custom/CashInForm";
import { getLogeduser } from "@/serverActions";

const CashInPage = async () => {
      const user = await getLogeduser()
      return (
            <div className="flex justify-center items-center">
                  <CashInForm user={user} />
            </div>
      );
};

export default CashInPage;