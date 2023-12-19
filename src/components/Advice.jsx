import { useEffect } from "react";

const Advice = ({ state }) => {
  const { advice, setAdvice, adviceId, setAdviceId } = state;

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setAdvice(data.slip.advice);
    setAdviceId(data.slip.id);
  };

  useEffect(() => {
    fetchAdvice();
  });

  return (
    <>
      <span className="text-sm text-[#53FFAA] tracking-[4px] font-extrabold">
        Advice #{adviceId}
      </span>
      <p className="text-[#CEE3E9] text-center text-2xl md:text-[28px] tracking-[-0.3px] font-extrabold max-w-[295px] md:max-w-[444px]">
        {advice}
      </p>
    </>
  );
};

export default Advice;
