import { gradientsArray } from "@/app/assets/data/cssGradients";
import SectionC from "../components/SectionC";
import Image1 from "../assets/img/robot_head.png";
import Image from "next/image";

const ListC = (props) => {
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
      <p>{props.content}</p>
    </SectionC>
  );
};

export default ListC;
