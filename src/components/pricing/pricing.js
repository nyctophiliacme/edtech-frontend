import React from "react";
import "./pricing.css";
import "../../App.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-header">Choose and Pay</div>
      <div className="pricing-selection-container">
        ECAT
      </div>
      <div className="pricing-sub-heading">Method 1: Pay via Easypaisa</div>
      <div className="pricing-text">
        <span className="pricing-sub-heading">
          a) Cash Payment at Easypaisa Shop
        </span>
        <br />
        <br />
        Step 1. Pay in cash at any of the 75,000+ Easypaisa shops in over 800 cities.
        <br />
        <br />
        Step 2. Request to pay mobile account <span className="pricing-text-bold">+92 3028704709</span> Syed Shahzib
        Baseer
        <br />
        <br />
        <br />
        <span className="pricing-sub-heading">
          b) Via Easypaisa Mobile Account
        </span>
        <br />
        <br />
        Step 1. If you have one, you can use Easypaisa Mobile Account to pay directly from your phone.<br/> <br/>
        Step 2. Transfer the amount to mobile account <span className="pricing-text-bold">+92 3028704709</span> Syed Shahzib Baseer
        <br />
        <br />
        Step 3. Send a picture as proof of payment to <span className="pricing-text-bold">+92 3412495053</span> via WhatsApp, and You'll get access within12 working hours.
        <br />
        <br />
      </div>
      <div className="pricing-sub-heading">
        Method 2: IBFT (Inter Bank Funds Transfer )
      </div>

      <div className="pricing-text">
        Step 1. Visit “Your bank’s Website” and click on Fund Transfer. Transfer the exact amount to 
        <br /><br />
        <span className="pricing-text-bold">Bank Account Number</span> : 0008947914339503<br /><br />
        <span className="pricing-text-bold"> Bank Name</span> : Habib Bank <br /><br />
        <span className="pricing-text-bold">Account Title: </span> Muhammad Nadeem Khan <br /><br />
        Step 2. Send a picture as proof of payment to <span className="pricing-text-bold">+92 3412495053</span> via WhatsApp,
        and You'll get access within 12 working hours.
      </div>
    </div>
  );
};
export default Pricing;
