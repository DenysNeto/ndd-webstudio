"use client";
import SectionC from "../components/SectionC";
import ModalC from "../components/ModalC";
import CardPreviewC from "../components/CardPreviewC";
import { useState, useEffect } from "react";
import ViewerC from "../components/ViewerC";
import { useSearchParams } from "next/navigation";
import { arrayPortfolio } from "@/app/assets/data/services";
import { Suspense } from "react";

export default function Home() {
  useEffect(() => {
    // Add the scroll-y:hidden style to the body
    document.body.style.overflowY = "hidden";
    document.getElementById("intro").style.paddingTop = 0;

    // Cleanup function to remove the style when the component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  const searchParams = useSearchParams();

  let name = null;
  if (searchParams && searchParams.toString().includes("name=")) {
    name = searchParams.toString().split("name=")[1];
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Suspense>
      <div style={{ paddingTop: "0 !important", overflow: "hidden" }}>
        <ModalC isOpen={isModalOpen} onClose={closeModal}>
          <SectionC className="wrapper style1 fullscreen fade-up">
            {arrayPortfolio.map((el, index) => {
              let src = `https://html5up.net/uploads/images/${el}.jpg`;
              return (
                <div key={index}>
                  <CardPreviewC name={el} index={index} src={src} />
                </div>
              );
            })}
          </SectionC>
        </ModalC>

        <SectionC
          className="wrapper style1 fullscreen fade-up"
          style={{
            background: "black",
            borderRadius: 0,
            height: "100vh",
            padding: 0,
          }}
          id="intro">
          <ViewerC openModal={openModal} name={name} />
        </SectionC>

        <style jsx>{`
          body {
            overflow-y: hidden !important;
          }
        `}</style>
      </div>
    </Suspense>
  );
}
