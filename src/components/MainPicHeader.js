import styled from "styled-components";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import MustangPicture from "./images/low-key-Mustang-Toy-1423495-pxhere.com.jpg";
import MustangPicture2 from "./images/low-key-Mustang-Toy-1423495.jpg";

const MainPicHeader = () => {
  let mainPicHeaderRef = useRef(null);
  let secondMainPicHeaderRef = useRef(null);
  let title = useRef(null);
  let timeLine = gsap.timeline();

  useEffect(() => {
    timeLine
      .to(mainPicHeaderRef.current, {
        duration: 0.6,
        width: 100 + "%",
        height: 100 + "vh",
        opacity: 1,
      })
      .to(secondMainPicHeaderRef.current, {
        duration: 0.6,
        opacity: 1,
      })
      .to(title.current, {
        duration: 0.3,
        opacity: 1,
        translateY: 0,
      });
  });

  return (
    <>
      <Container ref={mainPicHeaderRef}>
        <h1 ref={title}>MUSTANG</h1>
        <p>Photo by Amos Michael form PxHere</p>
        <MainPicHeaderOverlay
          ref={secondMainPicHeaderRef}
        ></MainPicHeaderOverlay>
      </Container>
    </>
  );
};

export default MainPicHeader;

export const Container = styled.div`
  position: relative;
  width: 90%;
  height: 90vh;
  background: black url(${MustangPicture}) center no-repeat;
  background-size: contain;
  transform-origin: center;
  opacity: 0;
  & h1 {
    display: block;
    color: white;
    font-size: 32px;
    position: absolute;
    top: 120px;
    margin: 0;
    left: 50%;
    transform: translate(-50%, -24px);
    text-align: center;
    letter-spacing: 8px;
    z-index: 1;
    opacity: 0;

    &::after {
      position: absolute;
      display: block;
      content: "";
      width: calc(100% - 8px);
      height: 0.5px;
      background-color: white;
      transform: translateY(16px);
    }
  }

  & p {
    font-size: 10px;
    color: white;
    position: absolute;
    bottom: 8px;
    right: 16px;
    z-index: 1;
  }
`;
export const MainPicHeaderOverlay = styled.div`
  position: absolute;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  background: black url(${MustangPicture2}) center no-repeat;
  background-size: contain;
  opacity: 0;
  z-index: 0;
`;
