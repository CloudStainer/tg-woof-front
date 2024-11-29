// config/index.tsx

import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage, http } from "wagmi";
import { bsc, mainnet } from "wagmi/chains";

// Your WalletConnect Cloud project ID
export const projectId = "eae0f11f6c24655f92e4f531a15f5a7d";

// Create a metadata object
const metadata = {
  name: "EnthusiastProject",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [mainnet, bsc] as const;
export const config = defaultWagmiConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [bsc.id]: http()
  },
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

export const bot_link: string = process.env.NEXT_PUBLIC_TELEGRAM_BOT_LINK || "https://telegram.me/Dog_Wolf_App";