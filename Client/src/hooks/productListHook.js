import { useDispatch, useSelector } from "react-redux";
import { fetchProductsFailure, fetchProductsSuccess, applyFilter, applySort, getProductDetails } from "../store/productslice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import API from "../apis/api";

export function useProducts() {

  const dispatch = useDispatch();
  const productsFetched = useSelector((state) => state.products.productsFetched);

  useEffect(() => {
    if (!productsFetched) {
      const fetchData = async () => {
        try {
          const data = await API.getProducts();
          if (data) {
            dispatch(fetchProductsSuccess(data));
          }
        } catch (error) {
          dispatch(fetchProductsFailure(error));
        }
      };
      fetchData();
    }
  }, [dispatch, productsFetched]);
}

function useProductListPage() {
  const { loading, error, currentPage, filteredProducts, productsFetched } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFilter = (filter) => {
    dispatch(applyFilter(filter));
  };

  const handleSort = (sort) => {
    dispatch(applySort(sort));
  };

  const handleDetails = (id) => {
    dispatch(getProductDetails(id));
    navigate("/productdetails");
  };

  return {
    loading,
    error,
    currentPage,
    filteredProducts,
    productsFetched,
    handleFilter,
    handleSort,
    handleDetails,
    dispatch
  };
}

export default useProductListPage;
