import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import { Link } from "react-router-dom";
const UserAuthForm = ({type}) => {
    return (
        <section className='h-cover flex items-center justify-center'>
            <form className="w-[80%] max-w-[400px]">
                <h1 className="text-4xl font-gelasio capitalize text-center mb-16">
                    {type === "sign-in" ? "Welcome back cutie❤️" : "Join us today!✨"}
                </h1>

                {
                    type != "sign-in" ? <InputBox
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        icon="fi-rr-user"
                    /> 
                    : ""
                }

                <InputBox
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    icon="fi-rr-envelope"
                />

                <InputBox
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    icon="fi-rr-lock"
                />

                <button className="btn-dark center mt-14">
                    {type === "sign-in" ? "Sign In" : "Sign Up"}
                </button>

                <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black text-bold">
                    <hr className="w-1/2 border-black"/>
                     <p>or</p>
                    <hr className="w-1/2 border-black"/>
                </div>

                <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
                    <img src={googleIcon} alt="google-icon" className="w-5 mr-2"/>
                    Continue with Google
                </button>

                {
                    type == "sign-in" ? 
                    <p className="text-center mt-6 text-dark-grey text-xl">Don't have an account? <Link to="/signup" className="underline text-black text-xl ml-1">Sign Up</Link></p> :
                    <p className="text-center mt-6 text-dark-grey text-xl">Already have an account? <Link to="/signin" className="underline text-black text-xl ml-1">Sign In</Link></p>
                }
            </form>
        </section>
    )
}

export default UserAuthForm;