import "./SignUp.css"
import Link from "next/link"
import logo from "../assets/logo.png";
import Image from "next/image"

function SignIn() {
    return (
        <div className="login" >
            <Image  className="login__logo" src={logo} alt="logo"/>


            <div className="login__container">
                
                <h1>SignIn</h1>
                
                <form>
                    <h5>Email</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className="btn__signIn ">Sign In</button>
                </form>

                <div className="btm__text">
                    <p>Forgot Password</p>
                   <Link href="/SignUp">
                        <p>Sign Up</p>
                   </Link>
                    
                </div>

            </div>
        </div>
    )
}

export default SignIn
