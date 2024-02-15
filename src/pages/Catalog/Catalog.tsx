import EmailPopUp from "../../entities/EmailPopUp/EmailPopUp";
import CatalogHeroSection from "../../widgets/CatalogHeroSection/CatalogHeroSection";
import CatalogMainSection from "../../widgets/CatalogMainSection/CatalogMainSection";
import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const Catalog = () => {
    return (
        <div>
            <TopHeader />
            <CatalogHeroSection />
            <CatalogMainSection />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Catalog;