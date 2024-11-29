/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { useWalletContext } from "../basicComponents/Web3Context";
import AirdropItem from "@/components/basicComponents/AirdropItem";
import Background from "../basicComponents/Background";

const AirdropPage = () => {
  const { walletAddress, setWalletAddress } = useWalletContext();

  const [weeklyEndTime, setWeeklyEndTime] = useState<any>();
  const [monthlyEndTime, setMonthlyEndTime] = useState<any>();
  const [weeklyPaws, setWeeklyPaws] = useState<any>(0);
  const [monthlyPaws, setMonthlyPaws] = useState<any>(0);

  useEffect(() => {
    const fetchAirdrop = async () => {
      try {
        const res = await fetch(`/api/airdrop/${walletAddress}`);
        if (res.ok) {
          const data = await res.json();
          setWeeklyEndTime(data.weekly_endtime);
          setMonthlyEndTime(data.monthly_endtime);
          setWeeklyPaws(data.weekly_airdrop);
          setMonthlyPaws(data.monthly_airdrop);
        }
      } catch (e) {
        console.error({ error: e });
      }
    };

    fetchAirdrop();
  });

  return (
    <Background>
      <div className="text-center">
        <h2 className="text-lg font-semibold">Get Airdrop</h2>
        <p className="text-xs text-gray-400">
          Get an Airdrop to earn more paws.
        </p>
      </div>
      <div className="mt-2 h-[60vh] overflow-y-auto rounded-lg">
        <AirdropItem
          imageSrc="/assets/airdrop-image.png"
          validTill={weeklyEndTime ? new Date(weeklyEndTime) : new Date()}
          pawsAirdrop = {weeklyPaws}
          airdropMethod = {9}
          title="Session 1"
          description="Take Home the Paw Airdrop via Paw App on chain summer"
          buttonText="Get Airdrop"
        />
        <AirdropItem
          imageSrc="/assets/airdrop-image.png"
          pawsAirdrop = {monthlyPaws}
          airdropMethod = {10}
          title="Session 2"
          validTill={monthlyEndTime ? new Date(monthlyEndTime) : new Date()}
          description="Take Home the Paw Airdrop via Paw App on chain summer"
          buttonText="Get Airdrop"
        />
      </div>
    </Background>
  );
};

export default AirdropPage;
