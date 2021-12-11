import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
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
  const products  = await fetch("https://fakestoreapi.com/products").then((res) => res.json());

  return {
    props: {
      products: products,
    },
  };
}
