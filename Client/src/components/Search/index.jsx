import Input from "../Input"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { searchProducts } from "../../store/productslice"
import { Button } from "../Button"
import { Img } from "../Img"
import { useNavigate } from "react-router-dom"

function Search({onClose}) {

    const [search, setSearch] = useState("")
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch()   
    const navigate = useNavigate() 

    const handleSearch = () => {
        if (search === "") {
            return;
        }
        const filteredProducts = products.filter((product) => {
            const nameMatch = product.name.toLowerCase().includes(search.toLowerCase());
            const descriptionMatch = product.description.toLowerCase().includes(search.toLowerCase());
            return nameMatch || descriptionMatch;
        });
        dispatch(searchProducts(filteredProducts));
        navigate("/productlist");
        setSearch("");
        onClose();
   }

   const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
   }


  return (
    <div className="flex gap-3 bg-background">
        <Input onKeyDown={handleKeyPress} className="px-28 border-b-2 border-0 border-green-400 placeholder:text-white bg-background no-autofill" name={"search"} placeholder={"Search"} label={"Search"} type={"text"} value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button onClick={handleSearch}>
            <Img src="images/img_search_white_a700_18x18.svg" alt="search" className="w-[24px] h-[24px]" />
        </Button>
    </div>
  )
}

export default Search
