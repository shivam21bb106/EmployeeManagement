import React, { useState } from "react";
const Login = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Form Submitted")
        setEmail('')
        setPassword('')
    }
    return (
        <>

            <div className="flex h-screen w-screen items-center justify-center">
                <div className="border-2 rounded-xl border-emerald-600 p-20">


                    <form onSubmit={(e) => { submitHandler(e) }} className="flex  flex-col items-center justify-center" >
                        <input className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type=" email" required placeholder="Enter your name" onChange={(e) => setEmail(e.target.value)} />
                        <input className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" required placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
                        <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white' type="sbmit">Submit</button>

                    </form>
                </div>

            </div >
        </>
    )

}
export default Login