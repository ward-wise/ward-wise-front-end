import Link from "next/link";
import { MenuItem } from "../navigation";

export default function Sidebar({
    isOpen,
    toggle,
    menuItems,
}: {
    isOpen: boolean;
    toggle: () => void;
    menuItems: MenuItem[];
}) {
    return (
        <>
            <div
                className={`fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-50 md:hidden ${isOpen ? "" : "hidden"}`}
            >
                <button className="absolute right-0 p-5" onClick={toggle}>
                    <CloseIcon />
                </button>

                <ul className="text-center leading-relaxed text-xl flex flex-col gap-y-8">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path} onClick={toggle}>
                                <p>{item.label}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};


function CloseIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
        </svg>
    );
}