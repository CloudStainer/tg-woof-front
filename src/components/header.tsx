'use client';

import Image from "next/image";
import { bot_link } from "@/config/index";

const Header:React.FC = () => {
    const onClose = () => {
        window.location.href = bot_link
    }
    return (
        <div className="fixed top-0 flex justify-between items-center p-5 z-10 w-screen">
            <button className="text-white" onClick={onClose}><span>Close</span></button>
            <div className="flex flex-col gap-1 justify-center items-center">
                <div className="flex gap-1 justfiy-center items-center">
                    <span className="text-white">AiAkita</span>
                    <Image src={`/assets/footprinter.png`} width={20} height={20} alt="footprint image" />
                    <Image src={`/assets/tick.png`} width={10} height={10} alt="tick image" />
                </div>
            </div>
        </div>
    )
}

export default Header;