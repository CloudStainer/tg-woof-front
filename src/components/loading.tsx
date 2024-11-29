'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Loading: React.FC = () => {

    const [loading, setLoading] = useState<number>(0);
    const router = useRouter();

    useEffect(() => {
        if (loading < 100) {
            const timer = setTimeout(() => {
                setLoading(loading + 1);
            }, 20);
            
            // Clear the timeout if the component unmounts or loading changes
            return () => clearTimeout(timer);            
        }
        else {
            router.push("/home");
        }
    }, [loading, router]);

    return (
        <div className="relative flex flex-col items-center justify-center h-screen  bg-radial-gradient pt-32 pb-40">
            <Image src={`/assets/footprinter.png`} width={200} height={200} alt="" />
            <div className="flex flex-col w-[75vw]">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-[#97CDFF] h-2.5 rounded-full" style={{"width": `${loading}%`}}></div>
                </div>
                <div>
                    <span className="text-white float-right">{`${loading}%`}</span>
                </div>
            </div>
            <div className="flex justify-center">
                <span className="text-2xl text-[#97CDFF]">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;