'use client';

import React from 'react';
import Image from 'next/image';

interface StatCardProps {
    image?: any;
    title?: string;
    subtitle?: string;
}

const StatCard: React.FC<StatCardProps> = ({ image, title, subtitle }) => {
    return (
        <div className={`flex flex-col gap-1 p-2 bg-[#001B33] border border-[#97CDFF] rounded-lg`}>
            <div className="flex gap-1">
                <Image src={image} width={20} height={20} alt='' />
                <span className="text-white text-lg font-semibold">{title ? title : 0}</span>
            </div>
            <div className="flex justify-between items-center opacity-50 text-sm">
                <span className='text-white text-sm'>{subtitle && subtitle}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                    <path fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="17.1" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z" />
                    <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="17.1" d="M256 176v160m80-80H176" />
                </svg></span>
            </div>
        </div>
    )
}

export { StatCard };