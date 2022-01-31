import Image from "next/image";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import {selectItems} from "../slices/basketSlice"
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import {useSession} from "next-auth/react";



function Checkout () {

    const items = useSelector(selectItems);
    const {data: session} = useSession();

    return (
        <div className="bg-gray-100">
            <Header/>

            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/*Left */}
                    <div className="flex-grow m-5 shadow-sm">
                        <Image src="https://links.papareact.com/ikj"
                            width={1020}
                            height={250}
                            objectfit="contain"
                        />

                        <div className="flex flex-col p-5 space-y-10 bg-white">
                            <h1 className="text-3xl border-b pb-4" >{items.length === 0 ?'Your Basket is empty':'My Shopping Basket'} </h1>

                            {items.map((item, i) => (
                                <CheckoutProduct
                                    key = {i}
                                    id = {item.id}
                                    title = {item.title}
                                    rating = {item.rating}
                                    image= {item.image}
                                    price = {item.price}
                                    description = {item.description}
                                    category = {item.category}
                                    prime = {item.prime}
                            />
                        ))}
                        </div>
                    </div>

                {/*Right */}

                <div >
                        {items.length > 0 && (
                            <>
                                <h2 className="whitespace-nowrap"> Subtotal({items.length} items): 
                                    <span className="font-bold">
                                    {/* <Currency quantity={price * 280 } currency="NGN"/> */}
                                    </span> 
                                </h2>


                                <button 
                                    disabled={!session}
                                    className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                    {!session ? 'Sign In, To Checkout':'Proceed To Checkout'}
                                </button>
                            </>
                        )}
                </div>
            </main>

        </div>  

    )
}

export default Checkout;