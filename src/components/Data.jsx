import { useContext } from "react";
import Card from "./Card";
import { MyContext } from "../context/Mycontext";

const Data = () => {
  let { mode, setMode } = useContext(MyContext);

  return (
    <div>
      Hello, {mode}
      <Card />
    </div>
  );
};

export default Data;
