/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import { useWalletContext, WalletProvider } from "./Web3Context";

interface AirdropItemProps {
  imageSrc: string;
  validTill: Date;
  pawsAirdrop: any;
  airdropMethod: number;
  description: string;
  buttonText: string;
  title: string;
}

const AirdropItem: React.FC<AirdropItemProps> = ({
  imageSrc,
  validTill,
  pawsAirdrop,
  airdropMethod,
  description,
  buttonText,
  title
}) => {
  const { walletAddress, setWalletAddress } = useWalletContext();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const distance = validTill.getTime() - now.getTime();
      if (distance <= 0) {
        clearInterval(intervalId);
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft({ days, hours, minutes });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [validTill]);

  const getAirdrop = async (airdrop: any) => {
    try {
      const result = await fetch(`/api/airdrop/${walletAddress}`, {
        method: "PUT",
        headers: {},
        body: JSON.stringify({
          airdropMethod: airdropMethod,
          airdrop: airdrop,
        }),
      });
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <div className="bg-[#1a1a1aff] p-4 rounded-xl mx-4 mt-4 flex flex-col items-center text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 64 64"
      >
        <path
          fill="#dbb471"
          d="M54 46.9C54 59 44.2 59 32 59s-22 0-22-12.1S19.9 15 32 15s22 19.7 22 31.9"
        />
        <g fill="#89664c">
          <path
            d="M54 46.9c0-4.1-1.1-9.1-3.1-13.9c.4 3.1-.4 8.6-9.9 10.7c-13.5 2.9-6.5 6.7-11.8 7.2c-4.5.4-16.5-1.4-18.9-8.2c-.2 1.5-.4 2.9-.4 4.3c.1 12 10 12 22.1 12s22 0 22-12.1"
            opacity="0.5"
          />
          <path d="M37.9 41.1c-.4-2-2.1-2.6-3.9-2.7v-2.8c.5.2 1.1.5 1.5.8c.8.5 1.6-.8.8-1.3c-.7-.4-1.5-.8-2.3-1.1v-3.3c0-1-1.5-1-1.5 0v2.9q-1.2-.15-2.4 0c-.1-.7-.3-1.4-.5-2.1c-.2-1-1.7-.6-1.4.4c.2.7.3 1.4.5 2.1c-.1 0-.1 0-.2.1c-2 .8-3.3 2.8-1.8 4.7c.7.9 1.6 1.2 2.6 1.4c.1 1.3.1 2.6.1 3.9c-.7-.4-1.3-1-1.8-1.5c-.7-.7-1.7.4-1.1 1.1c.9 1 1.9 1.7 2.9 2.2c0 1.1.1 2.2.2 3.3c.1 1 1.6 1 1.5 0s-.2-1.9-.2-2.9c.6.1 1.2.1 1.8.1c.1 1 .2 2 .3 3.1c.1 1 1.6 1 1.5 0c-.1-1.1-.2-2.2-.3-3.4c2.2-.8 4.2-2.5 3.7-5m-5.4-6v3.3c-.5 0-.9.1-1.3.1h-.5l-.3-3.6c.7 0 1.4.1 2.1.2m-3.6 3.2c-.4-.1-.8-.4-1.2-.7c-.9-.9.4-1.7 1.2-2.1c.1 1 .2 1.9.3 2.9c-.1 0-.2 0-.3-.1m3.3 6.4c-.5.1-.9 0-1.3-.1c-.1-1.5-.1-3-.1-4.6c.6 0 1.2-.1 1.8-.1c0 1.6.1 3.1.1 4.7c-.2.1-.3.1-.5.1m3.3-1.1c-.4.3-.9.5-1.3.7c-.1-1.5-.1-2.9-.1-4.4h.5c1.9.4 2.4 2.5.9 3.7" />
        </g>
        <path fill="#699635" d="M34 55h-2.3v4l9.3 5l21-6.5V54l-7.7-4.5z" />
        <path
          fill="#83bf4f"
          d="M32 52.7s2.4 3.9 9.2 7.3c0 0 10.6-.5 20.8-7.3c0 0-5.9-2.9-7.6-6.7c0 0-4 5.6-22.4 6.7"
        />
        <path
          fill="#699635"
          d="m27.5 54.9l2.2-.1l.3 3.7l-8.7 5.5L.4 59.5l-.3-3.3l7.1-4.9z"
        />
        <path
          fill="#83bf4f"
          d="M29.2 52.6s-2.1 3.9-8.4 7.6c0 0-10.3.3-20.8-5.2c0 0 5.6-3.2 6.9-7c0 0 4.4 5 22.3 4.6"
        />
        <path
          fill="none"
          stroke="#699635"
          strokeMiterlimit="10"
          d="M24.2 53.7s-.3.8 1.1.9l-3.7 3.1s-2.2-.2-2.7 1.3c0 0-9-1-14.8-3.6c0 0 1.2-.9-.3-1.5c0 0 1.7-1.2 2.1-2.3c0 0 1.6.2 2.1-1c.2-.1 6.2 3.5 16.2 3.1z"
        />
        <ellipse cx="8.8" cy="53.8" fill="#699635" rx="1.9" ry="1.3" />
        <path
          fill="#f9f3d9"
          d="M19 52.2s-2.3 3-7.3 7.1L12 62l-3.5-.8l-.2-2.9s5.1-4.7 6.2-7c-.1 0 1.7.6 4.5.9m23.1-.7s.9 2.4 7.7 6.8v2.9l3.9-1.2v-3s-4.7-3.3-7.5-6.6z"
        />
        <path
          fill="#699635"
          d="m36.4 48.3l-2.2-.1l-.2 4.1l8.9 5.7l20.9-5.7l.1-3.6l-7.3-5.1z"
        />
        <path
          fill="#83bf4f"
          d="M34.6 45.8s2.2 4.2 8.7 8c0 0 10.4 0 20.7-6.4c0 0-5.7-3.3-7.1-7.4c0 0-4.3 5.6-22.3 5.8"
        />
        <path
          fill="none"
          stroke="#699635"
          strokeMiterlimit="10"
          d="M39.1 46.9s.5.8-1.1 1.1l4.2 3.3s2.4-.6 3.2.8c0 0 10-1.8 14.6-4.2c0 0-1.5-.7 0-1.6c0 0-1.8-1.5-2.5-2.5c0 0-1.7.5-2.6-.7c0 .1-3.6 3.3-15.8 3.8z"
        />
        <path
          fill="#699635"
          d="M46.8 49.4c-.4.5-1.7.7-2.8.4s-1.6-1-1.2-1.5s1.7-.7 2.8-.4s1.6.9 1.2 1.5"
        />
        <path
          fill="#f9f3d9"
          d="M44.8 45s2.4 3.2 7.5 7.5l-.1 3l3.5-1l.1-3.2s-5.2-5-6.5-7.4c.1 0-1.6.7-4.5 1.1"
        />
        <path
          fill="#dbb471"
          d="M46 2c0 6.1-7.9 16-14 16S18 9.1 18 3s.9 0 7 0c.9 0 5.1-3 7-3c1.3 0 5 3 7 3c5.3 0 7-5.6 7-1"
        />
        <path
          fill="#89664c"
          d="M30.2 13.3c-.6.4-3.5.1-4.4.8c-1.2.9.5 3-.7 4.3c-2.4 2.4-4.3 5.1-3.7 6.6c1 2.6 2.9-4.8 4.6-2s1.4-1.9 4 .5s.4-4.3 2.9-1.4s2.6 6.2 4.4 6.2c2.1 0-2.2-7.9.6-6s5.9 1.2 3.1-1.7c-.9-.9-2.1-2.5-3.5-3.9c-.5-.5-.1-3.1-.6-3.5c-.6-.5-2.1 1.1-2.7.8c-1.2-.6-.8.5-2.6.8c-1.2.4-.2-2.3-1.4-1.5"
        />
        <path
          fill="#e8e8e8"
          d="M18.7 19.2c3.9-3.7 11-1.6 15.2.2c4.1 1.8 6.6-3.9 4-6.8c-1.5-1.7-3.9.3-4.8 1.5c-1 1.2-1.8 2.5-2.9 3.7c-1.6 1.8-5.5.3-4.3-2.2c1.3-2.6 6.8.4 8.6.9c3.5 1 7.2 1.4 10.7.1c1.2-.4.7-2.4-.5-1.9c-3.9 1.4-7.8.5-11.5-.7c-1.9-.6-4.9-2.2-6.9-1.3c-5.7 2.7-.4 10.4 4.4 7.4c1.1-.7 1.8-1.8 2.6-2.8c.5-.6 3-4.4 3.6-2.5c.3 1 0 2.8-1.1 3.1c-.7.3-2.1-.7-2.8-.9c-1.3-.5-2.6-.9-4-1.2c-3.7-.8-8.7-.6-11.6 2.1c-1 .8.4 2.2 1.3 1.3"
        />
        <path
          fill="#89664c"
          d="M44.8.5C43.8 1.3 42 3 39 3c-2 0-5.7-3-7-3c-1.9 0-6.1 3-7 3c-3.3 0-5.1-1.7-6-2.4c0 0 1.1 4.5 4.5 6.8C26 9 25.7 7.1 27 5.3s2.2-2.7 4.5 1.8c1.2 2.5 3.5-6.8 5.3-3.8c3.3 5.5 4.5 2.5 8-2.8"
        />
        <path
          fill="#dbb471"
          d="m52.4 52.4l-.1 3l3.5-1l.1-3.2c0 .1-2.1.9-3.5 1.2m-2.6 6v2.9l3.9-1.2v-3c-.1-.1-1.1.5-3.9 1.3m-38.1.8L12 62l-3.5-.8l-.2-2.9c-.1 0 1.3.5 3.4.9"
        />
      </svg>
      <p className="text-center text-xs text-gray-400 mt-2">
        { title }
        {/* Use a consistent locale */}
      </p>
      <p className="text-center text-sm font-semibold mt-2">{description}</p>
      <div className="flex justify-around w-full mt-4">
        <div className="flex flex-col items-center">
          <div className="bg-blue-900 rounded-md w-12 h-12 flex items-center justify-center">
            <span className="text-lg font-semibold">{timeLeft.days}</span>
          </div>
          <span className="text-xs mt-1">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-900 rounded-md w-12 h-12 flex items-center justify-center">
            <span className="text-lg font-semibold">{timeLeft.hours}</span>
          </div>
          <span className="text-xs mt-1">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-900 rounded-md w-12 h-12 flex items-center justify-center">
            <span className="text-lg font-semibold">{timeLeft.minutes}</span>
          </div>
          <span className="text-xs mt-1">Minutes</span>
        </div>
      </div>
      {
        !buttonDisabled ? (
          <button
            className='w-full mt-4 py-2 rounded-md'
            onClick={() => {
              getAirdrop(pawsAirdrop);
              setButtonDisabled(true);
            }}
          >
            {buttonText}
          </button>  
        ) : (
          <span className="mt-8 p-2">
            Comming Soon
          </span>
        )
      }
    </div>
  );
};

export default AirdropItem;