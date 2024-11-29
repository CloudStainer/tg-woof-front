import React, { useEffect } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { useWalletContext } from "./Web3Context";
import { toast } from "react-toastify";

export default function ConnectButton() {
  const { setWalletAddress } = useWalletContext();
  const { open } = useWeb3Modal();
  const { address, status } = useAccount();

  useEffect(() => {
    const registerNewAddress = async (address:any) => {
      const res = await fetch(`api/personaldata`, {
        method: "POST",
        body: JSON.stringify({address: address}),
      });
    }

    if (status === "connected" && address) {
      setWalletAddress(address);
      registerNewAddress(address);
      toast.success("Connected Wallet Successfuly");
    }
    else if(status === "disconnected") {
      setWalletAddress("");
    }
  }, [status, address, setWalletAddress]);

  const dispHeroButton = () => {
    switch (status) {
      case "connecting":
        return (
          <>
          <svg className="h-6 w-6 animate-spin m-auto" viewBox="0 0 100 100">
            <circle
              fill="none"
              strokeWidth="10"
              className="stroke-current opacity-40"
              cx="50"
              cy="50"
              r="40"
            />
            <circle
              fill="none"
              strokeWidth="10"
              className="stroke-current"
              strokeDasharray="250"
              strokeDashoffset="210"
              cx="50"
              cy="50"
              r="40"
            />
          </svg>
          <span className="text-white">Connecting</span>
          </>
        );
      case "disconnected":
        return "Wallet Connect";
      case "connected":
        return (
          address?.substring(0, 5) +
          "..." +
          address?.substring(address.length - 5, address.length)
        );
      default:
        return "Connect Wallet";
    }
  };

  return (
    <div>
      <button
        className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs px-4 py-2 rounded-xl"
        onClick={()=>open()}
      >
        {dispHeroButton()}
      </button>
    </div>
  );
}
