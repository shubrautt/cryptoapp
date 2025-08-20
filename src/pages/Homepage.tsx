import { useGetCryptosQuery } from "../services/cryptoapi";

import Cryptocurrencies from "../components/Cryptocurrencies";
import Stats from "../components/Stats";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if (isFetching) {
    return <div>data is fetching</div>;
  }

  return (
    <div>
      <div className="stats mb-10">
        <div className="stat">
          <h5 className="text-2xl font-bold mb-4">Global Crypto Stats</h5>
          {globalStats && <Stats globalStats={globalStats} />}
        </div>
      </div>
      <div className="top-currencies">
        <h5 className="text-2xl font-bold mb-4">Top 10 Cryptocurrencies</h5>
        <Cryptocurrencies simplified={true} />
      </div>
    </div>
  );
};

export default Homepage;
