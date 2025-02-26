import Services from '@/components/Custom/Services';
import { getMe } from '@/serverActions';

const HomePage = async () => {
      const user = await getMe()
      console.log(user)
      return (
            <div className=''>

                  <Services />

            </div>
      );
};

export default HomePage;