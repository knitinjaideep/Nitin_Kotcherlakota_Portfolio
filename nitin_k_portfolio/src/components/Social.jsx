import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import Link from "next/link";
const socials = [
    {icon:<FaGithub />, path: ""},
    {icon:<FaLinkedinIn />, path: ""}
]

const Social= () => {
    return <div className="flex gap-6">
        {socials.map((item, index) => {
            return (
            <Link key={index} href={item.path} className="w-9 h-9">
                {item.icon}
            </Link>
            );
        })}
    </div>
};

export default Social;