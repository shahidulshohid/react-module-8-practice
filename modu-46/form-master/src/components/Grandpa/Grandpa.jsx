import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./grandpa.css";
import { createContext, useState } from "react";

//create context for providing data all component
// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000)
  const asset = "diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Net money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

//1. create a context an export it
//2. add provider for the context with a value could be anything
//2. useContext to access value in the context api
