import { FaGithub } from "react-icons/fa";

export default function GitHubLogin() {
    return (
        <div className=" bg-cyan-400 px-5 py-3 rounded-md flex justify-center items-center">
            <FaGithub className="text-xl text-black"></FaGithub>
            <button className="text-black font-semibold">GitHub</button>
        </div>
    );
}