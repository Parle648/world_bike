import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import OrderPageMain from "../../widgets/OrderPageMain/OrderPageMain";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const OrderPage = () => {
    return (
        <>
            <TopHeader />
            <OrderPageMain />
            <Newsletter />
            <Footer />
        </>
    );
};

export default OrderPage;