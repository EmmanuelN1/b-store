import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image"
import Currency from "react-currency-formatter";
import {useDispatch} from "react-redux"
import {addToBasket, removeFromBasket} from "../slices/basketSlice"
import {useSession} from "next-auth/react";
import {useRouter} from "next/router"


function CheckoutProduct({
    id,
    title,
    price,
    description, 
    rating, 
    category, 
    image, 
    prime}) {
    const dispatch = useDispatch();
    const {data: session} = useSession();
    const router = useRouter();

    // const addProductToBasket = () => {
    //     const product = {
    //         id,
    //         title,
    //         price,
    //         description,
    //         rating,
    //         category,
    //         image,
    //         prime
    //     }
    //     dispatch(addToBasket(product));
    // }

    const goToHomepage = () => {
        router.push('/')
    }
    const removeProductFromBasket = () => {
        //removing the item from redux
        dispatch(removeFromBasket({id})) //the id comes as the action.payload
    }



  return (
  <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* Middle columnn */}
      <div className="col-span-3 mx-5 ">
            <p>{title}</p>
        
        <div className="flex">
        {Array(rating).fill().map((_, i) => (
                   <StarIcon className="h-5 text-yellow-500"/> 
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity = {price * 280} currency="NGN" />

        {prime && (
            <div className="flex items-center space-x-2">
                <img className="w-12" src="https://links.papareact.com/fdw" alt=""/>
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>
        )} 
      </div>

      {/*Right add / remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end text-white ">
          
          <button onClick={removeProductFromBasket} className="button">Remove From Basket</button>
          <button onClick={goToHomepage} className="button">Return to Homepage</button>
      </div>
  </div>
  )}

export default CheckoutProduct;
