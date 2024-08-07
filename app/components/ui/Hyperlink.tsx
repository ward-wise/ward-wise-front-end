import Link from "next/link";

export function Hyperlink({ className, href, children }: { className?: string, href: string, children: string }) {
    return (
        <Link
            href={href}
            // target="_blank" //use to open in new tab
            style={{color: "rgb(73, 186, 231)"}}
            className={`${className || ''}`}
        >
            {children}
        </Link>
    );
}