import CompaniesSlider from "../../widgets/CompaniesSlider/CompaniesSlider";
import ContactsMapDescription from "../../widgets/ContactMapDescription/ContactsMapDescription";
import ContactsHeroSection from "../../widgets/ContactsHeroSection/ContactsHeroSection";
import ContactUsWidget from "../../widgets/ContactUsWidget/ContactUsWidget";
import Footer from "../../widgets/Footer/Footer";
import InteractiveMap from "../../widgets/InteractiveMap/InteractiveMap";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const Contacts = () => {
    return (
        <div>
            <TopHeader />
            <ContactsHeroSection />
            <InteractiveMap />
            <ContactsMapDescription />
            <ContactUsWidget />
            <CompaniesSlider />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Contacts;