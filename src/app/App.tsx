import React, { Suspense, lazy } from 'react';
import '../Scss/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const AboutUs = lazy(() => import('../pages/AboutUs/AboutUs'))
const BicycleWorkshop = lazy(() => import('../pages/BicycleWorkshop/BicycleWorkshop'))
const Blog = lazy(() => import('../pages/Blog/Blog'))
const BlogArticle = lazy(() => import('../pages/BlogArticle/BlogArticle'))
const Catalog = lazy(() => import('../pages/Catalog/Catalog'))
const Contacts = lazy(() => import('../pages/Contacts/Contacts'))
const DeliveryAndPayment = lazy(() => import('../pages/DeliveryAndPayment/DeliveryAndPayment'))
const Guarantee = lazy(() => import('../pages/Guarantee/Guarantee'))
const Main = lazy(() => import('../pages/Main/Main'))
const OrderPage = lazy(() => import('../pages/OrderPage/OrderPage'))
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy/PrivacyPolicy'))
const ProductPage = lazy(() => import('../pages/ProductPage/ProductPage'))
const Storage = lazy(() => import('../pages/Storage/Storage'))
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'))
const BusketPage = lazy(() => import('../pages/BusketPage/BusketPage'))
const ToTop = lazy(() => import('../features/ToTop/ToTop'))
const Spinner = lazy(() => import('../shared/components/Spinner/Spinner'))

function App() {
  return (
    <div className="App">
      <ToTop />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <Main />
          </Suspense>}></Route>
          <Route path='/catalog' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <Catalog />
          </Suspense>}></Route>
          <Route path='/account' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <AccountPage />
          </Suspense>}></Route>
          <Route path='/catalog/:id' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <ProductPage />
          </Suspense>}></Route>
          <Route path='/bicycle-workshop' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <BicycleWorkshop />
          </Suspense>}></Route>
          <Route path='/storage' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <Storage />
          </Suspense>}></Route>
          <Route path='/guarantee' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <Guarantee />
          </Suspense>}></Route>
          <Route path='/privacy-policy' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <PrivacyPolicy />
          </Suspense>}></Route>
          <Route path='/blog' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <Blog />
          </Suspense>}></Route>
          <Route path='/blog/:id' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <BlogArticle />
          </Suspense>}></Route>
          <Route path='/delivery' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <DeliveryAndPayment />
          </Suspense>}></Route>
          <Route path='/about-us' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <AboutUs />
          </Suspense>}></Route>
          <Route path='/contacts' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <Contacts />
          </Suspense>}></Route>
          <Route path='/order' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <OrderPage />
          </Suspense>}></Route>
          <Route path='/busket' element={
          <Suspense fallback={<Spinner loaderUnvisible={false} />}>
            <BusketPage />
          </Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;