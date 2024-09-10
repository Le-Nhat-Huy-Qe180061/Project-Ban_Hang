
import NotfoundPage from '../components/NotfoundPage/NotfoundPage.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';
import OrderPage from '../pages/OrderPage/OrderPage.jsx';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage.jsx';
import ProductPage from '../pages/ProductPage/ProductPage.jsx';
import SignInPage from '../pages/SignInPage/SignInPage.jsx';
import SignUpPage from '../pages/SignUpPage/SignUpPage.jsx';
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage.jsx';


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
        path: "/:type",
        page: TypeProductPage,
        isShowHeader: true,
    },
    {
        path: "/sign-in",
        page: SignInPage,
        isShowHeader: false,
    },
    {
        path: "/sign-up",
        page: SignUpPage,
        isShowHeader: false,
    },
    {
        path: "/product-detail",
        page: ProductDetailsPage,
        isShowHeader: true,
    },
    {
        path: "*",
        page: NotfoundPage
    },
]