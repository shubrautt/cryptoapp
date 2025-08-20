import millify from "millify";

import { type CryptoStats } from "../services/cryptoApiTypes";

const Stats = ({ globalStats }: { globalStats: CryptoStats }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 p-2">
        <p>Total Coins</p>
        <p className="text-xl font-bold">{globalStats?.totalCoins}</p>
      </div>
      <div className="w-1/2 p-2">
        <p>Total Cryptocurrencies</p>
        <p className="text-xl font-bold">
          {globalStats?.total && millify(globalStats?.total)}
        </p>
      </div>
      <div className="w-1/2 p-2">
        <p>Total Market Cap</p>
        <p className="text-xl font-bold">
          {globalStats?.totalMarketCap && millify(+globalStats?.totalMarketCap)}
        </p>
      </div>
      <div className="w-1/2 p-2">
        <p>Total 24h Volume</p>
        <p className="text-xl font-bold">
          {globalStats?.total24hVolume && millify(+globalStats?.total24hVolume)}
        </p>
      </div>
      <div className="w-1/2 p-2">
        <p>Total Exchanges</p>
        <p className="text-xl font-bold">
          {globalStats?.totalExchanges && millify(+globalStats?.totalExchanges)}
        </p>
      </div>
      <div className="w-1/2 p-2">
        <p>Total Markets</p>
        <p className="text-xl font-bold">
          {globalStats?.totalMarkets && millify(+globalStats?.totalMarkets)}
        </p>
      </div>
    </div>
  );
};

export default Stats;
