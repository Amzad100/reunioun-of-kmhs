import Lottie from "lottie-react";
import ani from "./signup.json";
// import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";
// import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function SignUp() {
    // useTitle("SignUP");
    // const { createUser, updateUser, sendVerificationEmail } = useAuth();
    const navigate = useNavigate();
    const [errorMessage, setError] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleSignUp = (data) => {
        const { name, email, password } = data;
        console.log(name, email, password);

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                reset();
                Swal.fire({
                    icon: "success",
                    title: "SignUp successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            });
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 px-3 py-5">
                <div>
                    <Lottie className="lg:h-[600px]" animationData={ani}></Lottie>
                </div>
                <div className="flex justify-center items-center lg:py-[5%]">
                    <form
                        className="max-w-sm w-full text-center"
                        onSubmit={handleSubmit(handleSignUp)}
                    >
                        <div className="form-control">
                            <h1 className="text-3xl font-semibold text-center my-5 border-b-2 pb-2 border-[#f4976c]">
                                Registration Now
                            </h1>

                            <label className="label">
                                <span className="label-text font-semibold">
                                    *Enter Your Email
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                        message: "Invalid email address",
                                    },
                                })}
                                className="input input-bordered input-accent w-full"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-left mt-1">
                                    {errors.email.message}
                                </p>
                            )}

                            <label className="label">
                                <span className="label-text font-semibold">
                                    *Choose Password
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[A-Z])(?=.*\W)/,
                                        message:
                                            "Password must contain at least one number, one uppercase letter, and one symbol",
                                    },
                                })}
                                className="input input-bordered input-accent w-full"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-left mt-1">
                                    {errors.password.message}
                                </p>
                            )}

                            <label className="label">
                                <span className="label-text font-semibold">
                                    *Enter Your Name
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                                className="input input-bordered input-accent w-full"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-left mt-1">
                                    {errors.name.message}
                                </p>
                            )}

                            <div className="text-center mt-[4%]">
                                <button type="submit" className="my-btn">
                                    SignUP
                                </button>
                            </div>

                            {errorMessage && (
                                <p className="text-red-500 text-center mt-3">{errorMessage}</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}