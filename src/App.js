import {
  useWallet,
  useCBSProtocolOverview,
  useAuctionProtocolOverview,
} from "@lpfinance/solana";

const App = () => {
  const { wallet } = useWallet([
    49, 253, 112, 197, 220, 25, 220, 83, 173, 233, 47, 252, 169, 27, 60, 159,
    66, 43, 213, 38, 189, 223, 231, 40, 163, 72, 28, 181, 92, 220, 204, 195,
    247, 166, 163, 114, 165, 229, 128, 176, 108, 154, 18, 36, 65, 110, 113, 189,
    159, 66, 252, 110, 203, 226, 78, 82, 241, 183, 67, 217, 255, 157, 36, 144,
  ]);
  const { netDeposit, netBorrow, cbsTVL, systemLTV } =
    useCBSProtocolOverview(wallet);

  const { auctionAPY, netLiquidatorFunds, lastEpochProfit } =
    useAuctionProtocolOverview(wallet);

  return (
    <div>
      <h1>Borrow cbs details</h1>
      <p>TotalSupply: - {netDeposit}</p>
      <p>TotalBorrowed: - {netBorrow}</p>
      <p>TVL: - {cbsTVL}</p>
      <p>NetLTV: - {systemLTV}</p>

      <h2>Auction cbs details</h2>
      <p>CBS Supply: - {netDeposit}</p>
      <p>APY: - {auctionAPY}</p>
      <p>Last Epoch Profit : - {lastEpochProfit}</p>
      <p>Liquidator Funds: - {netLiquidatorFunds}</p>
    </div>
  );
};

export default App;
