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
    cartError,
    cartLoading,
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
    {cartLoading ? <Loader /> : cartError ? <Errorpage /> :
    <>
      <div className="flex flex-col min-h-screen pb-8 mx-auto px-5 bg-background text-white pt-10 max-w-[102rem]">
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-6 h-full">      
            <div className="flex flex-col items-center gap-y-16 w-full">
              <>
              {cartItems.length === 0 ? <Text className="text-center text-4xl py-12">No items in cart</Text> : 
                cartItems.map((item) => (
                  <div className="flex flex-col sm:flex-row gap-12 relative max-w-[40rem] w-full items-center shadow-[0px_2px_1px_0px] shadow-green-500 rounded-md bg-[#323030] p-4" key={item.product_id}>
                    <div className="border-2 border-white">
                    <Img className="w-[13rem]" src={item.images ? item.images : ""} />
                    </div>                    
                    <div className="flex flex-col items-center sm:items-start  gap-3">                      
                    <Text className="text-2xl font-semibold">{item.product}</Text>
                    
                    {editProduct === item.product_id ? (
                      <div className="flex justify-between w-[8rem]">
                      <select className="bg-[#323030] border-2 py-1 px-1" onChange={(e) => handleUpdateQuantity(item.product_id, e.target.value)}>
                        {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                          <option key={num} value={num}>Quantity - {num}</option>
                        ))}
                      </select>
                    </div>
                    ): (
                      <div className="border-2 border-white p-1 px-2">
                        <Text className="text-xl">Quantity - {item.quantity}</Text>
                      </div>
                    )}
                    <div className="flex gap-2 pt-2">
                    {editProduct === item.product_id ? (                    
                      <Button disabled={disabled} onClick={handleConfirm} className="hover:bg-[#666666] px-3 py-2 border-2">
                      Confirm
                    </Button>
                    ) : 
                    <Button className="hover:bg-[#666666] px-3 py-2  border-2" onClick={() => {handleEdit(item.product_id)}}>
                    Edit
                    </Button>
                    }                    
                    </div>
                    <div className="flex items-center gap-4">
                    <Text className="border-2 p-2">Price ${item.price}</Text>    
                    <Text className="border-2 p-2">Subtotal ${item.total}</Text>               
                    </div>
                    </div>
                    <div>
                    <Button disabled={disabled} className="hover:text-green-500 absolute top-2 right-2 text-xl" onClick={() => {handleDelete(item.product_id)}}>
                    X
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
              <Text className="text-center">{totalPrice}</Text>
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
