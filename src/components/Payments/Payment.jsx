import React, { useState } from "react";
import Motal from "../../Motal/Motal";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Payment submitted:", { cardNumber, expiry, cvv, name });

    setCardNumber("");
    setExpiry("");
    setCvv("");
    setName("");
  };

  return (
    <div className="md:w-[90%] mt-4 border border-btHover rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <input
          className="rounded-md"
          placeholder="cardNumber"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength="16"
          required
        />

        <input
          className="rounded-md"
          type="text"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          placeholder="MM/YY"
          maxLength="5"
          required
        />
        <input
          className="rounded-md"
          placeholder="vv"
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          maxLength="3"
          required
        />
        <input
          className="rounded-md"
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Motal />
      </form>
    </div>
  );
};

export default Payment;
