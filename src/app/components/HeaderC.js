"use client";
import useTypewriter from "@/app/hooks/useTypewriter";

const HeaderC = (props) => {
  const displayedText = useTypewriter(props.title);

  return (
    <h2 style={{ marginBottom: "50px", textAlign: "center" }}>
      {displayedText}{" "}
    </h2>
  );
};

export default HeaderC;
