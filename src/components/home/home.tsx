/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import ConnectButton from "../basicComponents/ConnectButton";
import { StatCard } from "@/components/basicComponents/totalCard";
import { useWalletContext } from "../basicComponents/Web3Context";
import Background from "../basicComponents/Background";
import { toast } from "react-toastify";

const Home: React.FC = () => {
  const { walletAddress } = useWalletContext();
  const [analysisData, setAnalysisData] = useState<any>({});
  const [dailyCnt, setDailyCnt] = useState<number>(2000);
  const [paws, setPaws] = useState<number>(0);
  const [isIncrease, setIsIncrease] = useState<boolean>(false);
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    const fetchAnalysisData = async () => {
      try {
        const result = await fetch(`/api/analysis`);
        if (!result.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await result.json();
        setAnalysisData(data);
      } catch (error: any) {
        toast.error(error);
      }
    };

    fetchAnalysisData();
  }, []);

  const fetchPaws = async () => {
    const res = await fetch(`/api/personaldata/${walletAddress}`);
    if (res.ok) {
      const data = await res.json();
      const parsedTokenAmount = parseInt(data.token_amount, 10);
      setDailyCnt(parseInt(data.daily_count, 10));
      if (!isNaN(parsedTokenAmount)) {
        setPaws(parsedTokenAmount);
      } else {
        toast.error("Failed to parse token_amount:", data.token_amount);
      }
    }
  };

  useEffect(() => {
    walletAddress && fetchPaws();
  }, [walletAddress]);

  useEffect(() => {
    const addPaws = async () => {
      try {
        if (dailyCnt === 0) return;
        setDailyCnt(dailyCnt - 1);
        setPaws(paws + 1);

        const response = await fetch(`/api/personaldata/${walletAddress}`, {
          method: "PUT",
          body: JSON.stringify({ daily_count: dailyCnt - 1 }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        await response.json();
      } catch (error: any) {
        walletAddress && fetchPaws();
        // toast.error("Error updating personal data:", error);
      }
    };

    isIncrease && !effect && addPaws();
  }, [effect, isIncrease]);

  return (
    <Background>
      <div className="grid grid-cols-3 gap-2 mb-6">
        <StatCard
          image="/assets/footprinter.png"
          title={`${analysisData.paws_count ?? 0}`}
          subtitle="Daily Paws"
        />
        <StatCard
          image="/assets/footprinter.png"
          title={`${analysisData.earn_amount ?? 0}`}
          subtitle="Earn Paws"
        />
        <StatCard
          image="/assets/footprinter.png"
          title={`${analysisData.total_count ?? 0}`}
          subtitle="Join Community"
        />
      </div>

      {/* Main Number */}
      <div className="flex flex-col items-center mb-10">
        <span className="text-6xl font-bold ">{paws}</span>
        <ConnectButton />
      </div>

      {/* Paw Print Section */}
      <div className="relative flex justify-center mb-10">
        {effect && (
          <div
            className="absolute p-4 text-white text-2xl font-bold rounded-md animate-move-up-slow"
            onAnimationEnd={() => setEffect(false)}
          >
            + 1
          </div>
        )}
        <button
          className={`p-4 text-white rounded relative flex justify-center items-center group/button`}
          onClick={() => {
            if (walletAddress) {
              setEffect(true);
              setIsIncrease(true);
            } else {
              toast.error("Connect Wallet");
            }
          }}
          disabled={dailyCnt <= 0}
        >
          <img
            src="/assets/footprinter.png"
            alt="Paw"
            className="absolute max-w-32 group-hover/button:animate-ping-slow"
          />
          <img
            src="/assets/footprinter.png"
            alt="Paw"
            className="mx-auto w-32 z-10 cursor-pointer"
          />
        </button>
      </div>
    </Background>
  );
};

export default Home;
