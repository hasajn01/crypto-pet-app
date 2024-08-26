import { useEffect, useState } from "react";
import "./filter-block.css";
import React from "react";

// eslint-disable-next-line react/prop-types
function FilterBlock({ coins, setCoins }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    const filteredCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(value.toLowerCase());
    });
    setCoins(filteredCoins);
  }, [value]);

  return (
    <div className="filter-block">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="bitcoin"
        className="input"
      />
    </div>
  );
}

export default React.memo(FilterBlock);
