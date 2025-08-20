export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: string[];
  lowVolume: boolean;
  coinrankingUrl: string;
  "24hVolume": string;
  btcPrice: string;
  contractAddresses: [];
  isWrappedTrustless: boolean;
  wrappedTo: string | null;
}
export interface CryptosResponse {
  status: string;
  data: {
    coins: Coin[];
    stats: CryptoStats;
  };
}

export interface CryptoDetailResponse {
  status: string;
  data: {
    coin: Coin;
  };
}

export interface CryptoStats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}
