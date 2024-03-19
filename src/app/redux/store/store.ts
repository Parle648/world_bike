import { configureStore } from '@reduxjs/toolkit';
import Products from '../../../shared/lib/slices/Products';
import currentFilters from '../../../shared/lib/slices/currentFilers';
import pagesSlice from '../../../shared/lib/slices/pagesSlice';

export default configureStore({
    reducer: {
        products: Products,
        currentFilters: currentFilters,
        pagesSlice: pagesSlice,
    }
})