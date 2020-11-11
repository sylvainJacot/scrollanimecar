import { useRef, useEffect } from "react";
import styled from "styled-components";
import MainPicHeader from "./MainPicHeader";
import { gsap, Power3 } from "gsap";

const MainBG = () => {
  let MainBGRef = useRef(null);

  let timeLine = gsap.timeline();

  // useEffect(() => {
  //   timeLine.to(MainBGRef.current, {
  //     duration: 1,
  //     width: "50%",
  //     ease: Power3.easeIn,
  //   });
  // });

  return (
    <>
      <Box ref={MainBGRef}>
        <MainPicHeader />
      </Box>
    </>
  );
};

export default MainBG;

export const Box = styled.div`
  width: 100%;
  height: 2000px;
  margin: auto;
  background-color: #4659ba;
  opacity: 1;
`;
