import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useState } from "react";
import {auth} from "../firebase";
import {useRouter} from "next/router"

function Signup() {
     const [email, setEmail] = useState('');
     const [fullName, setFullname] = useState('');
     const [password, setPassword] = useState('');

    const router = useRouter();

     const signUp = (e) => {
         e.preventDefault();
         auth.createUserWithEmailAndPassword(email, password).then((auth) => {
             //it returns an auth which means it successfully created a user

             if(auth) {
                 console.log(auth)
                 alert("Successful");
                router.push("/signIn")
             }
        
         }).catch(error => alert(error.message))
     }

    return (
        <div className="mt-5 flex flex-col h-screen items-center bg-white" >
            <Image 
                        width={150}
                        height={70}
                        objectFit="contain"
                        className="cursor-pointer mt-3 mb-5  mx-auto" 
                        src={logo} alt="logo"/>


            <div objectFit="contain" width={300} className="flex  flex-col h-fit rounded-md border border-black p-2 mt-5">
                
                <h1 className="mb-2 font-medium ">Sign Up</h1>
                
                <form>

                    <h5 className="mb-0.5">Fullname</h5>
                    <input className="h-8 w-full bg-white border border-black mb-1 outline-none" type="text" value={fullName}  onChange={e => setFullname(e.target.value)}/>

                    <h5 className="mb-0.5">Email</h5>
                    <input className="h-8 w-full bg-white border border-black mb-1 outline-none" type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5 className="mb-0.5">Password</h5>
                    <input className="h-8 w-full bg-red outline-none mb-5 border border-black " type="password" value={password} onChange = {e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signUp} className=" button text-white center w-full  ">Sign Up</button>
                </form>

                <div className="flex justify-between mt-3">
                        
                <p className="font-medium text-xs">Already have an account?</p>
                   <Link href="/signIn">
                        <p className="font-medium text-xs link">Log In</p>
                   </Link>
                    
                </div>

            </div>
        </div>

    )
}

export default Signup;
