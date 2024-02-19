import React from 'react';
import '../Scss/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from '../pages/AboutUs/AboutUs';
import BicycleWorkshop from '../pages/BicycleWorkshop/BicycleWorkshop';
import Blog from '../pages/Blog/Blog';
import BlogArticle from '../pages/BlogArticle/BlogArticle';
import Catalog from '../pages/Catalog/Catalog';
import Contacts from '../pages/Contacts/Contacts';
import DeliveryAndPayment from '../pages/DeliveryAndPayment/DeliveryAndPayment';
import Guarantee from '../pages/Guarantee/Guarantee';
import Main from '../pages/Main/Main';
import OrderPage from '../pages/OrderPage/OrderPage';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import ProductPage from '../pages/ProductPage/ProductPage';
import Storage from '../pages/Storage/Storage';
import AccountPage from '../pages/AccountPage/AccountPage';
import BusketPage from '../pages/BusketPage/BusketPage';
import ToTop from '../features/ToTop/ToTop';

function App() {
  return (
    <div className="App">
      <ToTop />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/account' element={<AccountPage />}></Route>
          <Route path='/catalog/:id' element={<ProductPage />}></Route>
          <Route path='/bicycle-workshop' element={<BicycleWorkshop />}></Route>
          <Route path='/storage' element={<Storage />}></Route>
          <Route path='/guarantee' element={<Guarantee />}></Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/blog/:id' element={<BlogArticle />}></Route>
          <Route path='/delivery' element={<DeliveryAndPayment />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
          <Route path='/order' element={<OrderPage />}></Route>
          <Route path='/busket' element={<BusketPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;