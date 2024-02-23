import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import DeliveryBlock from "../../widgets/ProductPage/DeliveryBlock/DeliveryBlock";
import ProducIntoduction from "../../widgets/ProductPage/ProductIntroduction/ProducIntoduction";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const ProductPage = () => {
    return (
        <>
            <TopHeader />
            <ProducIntoduction />
            <DeliveryBlock />
            <Newsletter />
            <Footer />
        </>
    );
};

export default ProductPage;