import CatalogHeroSection from "../../widgets/CatalogHeroSection/CatalogHeroSection";
import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const Catalog = () => {
    return (
        <div>
            <TopHeader />
            <CatalogHeroSection />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Catalog;