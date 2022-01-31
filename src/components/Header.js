import Image from "next/image";
import logo from "../assets/logo.png";
import {useRouter} from "next/router"
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroIcons/react";
import {auth} from "../firebase";
import {signIn, signOut, useSession} from "next-auth/react";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function Header() {
    const {data: session} = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    const signOut = () => {
        auth.signOut()
        router.push("/signIn")
    }

    return(
        <header>
            {/* Top Div */}

            {/*Left*/}
            <div className="flex items-center bg-b_color p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push("/") }
                        src={logo}
                        width={150}
                        height={60}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                   
                <div  className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-red-800 hover:bg-red-300">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"/>
                    <SearchIcon className="h-12 p-4"/>
                </div>


                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">

                        <div className="">
                            <p>Hello User</p>
                        
                                <p className="link font-extrabold md:text-sm" onClick={signOut} >Sign Out</p>
                        </div>
                    
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div onClick={() => router.push('/checkout')}   
                        className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-red-500 text-center rounded-full text-black font-bold"> {items.length} </span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline  mt-2 font-extrabold md:text-sm ">Basket</p>
                    </div>
                </div>

            </div>

            {/* Bottom Div */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-red-800 text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>

                <p className="link">Premium Video</p>
                <p className="link"> Business </p>
                <p className="link"> Today's Deals</p>
                <p className="link hidden lg:inline-flex"> Electronics</p>
                <p className="link hidden lg:inline-flex"> Food & Grocery</p>
                <p className="link hidden lg:inline-flex"> Premium 
                </p>
                <p className="link hidden lg:inline-flex"> Buy Again </p>
                <p className="link hidden lg:inline-flex"> Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care </p>            
            </div>
        </header>
    )
}

export default Header;


    