import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const baseUrl = import.meta.env.VITE_API_URL
const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!searchTerm){
      setSearchResults([])
      return;
    }
    const delaySearch = setTimeout(()=>{
      fetchSearchResults();
    }, 1000);
    return ()=> clearTimeout(delaySearch);
  },[searchTerm])

  async function fetchSearchResults(){
    setIsLoading(true)
    try {
     const request = await fetch(`https://eggys-palace.onrender.com/api/product/products/search?query=${searchTerm}`);
     const data = await request.json();
     setSearchResults(data.products || [])
    } catch (error) {
      toast.error("no result found");
    }finally{
      setIsLoading(false);
    }
  }
  const handleSelectedProduct = (productId)=>{
    navigate(`/product/${productId}`);
    setSearchResults([]);
    setSearchTerm('')
  }
  return (
    <>
    <form className="w-full wrapper">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-[56px] rounded-[32px] bg-[#F0F0F0] outline-none placeholder:text-[#100101] px-8 border font-medium text-lg" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
              />
              {isLoading && <p className='text-white px-8'>Searching...</p> }
              {/* search suggestions dropdown */}
              <div className='w-50'>

               {searchResult.length > 0 && (
                <ul className='absolute w-85 bg-[#100101] text-white shadow-lg rounded-md mt-1 z-10 max-h-[300px] overflow-y-auto '>
                  {searchResult.map((item)=>(

                    <li key={item._id} className='p-3 border-b cursor-pointer' onClick={()=> handleSelectedProduct(item._id)} >
                      <div className='flex items-center gap-2'>
                        <img src={item.image} alt={item.title} className='object-cover rounded-md w-12 h-12' />
                        <div>
                        <p className='font-medium' >{item.title}</p>
                        <p className='text-sm' >&#8358; {item.price}</p>
                        </div>
                      </div>

                    </li>
                  ))}
                </ul>
              )}
              </div>
            </form>
    </>
  )
}

export default SearchField