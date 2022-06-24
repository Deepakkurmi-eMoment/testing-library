import React, { useState, useEffect } from "react";
import {
  useWallet,
  // useCBSProtocolOverview,
  // useAuctionProtocolOverview,
  depositCBS,
  getLiquidateList,
} from "@lpfinance/solana";

const App = () => {
  const { wallet } = useWallet(process.env.REACT_APP_PRIVATE_KEY);

  // const { netDeposit, netBorrow, cbsTVL, systemLTV } =
  //   useCBSProtocolOverview(wallet);

  // const { auctionAPY, netLiquidatorFunds, lastEpochProfit } =
  //   useAuctionProtocolOverview(wallet);

  const [LiquidateList, setLiquidateList] = useState({
    count: null,
    List: [],
  });

  const callDepositCBS = async () => {
    try {
      const { message } = await depositCBS(wallet, 0.1, "SOL");
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const CallLiquidate = async () => {
      const { count, List } = await getLiquidateList();
      setLiquidateList({ ...LiquidateList, count, List });
    };
    CallLiquidate();
  }, []);

  return (
    <div>
      {/* <h1>Borrow cbs details</h1>
      <p>TotalSupply: - {netDeposit}</p>
      <p>TotalBorrowed: - {netBorrow}</p>
      <p>TVL: - {cbsTVL}</p>
      <p>NetLTV: - {systemLTV}</p>
      <h2>Auction cbs details</h2>
      <p>CBS Supply: - {netDeposit}</p>
      <p>APY: - {auctionAPY}</p>
      <p>Last Epoch Profit : - {lastEpochProfit}</p>
      <p>Liquidator Funds: - {netLiquidatorFunds}</p> */}
      <button onClick={callDepositCBS}>depositCBS</button>
      <h2>Liquidate details</h2>
      <p>Count: - {LiquidateList.count}</p>
      <p>LiquidateList ----</p>
      <ul>
        {LiquidateList?.List?.map((item, num) => {
          return (
            <div key={num} style={{ marginTop: "20px" }}>
              <li>address- {item.address}</li>
              <li>Collateral- {item.Collateral}</li>
              <li>Debt- {item.Debt}</li>
              <li>LTV- {item.LTV}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
