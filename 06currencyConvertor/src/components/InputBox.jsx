import React, { useId } from "react";
import PropTypes from "prop-types";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {
  const amountInputId = useId(); // just gives a unique ID

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value)); //the first onAmountChange only checks if it exists or not.
          }} //Javascript events ke under ki value ko hamesha string format mein leti hai to Number() use kara hai upar.
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// InputBox.propTypes = {
//   label: PropTypes.string.isRequired, // Assuming label is a required string
//   amount: PropTypes.number.isRequired, // Assuming amount is a number
//   onAmountChange: PropTypes.func, // Assuming it's a function
//   onCurrencyChange: PropTypes.func.isRequired, // Assuming it's a function
//   currencyOptions: PropTypes.arrayOf(PropTypes.string), // Array of strings for currency options
//   selectCurrency: PropTypes.string, // Default value is "usd"
//   amountDisable: PropTypes.bool, // Boolean for amount disabling
//   currencyDisable: PropTypes.bool, // Boolean for currency disabling
//   className: PropTypes.string, // Optional class name
// };

export default InputBox;
