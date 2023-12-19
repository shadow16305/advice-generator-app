import { useState } from "react";
import icon from "../assets/icon.svg";
import shape from "../assets/Shape.svg";
import Advice from "./Advice";

const Card = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");
  const [forceUpdate, setForceUpdate] = useState(false);

  const fetchHandler = () => {
    setForceUpdate((prevstate) => !prevstate);
  };

  return (
    <div className="flex flex-col gap-y-6 items-center bg-[#313A48] px-12 py-12 relative rounded-2xl max-w-[340px] sm:max-w-none">
      <Advice
        key={forceUpdate}
        state={{ advice, setAdvice, adviceId, setAdviceId }}
      />
      <div className="flex items-center gap-x-4 pb-10">
        <div className="w-[122px] md:w-[196px] h-[1px] bg-[#4F5D74]"></div>
        <img src={icon} alt="icon" />
        <div className="w-[122px] md:w-[196px] h-[1px] bg-[#4F5D74]"></div>
      </div>
      <button
        onClick={fetchHandler}
        className="rounded-full bg-[#53FFAA] p-5 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 hover:shadow-2xl hover:shadow-[#53FFAA] transition duration-300"
      >
        <img src={shape} alt="cube" />
      </button>
    </div>
  );
};

export default Card;
