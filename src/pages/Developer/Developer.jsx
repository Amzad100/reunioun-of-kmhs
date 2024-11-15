import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Developer() {
    return (
        <div className="hero min-h-screen">

            <div className="hero-content flex-col lg:flex-row">
                <img
                    width='300px'
                    height='500px'
                    src="https://i.ibb.co/JBgWM4D/IMG-20241101-121009-Bokeh-removebg-preview.png"
                    className="max-w-sm rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    alt="Profile"
                />
                <div className="lg:mr-10 text-center lg:text-left">
                    <div>
                        <h1 className="text-3xl font-bold">Hello,</h1>
                        <h1 className="text-3xl font-bold">I am <TypeAnimation
                            sequence={[
                                'Mohammad Amzadul Islam',
                                1000, 
                                'From SSC Batch 2018',
                                1000,
                                'From Kutubdia Model High School',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block', color: 'blue' }}
                            repeat={Infinity}
                        /></h1>
                    </div>
                    <h1 className="text-5xl font-extrabold mb-6 border-b-4 border-white inline-block">About Me</h1>
                    <div className="mt-4">
                        <p className="font-semibold text-xl mb-2">Name: <span className="font-normal">Mohammad Amzadul Islam</span></p>
                        <p className="font-semibold text-xl mb-2">Education: <span className="font-normal">B. Sc. in Computer Science and Engineering</span></p>
                        <p className="font-semibold text-xl mb-2">University: <span className="font-normal">Port City International University, Chattagram, Bangladesh</span></p>
                        <p className="font-semibold text-xl mb-2">Email: <span className="font-normal">amzadulislam100@gmail.com</span></p>
                        <p className="font-semibold text-xl mb-2">Phone: <span className="font-normal">+8801626662237</span></p>
                    </div>
                    <div className="flex justify-center lg:justify-start mt-6 text-blue-500 space-x-6">
                        <Link to="https://www.facebook.com/profile.php?id=100076684506004" className=" text-3xl"><FaFacebook /></Link>
                        <Link to="https://www.linkedin.com/in/amzad100/" className=" text-3xl"><FaLinkedin /></Link>
                        <Link to="https://www.twitter.com" className=" text-3xl"><FaTwitter /></Link>
                        <Link to="https://www.instagram.com/mohammadamzadulislam/" className=" text-3xl"><FaInstagram /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
