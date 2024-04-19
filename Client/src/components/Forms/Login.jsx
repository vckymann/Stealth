import { Button, Input } from "../index";
import Loader from "../Loader";
import useLogin from "../../hooks/loginHook";

function Login() {

    const { register, handleSubmit,login,loading,loginError } = useLogin();

  return (
    <form onSubmit={handleSubmit(login)} className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 px-12"><div className="flex flex-col p-6 space-y-1"><h3 className="text-white font-semibold tracking-tight text-2xl">Log in to your account</h3></div><div className="p-6 pt-0 grid gap-4"><div className="grid gap-2"><label className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label><Input name={"email"} label={"email"} type={"email"} {...register("email",{required: true})} className="flex placeholder:text-white h-10 w-full rounded-md border-green-500 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="m@example.com" autoComplete="on"/></div><div className="grid gap-2"><label className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >Password</label><Input name={"password"} label={"password"} type={"password"} {...register("password",{required: true})} className="flex placeholder:text-white h-10 w-full rounded-md border-green-500 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="password" placeholder="Enter your password"/></div></div><div className="flex flex-col items-center gap-y-6 p-6 pt-0">
                <Button type={"submit"} className="inline-flex bg-green-400 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">{loading ? <Loader /> : "Login"}</Button>
                {loginError !== "" && <p className="text-red-500 text-center">{loginError}</p>}            
            </div></form>
  )
}

export default Login
