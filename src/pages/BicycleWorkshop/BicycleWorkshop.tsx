import AdditionalService from "../../widgets/AdditionalService/AdditionalService";
import BasicServiceCost from "../../widgets/BasicServiceCost/BasicServiceCost";
import CompaniesSlider from "../../widgets/CompaniesSlider/CompaniesSlider";
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
        </div>
    );
};

export default BicycleWorkshop;