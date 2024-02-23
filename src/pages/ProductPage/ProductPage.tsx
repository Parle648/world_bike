import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import DeliveryBlock from "../../widgets/ProductPage/DeliveryBlock/DeliveryBlock";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const ProductPage = () => {
    return (
        <>
            <TopHeader />
            <DeliveryBlock />
            <Newsletter />
            <Footer />
        </>
    );
};

export default ProductPage;