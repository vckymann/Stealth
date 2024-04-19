import { Text, Heading, Button, Img } from "../../components";
import { Link } from "react-router-dom";
import useCartPage from "../../hooks/cartHook";
import Loader from "../../components/Loader";
import Errorpage from "../ErrorPage/index";
import { useState } from "react";
import { useEffect } from "react";



export default function CartPage() {
  
  const {
    cartItems,
    editProduct,
    totalPrice,
    error,
    loading,
    handleUpdateQuantity,
    handleEdit,
    handleDelete,
    handleConfirm,
    disabled,
  } = useCartPage();

  const [show, setShow] = useState(false);
  useEffect(() => {
    if(cartItems.length > 0) {
      setShow(true);
    }
  },[cartItems.length])

  return (
    <>
    {loading ? <Loader /> : error ? <Errorpage /> :
    <>
      <div className="flex flex-col min-h-screen pb-8 mx-auto px-5 bg-background text-white pt-10 max-w-[102rem]">
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-6 h-full">      
            <div className="flex flex-col gap-y-16 w-full">
              <>
              {cartItems.length === 0 ? <Text className="text-center text-4xl py-12">No items in cart</Text> : 
                cartItems.map((item) => (
                  <div className="flex flex-col gap-2 items-center justify-end h-72 shadow-[0px_2px_1px_0px] shadow-green-500 rounded-md bg-[#323030]" key={item.product_id}>
                    <Img className="w-[13rem]" src={item.images} />
                    <div className="flex justify-between w-full px-2">
                    <Text className="text-xl text-center">{item.product}</Text>
                    <Text className="">Price - ${item.price}</Text>
                    </div>
                    <div className="flex justify-between w-full px-2">

                    {editProduct === item.product_id ? (
                      <div className="flex justify-between w-[8rem]">
                      <Button className="px-3 hover:bg-[#666666] rounded-full" onClick={() => {handleUpdateQuantity(item.product_id, item.quantity - 1 > 0 ? item.quantity - 1 : 1)}}>-</Button>
                      <p>{item.quantity}</p>
                      <Button className="px-3 hover:bg-[#666666] rounded-full" onClick={() => {handleUpdateQuantity(item.product_id, item.quantity + 1)}}>+</Button>
                    </div>
                    ): (
                      <p>Quantity - {item.quantity}</p>
                    )}
                    <Text>Subtotal - ${item.total}</Text>
                    </div>
                    <div className="flex justify-between w-full">
                    {editProduct === item.product_id ? (                    
                      <Button disabled={disabled} onClick={handleConfirm} className="hover:bg-[#666666] px-3 py-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-check-big"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                    </Button>
                    ) : 
                    <Button className="hover:bg-[#666666] px-3 py-2 rounded-full" onClick={() => {handleEdit(item.product_id)}}>
                      <Img src="images/settings-2.svg" />
                    </Button>
                    }
                    <Button disabled={disabled} className="hover:bg-[#666666] px-3 py-2 rounded-full" onClick={() => {handleDelete(item.product_id)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                    </Button>
                    </div>
                  </div>
                ))}              
              </>
            </div>
      <div className="flex flex-col w-full sm:max-w-[30rem] px-3 pb-3">
        <div className="border-2 px-2 pb-2 bg-black">
          <div className="border-b-4 py-8">
            <Heading className="text-center">Order Summary</Heading>
          </div>
          <div className="flex flex-col gap-3 px-3 border-b-4 py-12">
            <div className="flex justify-between">
              <Text className="">Subtotal</Text>
              <Text className="w-10 text-center">{totalPrice}</Text>
            </div>
            <div className="flex justify-between">
              <Text className="">Shipping</Text>
              <Text className="w-8 text-center">Free</Text>
            </div>
            <div className="flex justify-between">
              <Text className="">Taxes</Text>
              <Text className="w-8 text-center">Free</Text>
            </div>
          </div>
          <div className="px-3 py-7">
            <Text className="text-center flex justify-between">Total <span>{totalPrice}</span></Text>
          </div>
          {show ? 
          <Link to="/checkout" className="w-full py-4 bg-green-500  font-semibold text-center">Checkout</Link>
          : null}
          <Link to="/productlist" className="w-full py-4 bg-red-500 font-semibold mt-4 text-center">Continue Shopping</Link>
        </div>
      </div>
        </div>
      </div>
      </>}
    </>
  )
}
