import "./coins-list.css";
import React from "react";

// eslint-disable-next-line react/prop-types
function CoinsList({ coins }) {
  return (
    <ul className="coin-list">
      {coins.map((coin) => {
        return (
          <li key={coin.uuid} className="coin-item">
            <div className="coin-item__info">
              <img
                src={coin.iconUrl}
                alt={coin.name}
                className="coin-item__logo" />
              <p style={{ color: coin.color }}>{coin.name}/USD</p>
            </div>

            <div className="coin-item__price">
              <p style={{ color: coin.color }}>
                {(+coin.price).toFixed(2)} USD
              </p>

              <p style={{ color: coin.color }}>
                {(+coin.btcPrice).toFixed(2)} BTC
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default React.memo(CoinsList);
