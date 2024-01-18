import CompaniesSlider from "../../widgets/CompaniesSlider/CompaniesSlider";
import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import PrivacyPolice from "../../widgets/PrivacyPolicy/PrivacyPolice";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const PrivacyPolicy = () => {
    return (
        <div>
            <TopHeader />
            <PrivacyPolice />
            <CompaniesSlider />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;