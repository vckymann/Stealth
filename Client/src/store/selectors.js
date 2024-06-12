import { useSelector } from "react-redux";

function useAppSelectors() {

    const userData = useSelector((state) => state.auth.userData);
    const authStatus = useSelector((state) => state.auth.status);
    const userId = useSelector((state) => state.auth.userId);
    const cartId = useSelector((state) => state.auth.cartId);

    const cartLoading = useSelector((state) => state.cart.loading);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartItemsFetched = useSelector((state) => state.cart.cartItemsFetched);
    const count = useSelector((state) => state.cart.count);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const cartError = useSelector((state) => state.cart.error);

    const products = useSelector((state) => state.products.products);
    const selectedProduct = useSelector((state) => state.products.selectedProduct);
    const similarProducts = useSelector((state) => state.products.similarProducts);
    const currentPage = useSelector((state) => state.products.currentPage);
    const productsFetched = useSelector((state) => state.products.productsFetched);
    const productsError = useSelector((state) => state.products.error);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    const ProductsLoading = useSelector((state) => state.products.loading);


    return { userData, authStatus, userId, cartId, cartLoading, cartItems, cartItemsFetched, count, totalPrice, cartError, products, selectedProduct, similarProducts, currentPage, productsFetched, productsError, filteredProducts, ProductsLoading };
}

export default useAppSelectors;