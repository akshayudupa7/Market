import React from "react"
import { FaBoxOpen,FaWallet } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";


function Child({data}){
  console.log(data)
return(
  <>
  
    {data.Scrip.map((data)=>(
    
 <div className="row master">
<div className="col col-lg-1 col-md-1 col-sm-12 col-xs-12 price d-flex">
  <div className="price1">
    <AiOutlineMenu/>
   </div>
   <div className="price1">
      <h6> {data?.name} </h6>
      <b>$<span>{data.price}</span></b>
   </div>
</div>
<div className="col-lg-2 col-md-1 col-sm-12  col-xs-12 share ">
  <div className="equity">
   <h5>iShares</h5>
   <h6> S&P 500 Indexes</h6>
   <p>US Equity</p>
   </div>
</div>
<div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 value">
<div className="open"><p> <FaBoxOpen/>Quanitity </p><p> <b>{data.Quantity}</b></p></div>
<div className="open">  <p> @ Avg.Cost   </p><p>    <b>{data.Avg_Cost}</b></p> </div>
<div className="open">  <p> <FaWallet/>Invested </p><p><b> {data.Invested_Amt}</b></p></div>
</div>
<div className="col-lg-3 col-md-3 col-sm-12  col-xs-12  port">
<div className="open"><p> <b> Market Value </b> </p> <p> <b> {data.Market} </b></p></div>
<div className="open">  <p>% of Portfolio value </p><p><span>{data.portfolio}</span></p></div>
   <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width:(data.portfolio)}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>
<div className="col-lg-3 col-md-3 col-sm-12   col-xs-12 unreal">
<div className="open"><p><b>Unrealized P&L</b></p><p><b> {data.Unrealized_PL}</b></p></div>
<div className="open"><p> % Return </p><p>{data.return}</p></div>
 <div class="progress">
  <div class="progress-bar bg-success"  role="progressbar"style={{width:(data.return)}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>
<div className="col-lg-1 col-md-1 col-sm-12  col-xs-12 btn">
  <button>Buy</button>
  <button>Sell</button>
</div>
</div>
  ))}
</>
)
}
export default Child