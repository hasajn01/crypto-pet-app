import "./app.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { getCoins } from "../api/api";
import CoinsList from "../CoinsList/CoinsList";
import FilterBlock from "../FilterBlock/FilterBlock";

function App() {
  const cryptoName = "CRYPTO-MARKET";

  const [balance, setBalance] = useState(5000);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
      setFilteredCoins(data.coins);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="header"> {cryptoName} <img src="/assets/icons/monitoring-icon.png" alt="monitoring" className="monitoring"/></div>
        <Card balance={balance} setBalance={setBalance} />
      </div>
      <FilterBlock coins={coins} setCoins={setFilteredCoins} />
      {coins ? <CoinsList coins={filteredCoins} /> : <div>Loading...</div>}
    </>
  );
}

export default App;
