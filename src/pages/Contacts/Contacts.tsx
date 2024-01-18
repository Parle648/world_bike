import CompaniesSlider from "../../widgets/CompaniesSlider/CompaniesSlider";
import ContactsHeroSection from "../../widgets/ContactsHeroSection/ContactsHeroSection";
import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const Contacts = () => {
    return (
        <div>
            <TopHeader />
            <ContactsHeroSection />
            <CompaniesSlider />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Contacts;