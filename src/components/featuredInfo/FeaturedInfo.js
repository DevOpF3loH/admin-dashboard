import React from 'react';
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

import "./FeaturedInfo.css";

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className='featuredMoney'>$2,468</span>
          <span className='featuredMoneyRate'>-12.4 <ArrowDownward className='featuredIconN'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className='featuredMoney'>$3,468</span>
          <span className='featuredMoneyRate'>-22.4 <ArrowDownward className='featuredIconN'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className='featuredMoney'>$8,468</span>
          <span className='featuredMoneyRate'>+18.4 <ArrowUpward className='featuredIconP'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}
