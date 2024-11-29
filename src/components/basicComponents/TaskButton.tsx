/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  text: string;
  image: string;
  status: boolean;
  transactionMethod: number;
  getDailyPaws: any;
}

const TaskButton: React.FC<Props> = ({ text, image, status, transactionMethod, getDailyPaws }) => {

  return (
    <button className="flex items-center justify-between w-full px-4 py-2 bg-[#1a1a1aff] rounded-lg text-white">
      <div className="flex items-center">
        <img src={image} alt={text} className="mr-4 w-6 h-6" />
        <span className="text-sm">{text}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">+1,000 Paws</span>
        {status ? (
          <svg            
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 50 50"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.75"
            >
              <path
                stroke="#344054"
                d="m14.583 20.063l4.688 4.687l7.812-7.812"
              />
              <path
                stroke="#306cfe"
                d="M33.333 6.25h-25c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.084 2.083 2.084h25c1.15 0 2.084-.933 2.084-2.084v-25c0-1.15-.933-2.083-2.084-2.083"
              />
              <path
                stroke="#306cfe"
                d="M14.583 43.75h27.084a2.083 2.083 0 0 0 2.083-2.083v-31.25"
              />
            </g>
          </svg>
        ) : (
          <svg
            onClick={() => getDailyPaws(transactionMethod)}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                fill="url(#tokenBrandedDomi0)"
                d="M4.353 7.588c-.47-.235-.782-.882-.882-1.176c.706.47 2.453.588 3.235.588c-.47.235-.782.488-.882.588c.706-.235 1.864-.294 2.353-.294a4.7 4.7 0 0 1 3.529 1.47c-.47.707-.588 1.665-.588 2.06c-.165-1.177-1.177-2.942-2.941-2.942c-1.412 0-2.353.983-2.647 1.47l.588-.293v5c-.236 0-.488-.194-.588-.294c.47 1.176 1.764 1.764 2.647 1.764c.988 0 1.67-.405 2.135-.959c.882-1.058.918-2.458 1.159-3.747c.423-2.294 2-3.529 4.353-3.529s4.411 1.765 4.411 4.118c0 3.059-1.47 4.706-4.411 4.706c-1.647 0-2.942-.883-3.53-1.765c.47-.47.783-1.57.883-2.059c.294.882 1.176 2.647 2.647 2.647c1.764 0 2.647-1.176 2.647-3.965c0-2.235-1.471-3.094-2.647-3.094c-1.765 0-2.824 1.636-3.089 3.095c-.14.764-.247 1.67-.44 2.2c-1.177 3.235-3.824 2.94-5.589 2.94c-1.412 0-2.159 1.177-2.353 1.765z"
              />
              <path
                fill="url(#tokenBrandedDomi1)"
                d="M6.118 8.676v-.5l-.588.295c-.295-.295-.295-.589-.295-.883L3.471 6.412c.1.294.411.94.882 1.176v10.294c.194-.588.941-1.764 2.353-1.764h.412c1.435.017 3.282.04 4.494-1.63l.2-.294c.141-.235.27-.488.388-.77l-.494-.248c-.294.783-1.294 2.412-2.941 2.647c-1.647.236-2.841-.294-3.235-.588l-.118-.294l.412-.294h-.589c-.235-.706-.235-1.412 0-1.176c.236.235.489.294.589.294c0-.236-.394-.689-.589-.883v-2.647s-.294-.294-.294-.588c0-.47.394-.194.589 0l.294-.441l-.294.147c.111-.182.305-.435.588-.677"
              />
              <path
                fill="url(#tokenBrandedDomi2)"
                d="M16.07 14.935c1.6-.112 2.4-1.306 2.4-3.959c0-2.235-1.47-3.094-2.646-3.094c-.1 0-.2 0-.294.018v-.018c2.058-.294 4.117 1.177 4.117 3.53c0 3.235-2.059 4.117-3.53 4.117z"
              />
              <path
                fill="url(#tokenBrandedDomi3)"
                d="m16.118 16.112l-.295.006c-1.647 0-2.94-.883-3.53-1.765h.883c.294.394 1.294 1.176 2.941 1.176z"
              />
              <path
                fill="url(#tokenBrandedDomi4)"
                fillRule="evenodd"
                d="M12 20.824a8.824 8.824 0 1 0 0-17.649a8.824 8.824 0 0 0 0 17.649M12 22a10 10 0 1 0 0-20a10 10 0 0 0 0 20"
                clipRule="evenodd"
              />
              <defs>
                <linearGradient
                  id="tokenBrandedDomi0"
                  x1="22"
                  x2="3.754"
                  y1="11.744"
                  y2="11.744"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#f3d856" />
                  <stop offset=".28" stop-color="#f8ee5d" />
                  <stop offset=".56" stop-color="#c8742a" />
                  <stop offset=".8" stop-color="#f7ee5d" />
                  <stop offset="1" stop-color="#805321" />
                </linearGradient>
                <linearGradient
                  id="tokenBrandedDomi1"
                  x1="22.216"
                  x2="4.022"
                  y1="11.744"
                  y2="11.744"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#cc7e2e" />
                  <stop offset=".67" stop-color="#ed7e1c" />
                  <stop offset=".88" stop-color="#6e4720" />
                  <stop offset=".97" stop-color="#613d19" />
                  <stop offset="1" stop-color="#f47429" />
                </linearGradient>
                <linearGradient
                  id="tokenBrandedDomi2"
                  x1="20.572"
                  x2="6.286"
                  y1="10.518"
                  y2="10.518"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".21" stop-color="#6b4822" />
                  <stop offset=".38" stop-color="#ed7022" />
                  <stop offset=".73" stop-color="#f8b23c" />
                  <stop offset="1" stop-color="#f7eb5c" />
                </linearGradient>
                <linearGradient
                  id="tokenBrandedDomi3"
                  x1="2"
                  x2="22"
                  y1="5.333"
                  y2="5.333"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#f18023" />
                  <stop offset=".46" stop-color="#f59c1f" />
                  <stop offset=".99" stop-color="#f8ed5d" />
                </linearGradient>
                <linearGradient
                  id="tokenBrandedDomi4"
                  x1="4.059"
                  x2="21.412"
                  y1="7"
                  y2="17.588"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#f8fbee" />
                  <stop offset=".22" stop-color="#fff7a0" />
                  <stop offset=".44" stop-color="#cfa34f" />
                  <stop offset=".72" stop-color="#884a1d" />
                  <stop offset=".88" stop-color="#8f5114" />
                  <stop offset="1" stop-color="#5c1c01" />
                </linearGradient>
              </defs>
            </g>
          </svg>
        )}
      </div>      
    </button>
  );
};

export default TaskButton;
