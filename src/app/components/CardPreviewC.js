import ButtonC from "./ButtonC";
import Image from "next/image";
import Link from "next/link";
import { gradientsArray } from "@/app/assets/data/cssGradients";

const CardPreviewC = (props) => {
  let href = `/portfolio_viewer?name=${props.name}`;
  // size - large ,  small
  const handleClick = (ev) => {
    // ev.preventDefault();
    // ev.nativeEvent.stopImmediatePropagation();
    if (window.location.href.includes("portfolio_viewer")) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
  return (
    <div
      className="inner card col-5"
      style={{
        ...gradientsArray[(props.index + 2) % 2 == 0 ? 1 : props.index + 2],
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "50px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...props.styleWrapper,
      }}>
      <div
        style={{
          borderBottom: "1px solid white",
          marginBottom: "20px",
          paddingBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <h3>
          {props.index + 1}. {props.name.toUpperCase()}
        </h3>
        <Link onClick={handleClick} href={href}>
          <ButtonC label="Preview"></ButtonC>
        </Link>
      </div>

      <div
        className="inner"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <Image
          style={{ maxWidth: "100%", width: "100%", height: "auto" }}
          width="1200"
          height="600"
          src={props.src}></Image>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}></div>
      </div>
    </div>
  );
};

export default CardPreviewC;
