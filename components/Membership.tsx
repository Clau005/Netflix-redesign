import Loader from "./Loader"
import { useState } from 'react'
import useAuth from "../hooks/useAuth"
import useSubscription from "../hooks/useSubscription"
import { redirectToPortal } from "../lib/stripe"

function Membership() {
    const { user } = useAuth()
    const subscription = useSubscription(user)
    const [isBillingLoading, setBillingLoading ]  = useState(false)

    const manageSubscription = () => {
        if(subscription) {
            setBillingLoading(true)
            redirectToPortal()
        }
    }

  return (
    <div className="accountRow">
        <div className="space-y-2 py-4">
            <h4 className="text-lg text-[gray]">Membership and Billing</h4>
            <button
                disabled={isBillingLoading || !subscription}
                className="h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5"
                onClick={manageSubscription}
            >
                {isBillingLoading ? (
                    <Loader color="dark:fill-[#e50914]" />
                ) : (
                'Cancel Membership'
                )}
            </button>
        </div>
        <div className="col-span-3">
            <div>
                <div>
                    <p className="font-medium">{user?.email}</p>
                    <p className="text-[gray]">Password: ********</p>
                </div>
                <div className="md:text-right">
                    <p className="membershipLink">Change Email</p>
                    <p className="membershipLink">Change Password*</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Membership