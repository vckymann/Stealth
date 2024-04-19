import { useState } from "react"
import Login from "../../components/Forms/Login"
import Signup from "../../components/Forms/Signup"
import { Button } from "../../components"

function LoginSignupPage() {

    const [formType, setFormType] = useState("login")

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen bg-background text-white">
        {formType === "login" ? <Login /> : <Signup />}
        <Button className="bg-[#7e7a7a9d] mt-4 px-4 py-2 rounded-md" onClick={() => setFormType(formType === "login" ? "signup" : "login")}>{formType === "login" ? "Sign Up" : "Login"}</Button>
    </div>

    </>
  )
}

export default LoginSignupPage
