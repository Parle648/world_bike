import OrderForm from "../../features/OrderForm/OrderForm";
import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import TopHeader from "../../widgets/TopHeader/TopHeader";

const OrderPage = () => {
    return (
        <>
            <TopHeader />
            <OrderForm />
            <Newsletter />
            <Footer />
        </>
    );
};

export default OrderPage;