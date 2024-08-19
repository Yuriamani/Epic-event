import React, { useState, useEffect } from 'react';
import './MpesaPayment.css';

function MpesaPayment() {
  const [amount, setAmount] = useState('');

  useEffect(() => {
    // Fetch the amount from the backend
    fetch('https://epic-event-backend.onrender.com/amount')
      .then(response => response.json())
      .then(data => setAmount(data.amount)) // Assuming the response contains { amount: value }
      .catch(error => console.error('Error fetching amount:', error));
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      <div className="card mt-5 px-3 py-4">
        <div className="d-flex flex-row justify-content-around">
          <div className="mpesa"><span>Mpesa</span></div>
        </div>
        <div className="media mt-4 pl-2">
          <img src="./images/1200px-M-PESA_LOGO-01.svg.png" className="mr-3" height="75" alt="Mpesa Logo" />
          <div className="media-body">
            <h6 className="mt-1">Enter Phone Number</h6>
          </div>
        </div>
        <div className="media mt-3 pl-2">
          <form className="row g-3" action="./stk_initiate.php" method="POST">
            <div className="col-12">
              <label htmlFor="inputAmount" className="form-label">Amount</label>
              <input
                type="text" // or "number" if you prefer
                className="form-control"
                id="inputAmount"
                name="amount"
                value={amount} // Set the fetched amount
                readOnly // Make the field read-only
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="inputPhoneNumber" name="phone" placeholder="Enter Phone Number" />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-success" name="submit" value="submit">PAY</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MpesaPayment;
