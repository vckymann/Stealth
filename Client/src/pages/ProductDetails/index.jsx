import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, RatingBar } from "../../components";
import { Link } from "react-router-dom";
import useProductDetailsPage from "../../hooks/productDetailHook";
import { ThreeDCardDemo } from "../../components/ui/3dcard";
import Loader from "../../components/Loader";

export default function ProductDetailsPage() {
  const {
    selectedProduct,
    similarProducts,    
    loading,
    AddToCartError,
    addToCartSuccess,
    productQuantity,
    currentPage,
    handleAddToCartBtn,
    setProductQuantity,
    handleViewDetailsBtn,
  } = useProductDetailsPage();
  
  return (
    <>
    {selectedProduct ?
    <>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="An Online Shoe Store" />
      </Helmet>
      <div style={{fontWeight: 500}} className="w-full mx-auto max-w-[102rem] pt-[31px] bg-background text-white font-poppins">
        <div className="flex flex-col items-center justify-start w-full gap-32 max-w-[102rem]">
          <div className="flex flex-col items-center justify-start w-full gap-8 lg:flex-row lg:justify-start lg:items-start">
            <div className="flex flex-col items-center justify-start w-full gap-8">
              <div className="flex flex-row justify-center w-full">
                <Img
                  src={selectedProduct.images ? selectedProduct.images : ""}
                  alt={selectedProduct.name}
                  className="w-[500px] object-cover"
                />
              </div> 
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-14 lg:items-start">
              <div className="flex flex-col items-center justify-start w-full gap-[29px] lg:items-start">
                <div className="flex flex-row justify-center gap-3 lg:justify-start">
                  <Link to="/productlist">
                    <Text as="p" className="text-2xl font-medium text-green-500">
                      {currentPage}
                    </Text>
                  </Link>
                  <Text as="p" className="!text-2xl font-medium">
                    &gt;
                  </Text>
                  <Text as="p" className="text-2xl font-medium">
                    {selectedProduct.name}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[31px] lg:items-start">
                  <Heading size="md" as="h1" className="text-green-500 text-center lg:text-start">
                    <>
                      {selectedProduct.name}
                    </>
                  </Heading>
                  <div className="flex flex-col items-center justify-start w-full gap-[31px] lg:items-start">
                    <Text as="p" className="text-4xl font-medium">
                     ${selectedProduct.price}
                    </Text>
                    <RatingBar value={selectedProduct.rating}  starCount={5} />
                  </div>
                <Text className="leading-8 text-xl text-center lg:text-start max-w-[50rem] px-2">
                    {selectedProduct.description}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-6 lg:justify-start">
                <Text as="p" className=" !font-medium">
                  Quantity
                </Text>
                <div className="flex flex-row justify-start items-center gap-4 w-[63%]">
                  <button onClick={() => setProductQuantity(productQuantity > 1 ? productQuantity - 1 : productQuantity)} className=" bg-green-500 px-3 text-2xl">-</button>
                  <p className="w-8">{productQuantity}</p>
                  <button onClick={() => setProductQuantity(productQuantity + 1)} className=" bg-green-500 px-3 text-2xl">+</button>
                </div>
              </div>
              <Button
              disabled={loading}                
              className="flex flex-row justify-center items-center gap-2 cursor-pointer bg-green-500 px-4 py-3 rounded-sm"
                onClick={handleAddToCartBtn}
              >
               {loading ? "Adding..." : "Add to Cart"}
                <Img src="images/img_cart_white_a700.svg" alt="Cart" />
              </Button>
              {AddToCartError && <p className="text-red-500">{AddToCartError}</p>}
              {addToCartSuccess && <p className="text-green-500">{addToCartSuccess}</p>}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-20">
            <div className="flex flex-row justify-center items-center w-full">
              <div className="flex flex-row justify-between items-center w-auto gap-8">
                <Heading size="s" as="h2" className="text-center px-[2px]">
                  Similiar Products
                </Heading>                  
              </div>              
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 pb-20 px-2">
              { similarProducts.length > 0 ?
              similarProducts.map((product) => (                
              <ThreeDCardDemo width={"w-[18rem]"} height={"h-[22rem]"} key={product.id} product={product} handleDetails={handleViewDetailsBtn} lazyLoad={true} />
              )): <div className="">No similar products</div>}
            </div>
          </div>
        </div>        
      </div>
      </>
      : <div className="w-full h-screen bg-white">
        <Loader /> 
        </div>}
    </>
  );
}
