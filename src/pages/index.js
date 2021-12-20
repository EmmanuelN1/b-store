import Head from "next/head";
import Banner from "./banner";
import Header from "./header";
import ProductFeed from "./productFeed";
import SignIn from "../pages/signIn"
import {signIn, signOut, useSession} from "next-auth/react";



export default function Home({products}) {
  const {data: session} = useSession()
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
