"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Background from "@/components/basicComponents/Background";
import { useWalletContext } from "../basicComponents/Web3Context";
import LeaderboardItem from "@/components/basicComponents/LeaderboardItem";
import ConnectButton from "../basicComponents/ConnectButton";

const Leaderboard: React.FC = () => {
  const { walletAddress, setWalletAddress } = useWalletContext();
  const [personalData, setPersonalData] = useState<any>(null);
  const [totalData, setTotalData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!walletAddress) {
      setLoading(false);
      return;
    }

    const fetchPersonalData = async () => {
      try {
        const result = await fetch(`/api/personaldata/${walletAddress}`);
        if (result.ok) {
          const data = await result.json();
          setPersonalData(data);
        }
      } catch (error) {
        console.error("Error fetching personal data:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchTotalData = async () => {
      try {
        const result = await fetch(`/api/totaldata`);
        if (result.ok) {
          const data = await result.json();
          setTotalData(data);
        }
      } catch (error) {
        console.error("Error fetching personal data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonalData();
    fetchTotalData();
  }, [walletAddress]);

  return (
    <Background>
      <div className="bg-[#2d2d2d] p-2 rounded-xl mx-4 flex items-center justify-center text-white">
        {loading ? (
          <p>Loading...</p>
        ) : !walletAddress ||
          walletAddress === undefined ||
          walletAddress === "" ||
          walletAddress === null ? (
          <ConnectButton />
        ) : (
          personalData && (
            <>
              <div className="flex items-center">
                <div className="bg-blue-200 text-[#001b33ff] font-semibold rounded-full w-8 h-8 flex items-center justify-center">
                  WA
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold">
                    {walletAddress?.substring(0, 5) +
                      "..." +
                      walletAddress?.substring(
                        walletAddress.length - 5,
                        walletAddress.length
                      ) || "Orinaf Heren"}{" "}
                    (YOU)
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Total Paws</p>
                <p className="text-lg font-semibold">
                  {personalData.token_amount || "0.00"}
                </p>
              </div>
            </>
          )
        )}
      </div>
      <div className="mt-2 px-5">
        <div className="max-h-[65vh] min-h-[50vh] flex flex-col gap-2 bg-[#121111] rounded-xl border border-slate-500 shadow shadow-[#97CDFF] p-3 overflow-y-auto">
          <div className="text-center">
            <h2 className="text-lg font-semibold">Leaderboard</h2>
            <p className="text-xs text-gray-400 mt-2">
              Get to know who earned more paws.
            </p>
          </div>
          {totalData.length === 0 && <div>Loading....</div>}
          {totalData &&
            totalData.length > 0 &&
            totalData.map((data: any, index: number) => (
              <LeaderboardItem
                key={index}
                rank={index + 1}
                initial="EK"
                name={
                  data.wallet_address?.substring(0, 5) +
                  "..." +
                  data.wallet_address?.substring(
                    data.wallet_address.length - 5,
                    data.wallet_address.length
                  )
                }
                points={data.token_amount}
              />
            ))}
        </div>
      </div>
    </Background>
  );
};

export default Leaderboard
