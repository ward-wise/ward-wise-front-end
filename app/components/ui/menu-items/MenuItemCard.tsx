import Image from 'next/image';

export default function MenuItemCard({
    itemName,
    unitCost,
    unit,
    isVisionZero,
    imgPath,
}: {
    itemName: string;
    unitCost: number;
    unit: string;
    isVisionZero: boolean;
    imgPath: string;
}) {
    return (
        <div className="relative bg-white rounded-md overflow-hidden shadow-md flex">
            <div className="w-1/3">
                <img src={imgPath} alt={itemName} className="h-full w-full object-cover" />
            </div>
            <div className="w-2/3 py-6 pl-6 pr-4">
                <h2 className="text-xl font-bold">{itemName}</h2>
                <p className="text-gray-500 mt-2">${unitCost.toLocaleString()} per {unit}</p>
            </div>

            {isVisionZero &&
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
            }
        </div>
    );
}
