import AdditionalService from "../../widgets/AdditionalService/AdditionalService";
import BasicServiceCost from "../../widgets/BasicServiceCost/BasicServiceCost";
import CompaniesSlider from "../../widgets/CompaniesSlider/CompaniesSlider";
import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import TopHeader from "../../widgets/TopHeader/TopHeader";
import WorkshopHeroSection from "../../widgets/WorkshopHeroSection/WorkshopHeroSection";

const BicycleWorkshop = () => {
    return (
        <div>
            <TopHeader />
            <WorkshopHeroSection />
            <BasicServiceCost />
            <AdditionalService />
            <CompaniesSlider />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default BicycleWorkshop;