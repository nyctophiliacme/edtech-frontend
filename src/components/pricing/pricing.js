import React, { useState } from "react";
import "./pricing.css";
import "../../App.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faAngleDown);

const Pricing = () => {
  const packages = [
    {
      duration: "1 Month",
      price: "1500",
    },
    {
      duration: "3 Months",
      price: "3750",
    },
    {
      duration: "6 Months",
      price: "5000",
    },
  ];
  const [selectedPackage, setSelectedPackage] = useState(packages[1]);

  return (
    <div className="pricing-container">
      <div className="pricing-header">Choose and Pay</div>
      <div className="pricing-selection-container">
        <div className="pricing-exanname-container">ECAT</div>
        <div className="pricing-dropdown-container">
          <ul className="pricing-ul">
            <li className="pricing-dropdown">
              <div className="pric-dropbtn">
                {selectedPackage.duration}
                &nbsp;&nbsp;
                <FontAwesomeIcon icon="angle-down" />
              </div>
              <div className="pricing-dropdown-content ">
                {packages.map((pack, index) => {
                  return (
                    <div
                      key={index}
                      className="pricing-drp-dwn-item"
                      onClick={() => {
                        setSelectedPackage(pack);
                      }}
                    >
                      <span className="pack-duration-drpdwn">
                        {" "}
                        {pack.duration}
                      </span>{" "}
                      <span> {`Rs ${pack.price}`}</span>
                    </div>
                  );
                })}
              </div>
            </li>
          </ul>
          <div className="pricing-dropdown-container">
            <span className="price-prefix-select">Rs </span>
            <span>{selectedPackage.price}</span>
          </div>
        </div>
      </div>
      <div className="pricing-sub-heading">Method 1: Pay via Easypaisa</div>
      <div className="pricing-text">
        <span className="pricing-sub-heading">
          a) Cash Payment at Easypaisa Shop
        </span>
        <br />
        <br />
        Step 1. <span className="pricing-text-bold">Visit</span> the nearest
        Easypaisa shop and pay cash . Request to pay mobile account
        <span className="pricing-text-bold"> +92 3412495053</span> Syed Shahzib
        Baseer
        <br />
        <br />
        Step 2. <span className="pricing-text-bold">Send a picture</span> as
        proof of payment to
        <span className="pricing-text-bold"> +92 3028704709</span> via WhatsApp,
        and You'll get access within 12 working hours.
        <br />
        <br />

        <span className="pricing-sub-heading">
          b) Via Easypaisa Mobile Account
        </span>
        <br />
        <br />
        Step 1. If you have one, you can use Easypaisa Mobile Account to pay
        directly from your phone. Transfer the amount to mobile account
        <span className="pricing-text-bold"> +92 3412495053</span> Syed Shahzib
        Baseer
        <br />
        <br />
        Step 2. <span className="pricing-text-bold">Send a picture</span> as
        proof of payment to{" "}
        <span className="pricing-text-bold">+92 3412495053</span> via WhatsApp,
        and You'll get access within 12 working hours.
        <br />
        <br />
      </div>
      <div className="pricing-sub-heading">
        Method 2: IBFT (Inter Bank Funds Transfer )
      </div>

      <div className="pricing-text">
        Step 1. Visit “Your bank’s Website” and click on Fund Transfer. Transfer
        the exact amount to
        <br />
        <br />
        <span className="pricing-text-bold">Bank Account Number</span> :
        0008947914339503
        <br />
        <br />
        <span className="pricing-text-bold"> Bank Name</span> : Habib Bank{" "}
        <br />
        <br />
        <span className="pricing-text-bold">Account Title: </span> Muhammad
        Nadeem Khan <br />
        <br />
        Step 2. <span className="pricing-text-bold">Send a picture</span> as
        proof of payment to{" "}
        <span className="pricing-text-bold">+92 3412495053</span> via WhatsApp,
        and You'll get access within 12 working hours.
      </div>
    </div>
  );
};
export default Pricing;
