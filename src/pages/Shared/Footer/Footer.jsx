import React from 'react'
import { Link } from 'react-router-dom'
import SocialIcon from './SocialIcon'

export default function Footer() {
    return (
        <div>
            <footer className="">
                <div className="bg-[#b4dfe5] my-footer">
                    <div className="footer p-10  text-black flex justify-between flex-col md:flex-row">
                        <div>
                            <img className="h-[40px] md:h-[60px] mb-2 rounded-2xl" src='https://i.ibb.co.com/b6hgCq7/kmhs-Logo-removebg-preview.png' alt="" />
                            <p className="pl-2">
                                Reunioun 2025
                                <br />
                                Kutubdia Model High School
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold text-lg my-text">Services</span>
                                <a className="link link-hover">A</a>
                                <a className="link link-hover">B</a>
                                <a className="link link-hover">C</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold text-lg my-text">Menu</span>
                                <Link to="/" className="link link-hover">
                                    Home
                                </Link>
                                <Link to="/contact" className="link link-hover">
                                    Contact
                                </Link>
                                <Link to="/about" className="link link-hover">
                                    About us
                                </Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold text-lg my-text">Legal</span>
                                <a className="link link-hover">Terms of use</a>
                                <a className="link link-hover">Privacy policy</a>
                                <a className="link link-hover">Cookie policy</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <SocialIcon></SocialIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="bg-[#303c6c] text-[#d2fdff] py-3 text-center">
                    © 2025 Kutubdia Model High School Reunioun. <br /> Developed by Mohammad Amzadul Islam
                </p>
            </footer>
        </div>
    )
}
