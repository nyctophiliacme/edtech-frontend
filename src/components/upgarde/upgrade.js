import React from "react"
import './upgrade.css'
import check from'../../assets/images/check.png';

const Upgrade = () => {
    const upgradeBenifts=["Access to all practice questions","Detailed explanations for every question","Unlimited attempts per question"]
return(
    <>
<div className="upgrade-container">
Upgrade now and get everything you need to prepare for the ECAT exam
</div>
<div className="upgrade-points-container">
    {
        upgradeBenifts.map((benifit,index)=>{
            return (
                <div className="upgrade-points" key={index}>
            <img src={check} alt="chk"/> 
            <h2>{benifit}</h2>
            </div>
            )
        })
    } 
</div>
<div className="upgrade-button">
<input className="login-button"  value="Upgrade Now" />
</div>
</>)
}
export default Upgrade;