import { useParams } from "react-router-dom";

import { useGetCryptoDetailsQuery } from "../services/cryptoapi";

const CryptoDetail = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetCryptoDetailsQuery(id);

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error fetching crypto details</div>;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            className="w-20 h-20 rounded-full"
            src={data?.data?.coin.iconUrl}
            alt={data?.data?.coin.name}
          />
          <h1 className="text-2xl font-bold text-gray-800">
            {data?.data?.coin.name}
          </h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Price</p>
            <p className="text-lg font-semibold text-gray-900">
              {data?.data?.coin.price}
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">Market Cap</p>
            <p className="text-lg font-semibold text-gray-900">
              {data?.data?.coin.marketCap}
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">24h Volume</p>
            <p className="text-lg font-semibold text-gray-900">
              {data?.data?.coin["24hVolume"]}
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">BTC Price</p>
            <p className="text-lg font-semibold text-gray-900">
              {data?.data?.coin.btcPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetail;
