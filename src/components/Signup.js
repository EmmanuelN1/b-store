import "./SignIn.css"

function Signup() {
    return (
        <div className="signup" >
            <Image  className="signup__logo" src={logo} alt="logo"/>


            <div className="signup__container">
                
                <h1>Sign Up</h1>
                
                <form>

                    <h5>FullName</h5>
                    <input type="text" />

                    <h5>Email</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button>Sign <Up></Up></button>
                </form>

                <div className="btm__text">
                    <p>
                        <input type="check"/>

                       <span className="t-c"> Agree to our Terms and Condition 
                       </span>

                    </p>
                <Link href="/SignUp">
                        <p>Sign Up</p>
                </Link>
                    
                </div>

            </div>
        </div>
            

    )
}

export default Signup;
