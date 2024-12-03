
import HeroSection from '../Home/Hero/Hero';
import WhoweareSection from '../Home/Who_we_are/Whoweare';
import Latest from './LatestEvents/Latest';
import Vendors from './Vendors/Vendors';


function Home() {
  return (
    <>

      <HeroSection />
      <WhoweareSection />
      <Vendors />
      <Latest/>

    </>
  );
}

export default Home;