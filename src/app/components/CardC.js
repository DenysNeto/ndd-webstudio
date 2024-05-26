import ButtonC from "./ButtonC";
import { linksUslugi } from "@/app/assets/data/services";
import Link from "next/link";

const CardC = (props) => {
  return (
    <div
      className={`inner card ${props.className}`}
      style={{
        width: "30%",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "50px",
        height: "20vw",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: !props.disableButton && "space-between",
        ...props.styleWrapper,
      }}>
      <div>
        <h3 style={{ borderBottom: "1px solid white" }}>
          {props.content.header}
        </h3>
        <p style={{ fontSize: "1vw" }}>{props.content.text}</p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}>
          {!props.disableButton && (
            <>
              <div>
                <Link href={linksUslugi[props.index]}>
                  <ButtonC size="small" label="Learn more"></ButtonC>
                </Link>
              </div>
              <div>
                <span>{props.content.price}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardC;
