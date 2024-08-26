import "./card.css";

// eslint-disable-next-line react/prop-types
function Card({ balance, setBalance }) {
  let nameOfCompany = "CRYPTO-FINANCE";
  let name = "ALBERT";
  return (
    <div className="card">
      <div className="card-block">
        <div className="block-main"> {nameOfCompany} </div>
        <button
          onClick={() => setBalance((prev) => prev + 1000)}
          className="button"
        >
          Add money
        </button>
      </div>

      <div className="card-block">
        <div className="block"> {name} </div>
        <div className="block"> {balance} $ </div>
      </div>
    </div>
  );
}

export default Card;
