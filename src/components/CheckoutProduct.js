import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image"
import Currency from "react-currency-formatter";

function CheckoutProduct({id,title, price, description, rating, category, image, hasPrime}) {
    

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
        <Currency quantity = {price * 160} currency="NGN" />

        {hasPrime && (
            <div className="flex items-center space-x-2">
                <img className="w-12" src="https://links.papareact.com/fdw" alt=""/>
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>
        )} 
      </div>
  </div>
  )}

export default CheckoutProduct;
