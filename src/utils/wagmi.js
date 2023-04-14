import { createClient } from "wagmi";
import { getDefaultClient } from "connectkit";

const dojima = {
  id: 1001,
  name: "Dojima chain",
  network: "Dojima chain",
  nativeCurrency: {
    decimals: 18,
    name: "Dojima chain",
    symbol: "DOJ",
  },
  rpcUrls: {
    default: { http: ["https://rpc-test.d11k.dojima.network:8545/"] },
  },
  testnet: true,
};

export const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: "doj-land",
    chains: [dojima],
  })
);