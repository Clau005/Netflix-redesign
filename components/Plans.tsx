import { CheckIcon } from "@heroicons/react/outline"
import Head from "next/head"
import Link from "next/link"
import useAuth from "../hooks/useAuth"


function Plans() {
    const {logOut} = useAuth()

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>

        <button 
            className="text-lg font-medium hover:underline"
            onClick={logOut}
            >Sign Out
        </button>
      </header>

      <main className=" max-w-5xl  pt-28 pb-12 px-5 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">Choose the plan that's right for you</h1>

        <ul className="pt-8">
            <li className="planLinks">< CheckIcon className="ChkIcon" />Watch anything you want add-free</li>
            <li className="planLinks">< CheckIcon className="ChkIcon" />Personalized recomandation just for you</li>
            <li className="planLinks">< CheckIcon className="ChkIcon" />Change or cancel your plan anytime</li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
            <div className="flex w-full items-center self-end md:w-3/5">
                <div className="planBox">Standard</div>
                <div className="planBox">Standard</div>
                <div className="planBox">Standard</div>
            </div>

            {/* <Table /> */}
            <button>Subscribe</button>
        </div>
      </main>
        
    </div>
  )
}

export default Plans