import CompaniesSlider from "../../widgets/CompaniesSlider/CompaniesSlider";
import DeliveryHeroSection from "../../widgets/DeliveryHeroSection/DeliveryHeroSection";
import DeliveryInform from "../../widgets/DeliveryInform/DeliveryInform";
import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const DeliveryAndPayment = () => {
    return (
        <div>
            <TopHeader />
            <DeliveryHeroSection />
            <DeliveryInform />
            <CompaniesSlider />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default DeliveryAndPayment;