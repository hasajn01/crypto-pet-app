import "./card.css";

// eslint-disable-next-line react/prop-types
function Card({ balance, setBalance }) {
  let nameOfCompany = "CRYPTO-FINANCE";
  let name = "Khasein";
  return (
    <div className="card">
      <div className="card-block">
        <div className="block-main"> <img className='icon-account_balance' src="/assets/icons/account-balance.png" alt="account" /> {nameOfCompany}  </div>
        <button
          onClick={() => setBalance((prev) => prev + 1000)}
          className="button"
        >
          Add money
        </button>
      </div>

      <img src="/assets/img/chip.png" alt="chip" className="chip"/>
      <div className="card-block">
        <div className="block-1"> <img src="/assets/icons/card-id.png" alt="cardID" className="cardId"/> {name.toUpperCase()} </div>
        <div className="block"> {balance} $ </div>
      </div>
    </div>
  );
}

export default Card;
