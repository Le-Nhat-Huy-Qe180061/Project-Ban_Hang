
import NotfoundPage from '../components/NotfoundPage/NotfoundPage.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';
import OrderPage from '../pages/OrderPage/OrderPage.jsx';
import ProductPage from '../pages/ProductPage/ProductPage.jsx';


export const routes = [
    {
        path: "/",
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: "/order",
        page: OrderPage,
        isShowHeader: true,
    },
    {
        path: "/products",
        page: ProductPage,
        isShowHeader: true,
    },
    {
        path: "*",
        page: NotfoundPage
    },
]