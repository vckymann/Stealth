import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import { refreshProducts } from "../../store/slices/productslice";
import { ThreeDCardDemo } from "../../components/ui/3dcard";
import useProductListPage from "../../hooks/productListHook";
import Loader from "../../components/Loader";
import Errorpage from "../ErrorPage/index";


export default function ProductListPage() {

    const {
        productsError,
        ProductsLoading,
        filteredProducts,
        currentPage,
        dispatch,
        handleFilter,
        handleSort,
        handleDetails,
    } = useProductListPage();

  return (
  <>
    {ProductsLoading ? <Loader />
    :
    productsError ? <Errorpage />
    :
    <>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="An Online Shoe Store" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-background pb-12">
        <div className="flex flex-col items-center justify-start w-full mt-[31px] gap-[51px] max-w-[102rem] px-5">          
          
          <div className="flex flex-col items-center w-full gap-8">
            <div className="flex flex-col justify-start gap-8">
              <div className="flex flex-col items-center w-full gap-[31px]">
                <div className="flex flex-col items-center justify-start w-full gap-[5px] mt-2">
                  <Text as="p" className="text-white !font-bold text-2xl">
                    Popular Brands
                  </Text>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
                  <Button id="all" onClick={() => dispatch(refreshProducts())} className="flex flex-row justify-start items-center gap-5 pl-1">
                    <div className={`${currentPage === "All" ? "bg-green-400" : "bg-[#ffffffca]"} rounded-md px-5 py-1 border-2 border-black hover:border-green-500`}>
                    <Img
                      src="images/extras/cart.png"
                      alt="all"
                      className="h-[28px] w-[28px]"
                    />
                    </div>                    
                  </Button>

                  <Button id="Nike" onClick={() => handleFilter({page: "Nike", id: 1})} className="flex flex-row justify-start items-center gap-4">
                    <div className={`${currentPage === "Nike" ? "bg-green-400" : "bg-[#ffffffca]"} rounded-md  px-4 py-0 border-2 border-black hover:border-green-500`}>
                    <Img src="images/productdetails/nikee.png" alt="sweater_one" className="w-[40px]" />
                    </div>                    
                  </Button>

                  <Button id="Adidas" onClick={() => handleFilter({page: "Adidas", id: 2})} className="flex flex-row justify-start items-center gap-4">
                  <div className={`${currentPage === "Adidas" ? "bg-green-400" : "bg-[#ffffffca]"} rounded-md  px-4 py-0 border-2 border-black hover:border-green-500`}>
                    <Img src="images/productdetails/adidase.png" alt="tshirt_one" className="w-[40px]" />
                    </div>                    
                  </Button>
                  <Button id="Under-Armour" onClick={() => handleFilter({page: "Under-Armour", id: 3})} className="flex flex-row justify-start items-center gap-4">
                  <div className={`${currentPage === "Under-Armour" ? "bg-green-400" : "bg-[#ffffffca]"} rounded-md  px-5 py-1 border-2 border-black hover:border-green-500`}>
                    <Img src="images/productdetails/undere.png" alt="pants_one" className="w-[35px] h-[32px]" />
                    </div>                    
                  </Button>
                  <Button id="North-face" onClick={() => handleFilter({page: "North-face", id: 4})} className="flex flex-row justify-start items-center gap-4">
                  <div className={`${currentPage === "North-face" ? "bg-green-400" : "bg-[#ffffffca]"} rounded-md  px-4 py-0 border-2 border-black hover:border-green-500`}>
                    <Img src="images/brands/north face.png" alt="boot_one" className="w-[45px] h-[45px]" />
                    </div>                    
                  </Button>
                  <Button id="LV" onClick={() => handleFilter({page: "LV", id: 5})} className="flex flex-row justify-start items-center gap-4">
                  <div className={`${currentPage === "LV" ? "bg-green-400" : "bg-[#ffffffca]"} rounded-md  px-4 py-0 border-2 border-black hover:border-green-500`}>
                    <Img src="images/brands/lv.png" alt="dress_one" className="w-[45px] h-[45px]" />
                    </div>                    
                  </Button>
                  <Button id="Converse" onClick={() => handleFilter({page: "Converse", id: 6})} className="flex flex-row justify-start items-center gap-4">
                  <div className={`${currentPage === "Converse" ? "bg-green-400" : "bg-[#ffffffca]"} rounded-md  px-4 py-0 border-2 border-black hover:border-green-500`}>
                    <Img src="images/brands/converse.png" alt="belt_one" className={"w-[45px] h-[45px]"} />
                    </div>
                  </Button>                  
                </div>
              </div>
              <div className="h-px w-full bg-blue_gray-100" />
              
            </div>
            <div className="flex flex-col items-center justify-start w-[84%] gap-[29px]">
              <div className="flex flex-col items-center gap-4 justify-between w-full sm:flex-row">
                <Text as="p" className="flex !font-medium gap-1">
                  <span className="text-white">Total Products &gt;</span>
                  <span className="text-white"> {filteredProducts.length === 0 ? 0 : filteredProducts.length}</span>
                  <span>
                  </span>
                </Text>
                <div className="flex flex-row justify-start items-center gap-4">
                  <Text as="p" className="flex mt-px">
                    <span className="text-white">Sort by : </span>
                    <select onChange={(e) => {
                      handleSort(e.currentTarget.value)}} className="text-white bg-background ml-2 outline-none" name="" id="">
                      <option >Select</option>
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                    </select>
                  </Text>                  
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[55px]">
                <div className="flex flex-col items-center justify-start w-full">
                  {filteredProducts.length > 0 ? (
                  <div className="justify-center w-full gap-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {filteredProducts.map((product) => {
                      return (
                    <ThreeDCardDemo key={product.id} product={product} handleDetails={handleDetails} />
                      )
                    })}
                  </div>
                  ) : <Img src="images/productntfound.png" />}
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </>}
    </>
   );
}
