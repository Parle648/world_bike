import AboutUsHeroSection from "../../widgets/AboutUsHeroSection/AboutUsHeroSection";
import CompaniesSlider from "../../widgets/CompaniesSlider/CompaniesSlider";
import ContactsMapDescription from "../../widgets/ContactMapDescription/ContactsMapDescription";
import Footer from "../../widgets/Footer/Footer";
import InteractiveMap from "../../widgets/InteractiveMap/InteractiveMap";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const AboutUs = () => {
    return (
        <div>
            <TopHeader />
            <AboutUsHeroSection />
            <InteractiveMap />
            <ContactsMapDescription />
            <CompaniesSlider />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default AboutUs;