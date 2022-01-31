import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useState } from "react";
import {auth} from "../firebase";
import {useRouter} from "next/router"
import {useDispatch} from "react-redux";
import {login} from "../slices/userSlice"


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then( (auth) => {
            router.push('/')
        }).catch(error => alert(error.message))
       
    }

    return (
        <div className="mt-5 flex  flex-col h-screen items-center bg-white" >
            <Image 
                        width={150}
                        height={70}
                        objectFit="contain"
                        className="cursor-pointer mt-3 mb-5  mx-auto" 
                        src={logo} alt="logo"/>


            <div objectFit="contain" width={300} className="flex  flex-col h-fit rounded-md border border-black p-2 mt-5 ">
                
                <h1 className="mb-2 font-medium ">Sign In</h1>
                
                <form>
                    <h5 className="mb-0.5">Email</h5>
                    <input className="h-8 w-full bg-white border border-black mb-1 outline-none" type="text"  value={email}  onChange={e => setEmail(e.target.value  )}/>

                    <h5 className="mb-0.5">Password</h5>
                    <input className="h-8 w-full bg-white mb-5 border border-black outline-none " type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className=" button text-white center w-full  ">Sign In</button>
                </form>

                <div className="flex justify-between mt-3">
                    <p className="font-medium text-xs link">Forgot Password? </p>
                   <Link href="/signup">
                        <p className="font-medium text-xs link">Sign Up</p>
                   </Link>
                    
                </div>

            </div>
        </div>
    )
}

export default SignIn
