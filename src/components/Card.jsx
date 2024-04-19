import { useContext } from "react";
import { MyContext } from "../context/Mycontext";

const Card = () => {
  let { mode, setMode } = useContext(MyContext);
  //   console.log(data);

  return (
    <div>
      Hello,{mode}
      <button onClick={() => setMode("dark")}>Change</button>
    </div>
  );
};

export default Card;
