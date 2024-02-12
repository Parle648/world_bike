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
            <InteractiveMap />
            <ContactsMapDescription />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Main;