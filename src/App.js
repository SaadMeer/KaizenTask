import './App.css'
import { Route, Routes } from "react-router-dom";
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, midnightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { useWalletClient, WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, } from 'wagmi/chains';
import { QueryClientProvider, QueryClient, } from "@tanstack/react-query";
import Home from './Pages/Home/Home';
import Address from './Address';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true,
  });

  const queryClient = new QueryClient();

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            modalSize="compact"
            showRecentTransactions={true}
            theme={midnightTheme({
              accentColor: "#6495ED",
              accentColorForeground: "white",
              borderRadius: "medium",
              fontStack: "system",
              overlayBlur: "small",
            })}
          >

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/address" element={<Address />} />
              <Route path="/aboutus" element={<AboutUs />} />
              {/* <Address /> */}
              {/* <ConnectButton /> */}
            </Routes>

          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider >
    </>
  );
}

export default App;
