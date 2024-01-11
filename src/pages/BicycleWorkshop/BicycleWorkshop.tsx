import BasicServiceCost from "../../widgets/BasicServiceCost/BasicServiceCost";
import TopHeader from "../../widgets/TopHeader/TopHeader";
import WorkshopHeroSection from "../../widgets/WorkshopHeroSection/WorkshopHeroSection";

const BicycleWorkshop = () => {
    return (
        <div>
            <TopHeader />
            <WorkshopHeroSection />
            <BasicServiceCost />
        </div>
    );
};

export default BicycleWorkshop;