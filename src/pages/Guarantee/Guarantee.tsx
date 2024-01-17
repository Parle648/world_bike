import CompaniesSlider from "../../widgets/CompaniesSlider/CompaniesSlider";
import Footer from "../../widgets/Footer/Footer";
import GuaranteeHeroSection from "../../widgets/GuaranteeHeroSection/GuaranteeHeroSection";
import GuaranteeMainSection from "../../widgets/GuaranteeMainSection/GuaranteeMainSection";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const Guarantee = () => {
    return (
        <div>
            <TopHeader />
            <GuaranteeHeroSection />
            <GuaranteeMainSection />
            <CompaniesSlider />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Guarantee;