"use client";
import SectionC from "@/app/components/SectionC";
import CardWithNumbersC from "@/app/components/CardWithNumbersC";
import HeaderC from "@/app/components/HeaderC";
import Image1 from "../assets/img/robot_small_3.png";
import Image2 from "../assets/img/robot_small_2.png";
import Image3 from "../assets/img/robot_small_1.png";
import Image from "next/image";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
const StepsBlock = (props) => {
  const [ref1, isVisible1] = useIntersectionObserver({
    threshold: 0.1, // Adjust the threshold as needed
  });

  const [ref2, isVisible2] = useIntersectionObserver({
    threshold: 0.1, // Adjust the threshold as needed
  });

  const [ref3, isVisible3] = useIntersectionObserver({
    threshold: 0.1, // Adjust the threshold as needed
  });

  return (
    <SectionC
      style={{
        ...props.style,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={
        props.className
          ? props.className + " " + " wrapper fullscreen fade-up"
          : " wrapper fullscreen fade-up"
      }>
      <Image
        id="footer-uslugi"
        style={{
          maxWidth: "14vw",
          width: "100%",
          height: "auto",
          position: "absolute",
          left: "10vw",
          top: "10%",
        }}
        className={`animate__animated  animate__slow ${
          isVisible1 ? "animate__bounceInDown" : "invissible"
        }`}
        ref={ref1}
        width="1200"
        height="600"
        src={Image1}></Image>
      <Image
        id="footer-uslugi"
        style={{
          maxWidth: "14vw",
          width: "100%",
          height: "auto",
          position: "absolute",
          right: "10vw",
          top: "50%",
        }}
        className={`animate__animated animate__slow ${
          isVisible2 ? "animate__bounceInDown" : "invissible"
        }`}
        ref={ref2}
        width="1200"
        height="600"
        src={Image2}></Image>
      <Image
        id="footer-uslugi"
        style={{
          maxWidth: "14vw",
          height: "auto",
          position: "absolute",
          left: "10vw",
          bottom: "10%",
        }}
        className={`animate__animated animate__slow ${
          isVisible3 ? "animate__slideInUp" : "invissible"
        }`}
        ref={ref3}
        width="1200"
        height="600"
        src={Image3}></Image>

      <HeaderC title={props.title} />
      {props?.content.map((content, index) => (
        <CardWithNumbersC
          id={index}
          index={index + 1}
          content={content}
          isLast={index == props?.content.length - 1}></CardWithNumbersC>
      ))}
    </SectionC>
  );
};

export default StepsBlock;
