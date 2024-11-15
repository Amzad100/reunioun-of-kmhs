import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ani from "./login.json";
import GoogleLogin from "../Login-Registration/GoogleLogin";
import GitHubLogin from "../Login-Registration/GitHubLogin";
// import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";
// import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

export default function Login() {
    // useTitle("Login");
    // const { signIn, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [errorMessage, setErrorMessage] = useState('');

    const from = location?.state?.from?.pathname || "/";

    const handleSignIn = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        try {
            const result = await signIn(email, password);
            const user = result.user;
            console.log(user);
            Swal.fire({
                icon: "success",
                title: "Login successfully",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            console.log(error);
            setErrorMessage("Invalid email or password. Please try again.");
        }
    };

    // useEffect(() => {
    //     if (user) {
    //         navigate(from, { replace: true });
    //     }
    // }, [user, from, navigate]);

    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-3 py-3">
                <div className="flex justify-center items-center lg:py-[5%] px-[2%] md:w-1/2">
                    <form onSubmit={handleSignIn} className="max-w-sm w-full text-center">
                        <div className="form-control">
                            <h1 className=" text-3xl font-semibold text-center my-5 border-b-2 border-[#f4976c] py-2">
                                Login Now
                            </h1>

                            {errorMessage && (
                                <p className="text-red-500 text-center mb-4">{errorMessage}</p>
                            )}

                            <label className="label">
                                <span className="label-text font-semibold">
                                    *Enter Your Email
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                className="input input-bordered input-accent w-full"
                            />

                            <label className="label">
                                <span className="label-text font-semibold">
                                    *Enter Your Password
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="input input-bordered input-accent w-full"
                            />

                            <div className="mt-4">
                                <p>
                                    New User?{" "}
                                    <Link to="/signup" className="font-semibold">
                                        Sign Up
                                    </Link>{" "}
                                </p>
                            </div>

                            <div className="text-center mt-[4%]">
                                <button type="submit" className="my-btn">
                                    Login
                                </button>
                            </div>
                            <div className="divider">Or Sign in With</div>
                            <div className="flex justify-around items-center gap-2">
                                <div>
                                    <GoogleLogin />
                                </div>
                                <div>
                                    <GitHubLogin />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2">
                    <Lottie
                        className="h-[400px] lg:h-[600px]"
                        animationData={ani}
                    ></Lottie>
                </div>
            </div>
        </div>
    );
}