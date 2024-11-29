"use client";

import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-1 flex justify-center text-[10px]">
      <div className="flex justify-between gap-9 bg-[0x001B33] rounded-xl shadow shadow-[#97CDFF] p-3 m-3 bg-[#001B33] text-white z-10">
        <Link
          href="/home"
          className="flex flex-col gap-2 justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 512 512"
          >
            <path
              fill={`white`}
              d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
            />
            <path
              fill="white"
              d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"
            />
          </svg>
          <span>Home</span>
        </Link>
        <Link
          href="/leaderboard"
          className="flex flex-col gap-2 justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15 21H9v-8.4a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6zm5.4 0H15v-2.9a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v2.3a.6.6 0 0 1-.6.6M9 21v-4.9a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6v4.3a.6.6 0 0 0 .6.6zm1.806-15.887l.909-1.927a.312.312 0 0 1 .57 0l.91 1.927l2.032.311c.261.04.365.376.176.568l-1.47 1.5l.347 2.118c.044.272-.228.48-.462.351l-1.818-1l-1.818 1c-.233.128-.506-.079-.462-.351l.347-2.118l-1.47-1.5c-.19-.192-.085-.528.175-.568z"
            />
          </svg>

          <span>Leaderboard</span>
        </Link>
        <Link
          href="/airdrop"
          className="flex flex-col gap-2 justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 512 512"
          >
            <path
              fill="white"
              d="M18.78 19.5v79.656c44.684 5.582 81.517 24.966 116.657 47.156l-24.75 20.063L212.47 218.28L184.53 106.5l-25.905 21c-20.225-40.01-42.778-77.73-72.75-108zm277.376 0c-15.624 28.765-29.207 58.126-41.78 88.156l-30.19-6.406l25.94 112.25l67.06-92.5l-29.592-6.28c33.29-34.747 67.597-67.793 108.062-95.22zm197.5 93.844c-37.988 2.482-72.04 19.677-105.03 40.906l-12.47-32.53l-80.062 82.843l114.094 5.937l-13.25-34.563c32.24-.934 64.478 1.827 96.718 21.375zm-194.03 128.03c-5.28.12-10.21 2.416-16.938 9.595l-6.563 6.968l-6.813-6.72c-7.387-7.28-13.216-9.29-19.125-9.03c-5.908.26-12.855 3.367-20.625 9.656l-6.218 5.03l-5.906-5.374c-8.9-8.052-16.485-10.438-23.75-10.063c-5.288.274-10.775 2.266-16.25 5.75l40.968 73.688c15.454 9.452 47.033 13.007 68.75 2.063l39.594-73.344c-7.51-3.062-14.26-6.202-20.094-7.406c-2.112-.437-4.072-.756-5.97-.813a21 21 0 0 0-1.06 0m-89.97 96.19c-18.035 12.742-32.516 34.718-38.125 66.905c-5.435 31.196 3.128 52.265 18.282 66.624c15.155 14.36 37.902 21.737 61 21.437c23.1-.3 46.136-8.31 61.625-22.936c15.49-14.627 24.25-35.426 19.282-65.188c-5.137-30.757-18.4-52.148-35.19-65.094c-28.482 15.056-64.094 11.856-86.874-1.75z"
            />
          </svg>

          <span>Earn</span>
        </Link>
        <Link
          href="/wallet"
          className="flex flex-col gap-2 justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 256 256"
          >
            <path
              fill="white"
              d="M216 64H56a8 8 0 0 1 0-16h136a8 8 0 0 0 0-16H56a24 24 0 0 0-24 24v128a24 24 0 0 0 24 24h160a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-36 80a12 12 0 1 1 12-12a12 12 0 0 1-12 12"
            />
          </svg>
          <span>Wallet</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
