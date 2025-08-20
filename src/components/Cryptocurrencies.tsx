import { millify } from "millify";

import { useGetCryptosQuery } from "../services/cryptoapi";
import { useEffect, useState } from "react";

const Cryptocurrencies = ({ simplified }: { simplified: boolean }) => {
  const { data, isFetching } = useGetCryptosQuery();
  const [cryptoData, setCryptoData] = useState(data?.data?.coins);

  const dataToDisplay = simplified ? cryptoData?.slice(0, 10) : cryptoData;

  useEffect(() => {
    setCryptoData(data?.data?.coins);
  }, [data]);

  const searchCrypto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm)
    );
    setCryptoData(filteredData);
  };

  if (isFetching) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-2 gap-2">
      {!simplified && (
        <input
          type="text"
          placeholder="Search Cryptocurrency..."
          className="col-span-2 p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          onChange={searchCrypto}
        />
      )}
      {dataToDisplay?.map((coin) => (
        <a
          href={`/crypto/${coin.uuid}`}
          key={coin.uuid}
          className="bg-white border rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
        >
          <img src={coin.iconUrl} alt={coin.name} className="w-16 h-16 mb-4" />
          <h5 className="text-lg font-semibold text-gray-800">{coin.name}</h5>
          <p className="text-sm text-gray-500 mt-2">
            Price:{" "}
            <span className="font-medium text-gray-900">
              {millify(+coin.price)}
            </span>
          </p>
          <p className="text-sm text-gray-500">
            Market Cap:{" "}
            <span className="font-medium text-gray-900">
              {millify(+coin.marketCap)}
            </span>
          </p>
        </a>
      ))}

      {dataToDisplay?.length === 0 && (
        <div className="col-span-2 text-center py-12 bg-gray-100 rounded-xl text-gray-500 font-medium">
          🚫 No results found
        </div>
      )}
    </div>
  );
};

export default Cryptocurrencies;
