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
<div lassName="upgrade-points-container">
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
     <h2>Access to all practice questions</h2>
     <h2>Detailed explanations for every question</h2>
     <hu>Unlimited attempts per question</hu>   
</div>
<div className="upgrade-button">

</div>
</>)
}
export default Upgrade;