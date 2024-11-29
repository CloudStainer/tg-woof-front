/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import ConnectButton from "../basicComponents/ConnectButton";
import { useWalletContext } from "../basicComponents/Web3Context";
import Background from "../basicComponents/Background";

const SelectWalletPage = () => {
  const { walletAddress } = useWalletContext();
  const [personalData, setPersonalData] = useState<any>(null);
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
    fetchPersonalData();
  }, [walletAddress]);

  return (
    <Background>
      <div className="text-center my-4">
        <h2 className="text-lg font-semibold">Select a Wallet</h2>
        <p className="text-xs text-gray-400 mt-2">
          connect your wallet to get exchange paws.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <ConnectButton />
      </div>
      <div className="text-center my-6">
        <h2 className="text-lg font-semibold">Refer to Earn</h2>
        <p className="text-xs text-gray-400 mt-2">
          Share your link with friends and get paws.
        </p>
      </div>
      <div className="flex flex-col items-center mb-20">
        <div className="bg-[#2d2d2d] py-4 px-10 rounded-xl mx-4 flex items-center justify-between text-white">
          {loading ? (
            <p>Loading...</p>
          ) : !walletAddress || walletAddress === undefined ? (
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
                      {personalData.wallet_address?.substring(0, 5) +
                        "..." +
                        personalData.wallet_address?.substring(
                          personalData.wallet_address.length - 5,
                          personalData.wallet_address.length
                        ) || "........."}{" "}
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
      </div>
      </Background>
  );
};

export default SelectWalletPage;
