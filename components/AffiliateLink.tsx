"use client";

import { useState } from "react";

type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
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
  ${className || "bg-blue-600 text-white hover:bg-blue-700"}
`}
        >
            {children}
        </a>
    );
}