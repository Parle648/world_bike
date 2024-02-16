import BusketPageMain from "../../widgets/BusketPageMain/BusketPageMain";
import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const BusketPage = () => {
    return (
        <div>
            <TopHeader />
            <BusketPageMain />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default BusketPage;