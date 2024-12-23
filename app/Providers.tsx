"use client";

//write a providers component that will wrap the app and provide the privy provider
import { PrivyProvider } from "@privy-io/react-auth";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <PrivyProvider
            appId="cm50320pp03aj5mhzjd39agc3"
            config={{
              // Customize Privy's appearance in your app
              appearance: {
                walletChainType: "solana-only",
                theme: "light",
                accentColor: "#676FFF",
              },
              // Create embedded wallets for users who don't have a wallet
              embeddedWallets: {
                createOnLogin: "off",
              },
              solanaClusters: [
                { name: "devnet", rpcUrl: "https://api.devnet.solana.com" },
              ],
            }}
          >
            {children}
          </PrivyProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
