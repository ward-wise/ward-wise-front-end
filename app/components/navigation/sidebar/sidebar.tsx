import Link from "next/link";
import { MenuItem } from "../navigation";
import { CloseIcon } from "../../ui/SVGIcons";

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