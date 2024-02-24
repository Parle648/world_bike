import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import DeliveryBlock from "../../widgets/ProductPage/DeliveryBlock/DeliveryBlock";
import ProducIntoduction from "../../widgets/ProductPage/ProductIntroduction/ProducIntoduction";
import ProductProperties from "../../widgets/ProductPage/ProductProperties/ProductProperties";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const ProductPage = () => {
    return (
        <>
            <TopHeader />
            <ProducIntoduction />
            <ProductProperties />
            <DeliveryBlock />
            <Newsletter />
            <Footer />
        </>
    );
};

export default ProductPage;