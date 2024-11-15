import { FcGoogle } from "react-icons/fc";
// import useAuth from "../../hooks/useAuth";

export default function GoogleLogin() {
    // const { googleLogin } = useAuth();

    const handleGoogleSignIn = () => {
        googleLogin();
    };
    return (
        <div
            onClick={handleGoogleSignIn}
            className=" bg-green-400 px-5 py-3 rounded-md flex justify-center items-center"
        >
            <FcGoogle className="text-xl"></FcGoogle>
            <button className="text-white font-semibold">Google</button>
        </div>
    );
}