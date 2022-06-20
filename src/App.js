import {
  getTokenPrice,
  useWallet,
  useProtocolOverview,
} from "@lpfinance/solana";
import { useEffect } from "react";

const App = () => {
  const { wallet } = useWallet([
    202, 171, 192, 129, 150, 189, 204, 241, 142, 71, 205, 2, 81, 97, 2, 176, 48,
    81, 45, 1, 96, 138, 220, 132, 231, 131, 120, 77, 66, 40, 97, 172, 91, 245,
    84, 221, 157, 190, 9, 145, 176, 130, 25, 43, 72, 107, 190, 229, 75, 88, 191,
    136, 7, 167, 109, 91, 170, 164, 186, 15, 142, 36, 12, 23,
  ]);
  const { TotalSupply, TotalBorrowed, TVL, NetLTV } =
    useProtocolOverview(wallet);
  console.log(TotalSupply, TotalBorrowed, TVL, NetLTV);
  useEffect(() => {
    const callApi = async () => {
      const { TokenPriceList } = await getTokenPrice();

      console.log(TokenPriceList);
    };
    callApi();
  }, []);

  return (
    <div>
      <p>TotalSupply: - {TotalSupply}</p>
      <p>TotalBorrowed: - {TotalBorrowed}</p>
      <p>TVL: - {TVL}</p>
      <p>NetLTV: - {NetLTV}</p>
    </div>
  );
};

export default App;
