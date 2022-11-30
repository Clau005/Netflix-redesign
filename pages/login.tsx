import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"

interface Inputs {
  email: string
  password: string
}

function Login() {
  const [login, setLogin] = useState(false)
  const {signIn, signUp} =useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors } 
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async({email, password}) => {
    if(login) {
      await signIn(email, password)
    }else {
      await signUp(email, password)
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center
    md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image 
         src="https://rb.gy/p2hphi"
         layout="fill"
         className="-z-10 !hidden opacity-60 sm:!inline"
         objectFit="cover"
         alt="Image"
         priority
      />

      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6 lg:w-[150px] lg:h-[150px]"
        width={80}
        height={80}
      />

      <form onSubmit={handleSubmit(onSubmit)} 
            className="relative mt-24 space-y-8 rounded bg-black/75  py-10 px-6
            md:mt-0 md:max-w-md md:px-14">
        
        <h1 className="text-white text-4xl text-bold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="input"
                {...register("email",{ required:true })}
              />
              {errors.email && (
                <p className="p-1 text-[16px] font-light text-orange-500">Please enter a valid Email Address</p>
              )}
          </label>
          <label className="inline-block w-full">
              <input 
                type="password" 
                placeholder="password"
                className="input"
                {...register("password",{ required:true })}
              />  
               {errors.password && (
                <p className="p-1 text-[16px] font-light text-orange-500">Your password must contain beetwen 4 to 60 characters</p>
              )}
          </label>
        </div>

        <button className="w-full rounded py-4 bg-[#e50914] font-semibold"
                onClick={() => setLogin(true)}>
                Sing In
        </button>

        <div className="text-[#9e9c9c]">
          New to Netflix?{' '}
          <button
            className="cursor-pointer text-white hover:underline"
            onClick={() => setLogin(false)}
            type="submit"
          >
            Sign up now
          </button>

        </div>
      </form>

    </div>
  )
}

export default Login