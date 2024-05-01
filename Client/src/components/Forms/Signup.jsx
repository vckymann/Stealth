import { Button, Input, Text } from "../index";
import useSignUp from "../../hooks/signupHook";
import Loader from "../Loader";
import { useState } from "react";

function Signup() {

    const {loading,signUpError,register, handleSubmit,SignUp} = useSignUp();
    const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit(SignUp)} className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 px-12">
      <div className="flex flex-col p-6 space-y-1">
        <h3 className="text-white font-semibold tracking-tight text-2xl">Create an account</h3>
      </div>
      <div className="p-6 px-0 pt-0 grid gap-4">
        <div className="grid gap-2">
            <label className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">Name</label>
              <Input name={"name"} placeholder={"Enter your Name"} label={"Name"} type={"text"} {...register("name",{required: true})} className="flex placeholder:text-white h-10 w-full rounded-md border-green-500 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="name" />
            <label className="text-white text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
              <Input name={"email"} label={"Email"} type={"email"} {...register("email",{required: true})} className=" flex placeholder:text-white h-10 w-full rounded-md border-green-500 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="m@example.com"/>
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">Password</label>
              <Input name={"password"} label={"Password"} type={showPassword ? "text" : "password"} {...register("password",{required: true})} className="flex placeholder:text-white h-10 w-full rounded-md border-green-500 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="password" placeholder="Enter your password"/>
                <Button onClick={() => setShowPassword(!showPassword)} className="">{
                showPassword ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye p-1 hover:bg-[#80808067] rounded-md"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle className="fill-green-500 stroke-white" cx="12" cy="12" r="3"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide hover:bg-[#80808067] rounded-md p-1 lucide-eye`}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg> 
                }
                </Button>
            </div>
      </div>
              <div className="flex flex-col items-center gap-y-6 p-6 pt-0">
                <Button type={"submit"} className="inline-flex bg-green-400 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">{loading ? <Loader /> : "Sign Up"}</Button>
                {signUpError !== "" && <Text className="text-red-500 text-center">{signUpError}</Text>}            
            </div>
    </form>
  )
}

export default Signup;
