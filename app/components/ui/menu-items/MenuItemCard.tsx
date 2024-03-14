import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from '@/app/lib/definitions';

export default function MenuItemCard({ item }: { item: MenuItem }) {
    return (
        <Link href={`alderman-spending-menu/${item.id}`} className="relative bg-white rounded-md overflow-hidden shadow-md flex transition-transform hover:transform hover:scale-105">
            <div className="w-1/3">
                <img src={`/images/menu-items/${item.imgFilename}`} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <div className="w-2/3 py-6 pl-6 pr-4">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-500 mt-2">${item.avgUnitCost.toLocaleString()} per {item.unitMeasurement}</p>
            </div>

            {item.isVisionZeroProject &&
                <VisionZeroBanner/>
            }
        </Link>
    );
}

function VisionZeroBanner() {
    return (
        <>
            <div className="absolute bg-blue-400 z-10 transform rotate-45 right-[-40px] top-[-15px] w-[100px] h-[40px]" />
            <Image
                src="/images/vision_zero_icon.png"
                width={13}
                height={21}
                className="absolute z-20 top-1 right-1 m-[1px]"
                alt="Vision Zero Logo"
            />
        </>
    );
}
