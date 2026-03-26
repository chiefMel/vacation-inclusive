"use client";

import { useState } from "react";

type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export const buttonStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100",
};

export default function AffiliateLink({
    href,
    children,
    className = "",
}: Props) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);

        // Future: replace with real analytics
        console.log("Affiliate click:", href);
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            onClick={handleClick}
            className={`
  inline-block
  px-6 py-3
  rounded-lg
  text-sm font-medium
  transition
  active:scale-95
  ${className || "bg-black text-white hover:bg-gray-800"}
`}
        >
            {children}
        </a>
    );
}