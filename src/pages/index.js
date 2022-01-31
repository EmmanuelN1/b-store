import { useEffect } from "react";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import SignIn from "../pages/signIn"
import {signIn, signOut, useSession} from "next-auth/react";
import { auth } from '../firebase';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import {login, logout} from "../slices/userSlice"


export default function Home({products}) {
  const {data: session} = useSession();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  //keep the user signed in even on refresh

useEffect(() => {
  //setting up a listener that keeps track of any authenticated state change which firebase stores in a local memory (cache)
   const unsubscribe =  auth.onAuthStateChanged((userAuth) => {
       if (userAuth) {
          //Logged in 
          //Parsing a payload => which is what we will set the user to
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,        
          }))

       } else{
         //Logged out
         dispatch(logout());
       }
    }) 
    

    return unsubscribe;
}, [dispatch])

  return (
    <div className="bg-gray-100">
      
      <Head>
        <title>bStore</title>
      </Head>
      
      <Header/>  

      <main className="max-w-screen-2xl mx-auto">
          <Banner/>
          <ProductFeed products={products}/>
      </main>
          
    </div>
  );
}


/* Whenever we want to implement a server side render in next we must follow the steps below
 */

export async function getServerSideProps(context) {
  //feteching data from FakeStore Api
  const products  = await fetch("https://fakestoreapi.com/products").then(res => res.json())

  return {
    props: {
      products: products,
    },
  };
}
