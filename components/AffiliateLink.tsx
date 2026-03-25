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
        bg-black text-white
        px-5 py-2.5
        rounded-lg
        text-sm font-medium
        transition
        hover:bg-gray-800
        active:scale-95
        ${className}
      `}
        >
            {children}
        </a>
    );
}