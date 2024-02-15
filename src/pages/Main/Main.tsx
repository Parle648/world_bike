import QuickBuySnippet from "../../entities/QuickBuySnippet/QuickBuySnippet";
import CompaniesSlider from "../../widgets/CompaniesSlider/CompaniesSlider";
import ContactsMapDescription from "../../widgets/ContactMapDescription/ContactsMapDescription";
import Footer from "../../widgets/Footer/Footer";
import InteractiveMap from "../../widgets/InteractiveMap/InteractiveMap";
import Benefits from "../../widgets/MainPage/Benefits/Benefits";
import BestBikesSlider from "../../widgets/MainPage/BestBikesSlider/BestBikesSlider";
import BestMountainBike from "../../widgets/MainPage/BestMountainBike/BestMountainBike";
import CatalogSection from "../../widgets/MainPage/CatalogSection/CatalogSection";
import MainHeroSection from "../../widgets/MainPage/MainHerosection/MainHeroSection";
import NewBikes from "../../widgets/MainPage/NewBikes/NewBikes";
import YouUnstopable from "../../widgets/MainPage/YouUnstopable/YouUnstopable";
import Newsletter from "../../widgets/Newsletter/Newsletter";

import bicycle from '../../imgs/bike-img.png';
import QuickOrderForm from "../../features/QuickOrderForm/QuickOrderForm";

const Main = () => {
    return (
        <div>
            <MainHeroSection />
            <CompaniesSlider />
            <NewBikes />
            <CatalogSection />
            <YouUnstopable />
            <BestBikesSlider />
            <BestMountainBike />
            <Benefits />
            <NewBikes />
            <InteractiveMap />
            <ContactsMapDescription />
            <Newsletter />
            <Footer />
            <QuickBuySnippet 
                img={bicycle} 
                title="Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018"
                opened={true} >
                    <QuickOrderForm id={1} />            
            </QuickBuySnippet>
        </div>
    );
};

export default Main;