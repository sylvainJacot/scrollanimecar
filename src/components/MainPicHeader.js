import styled from "styled-components";
import { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MustangPictureSrc from "./images/low-key-Mustang-Toy-1423495-pxhere.com.jpg";
import MustangPictureSrc2 from "./images/low-key-Mustang-Toy-1423495.jpg";
import MainTitle from "./Title/MainTitle";

const MainPicHeader = () => {
  gsap.registerPlugin(ScrollTrigger);

  let MustangPictureRef = useRef(null);
  let MustangPictureOverlayRef = useRef(null);
  // let title = useRef(null);
  // let UnderlineRef = useRef(null);

  let timeLine = gsap.timeline();

  useEffect(() => {
    timeLine.to(MustangPictureOverlayRef.current, {
      delay: 1,
      duration: 0.6,
      opacity: 1,
      ease: Power3.easeOut,
    });
  });

  return (
    <>
      <MustangPictureMask>
        <Underline></Underline>
        <MainTitle />
        <MustangPicture src={MustangPictureSrc} ref={MustangPictureRef} />
        <MustangPictureOverlay
          src={MustangPictureSrc2}
          ref={MustangPictureOverlayRef}
        />
      </MustangPictureMask>
    </>
  );
};

export default MainPicHeader;

export const MustangPictureMask = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  & img {
    position: absolute;
    width: 100%;
    height: auto;
    transform: translateY(-120px);
  }
`;

export const MustangPicture = styled.img``;

export const MustangPictureOverlay = styled.img`
  opacity: 0;
`;

export const Underline = styled.div`
  position: absolute;
  display: block;
  content: "";
  width: 236px;
  height: 8px;
  background-color: red;
  z-index: 1;
  top: 0;
  left: calc(50% - 4px);
  transform: translate(-50%, -50%);
`;
