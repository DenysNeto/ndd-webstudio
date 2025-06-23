import SectionC from "../components/SectionC";
import Image1 from "../assets/img/robot_head.png";
import Image from "next/image";
import useTypewriter from "@/app/hooks/useTypewriter";

const ListC = (props) => {
  const displayedText = useTypewriter(props.content, 50);
  return (
    <SectionC className="wrapper style1 fullscreen fade-up" id="intro">
      <Image
        style={{
          maxWidth: "7vw",
          width: "100%",
          height: "auto",
          position: "absolute",
          right: "50px",
          top: 50,
        }}
        width="1200"
        height="600"
        src={Image1}></Image>
      <h1 className="major">{props.header}</h1>
      {props.content && <p className="typewriter">{displayedText}</p>}
      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .typewriter::after {
          content: "|";
          animation: blink 1s infinite;
        }
      `}</style>
    </SectionC>
  );
};

export default ListC;
