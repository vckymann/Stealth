/* eslint-disable react/prop-types */
import { CardBody, CardContainer, CardItem } from "./Base/card";
import { Img } from "../Img";

export function ThreeDCardDemo({product, handleDetails,width,height,details = true, lazyLoad = false}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className={`${width} ${height} 0 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.3] bg-black/90 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border flex flex-col items-center justify-end`}>
        <CardItem translateZ="100" className="w-full flex justify-center items-center">
          <Img
          loading={lazyLoad ? "lazy" : "eager"}
          src={product.images}
            alt="thumbnail"
            className=" w-[17rem] h-auto object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <div className="flex justify-between items-center w-full mt-6">
          <CardItem
            translateZ={10}
            className="text-[0.8rem] text-white pr-4"
          >
          {product.name}
          </CardItem>
          <CardItem
            translateZ={10}
            className="text-[0.8rem] text-white pl-4"
          >
            ${product.price}
          </CardItem>
        </div>
        <div className="flex justify-between items-center mt-5">
          {details && (
            <CardItem
            onClick={() => {
              handleDetails({productId: product.id, category_Id: product.category_id});
            }}
            translateZ={20}
            as="button"
            className="px-20 py-2 text-nowrap rounded-xl bg-background dark:bg-white dark:text-black text-white text-xs font-bold w-full"
          >
            View Details
          </CardItem>
          )}        
          
        </div>
      </CardBody>
    </CardContainer>
  );
}
