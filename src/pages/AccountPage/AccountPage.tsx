import React from 'react';
import Footer from '../../widgets/Footer/Footer';
import TopHeader from '../../widgets/TopHeader/TopHeader';
import Newsletter from '../../widgets/Newsletter/Newsletter';
import AccountBlock from '../../widgets/AccountBlock/AccountBlock';

const AccountPage = () => {
    return (
        <>
            <TopHeader />
            <AccountBlock />
            <Newsletter />
            <Footer /> 
        </>
    );
};

export default AccountPage;