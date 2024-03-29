import { getProducts, Product } from "@stripe/firestore-stripe-payments"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import Membership from "../components/Membership"
import useAuth from "../hooks/useAuth"
import  useSubscription  from '../hooks/useSubscription'
import payments from "../lib/stripe"


interface Props {
  products: Product[]
}



function Account( {products } : Props) {
  console.log(products)
  const {user, logOut} = useAuth()
  const subscription = useSubscription(user)
  return (
    <div>
      <Head>
          <title>Account Settings-Netflix</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='bg-[#141414] relative'>
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </header>
      <main className="mx-auto max-w-6xl pt-24 px-5 pb-12 transition-all md:px-10">
          <div className="flex flex-col  gap-x-4 md:flex-row  md:items-center">
            <h1 className="text-3xl md:text-4xl">Account</h1>
            <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
              <p className="text-sm text-[#555] font-semibold">Member Since {subscription?.created}</p>
            </div>
          </div>

          <Membership />
          
          <div className="accountRow">
            <h4 className="text-lg ">Plan Details</h4>
            {/* Find the current plan on the user */}
            <div>
            {
              products.filter(
                (product) => product.id === subscription?.product
              )[0]?.name
            }
            </div>
            <p className="cursor-pointer text-blue-500 hover:underline md:text-right">Change plan</p>
          </div>
            
          <div className="accountRow">
            <h4 className="text-lg text-[gray]">Settings</h4>
            <p className="cursor-pointer col-span-3 text-blue-500 hover:underline"
               onClick={logOut}>
            Sign Out
            </p>
          </div>
      </main>
    </div>
      
   
    
  )
}

export default Account


export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
  .then((res) => res)
  .catch((error) => console.log(error))

  return {
    props: {
      products,
    },
  }
}