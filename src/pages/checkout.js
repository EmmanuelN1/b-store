import Image from "next/image";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import {selectItems} from "../slices/basketSlice"
import CheckoutProduct from "../components/CheckoutProduct";
function Checkout () {

    const items = useSelector(selectItems);

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
                                    image= {item.image}
                                    price = {item.price}
                                    description = {item.description}
                                    category = {item.category}
                                    hasPrime = {item.hasPrime}
                            />
                        ))}
                        </div>
                    </div>

                {/*Right */}
            </main>

        </div>  

    )
}

export default Checkout;