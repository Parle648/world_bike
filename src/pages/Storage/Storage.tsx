import CompaniesSlider from "../../widgets/CompaniesSlider/CompaniesSlider";
import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import StorageHeroSection from "../../widgets/StorageHeroSection/StorageHeroSection";
import StorageMainSection from "../../widgets/StorageMainSection/StorageMainSection";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const Storage = () => {
    return (
        <div>
            <TopHeader />
            <StorageHeroSection />
            <StorageMainSection />
            <CompaniesSlider />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Storage;