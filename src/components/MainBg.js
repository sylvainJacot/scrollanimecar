import React from 'react';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import MainPicHeader from "./MainPicHeader";
import { MainPicAnimStart, SecondAnimSection, ThirdAnimSection } from "../gsap-animations";
import SecondSection from "./Blocks/Section 2/SecondSection";
import ThirdMainBlock from "./Blocks/Section 3/ThirdMainBlock";

const MainBG = () => {
  let MainTitleRef = useRef(null);
  let UnderlineRef = useRef(null);
  let MainBGRef = useRef(null);
  let MustangPictureRef = useRef(null);
  let MustangPictureOverlayRef = useRef(null);
  let MustangPictureMaskRef = useRef(null);
  let FirstBlockRef = useRef(null);
  let FirstWhiteBlockRef = useRef(null);

  let SecondSectionRef = useRef(null);
  let SecondBlockRef = useRef(null);
  let SecondWhiteRef = useRef(null);
  let SecondPicRef = useRef(null);
  let SecondPicBgimg = useRef(null);

  let ThirdMainBlockRef = useRef(null);
  let ThirdBlockRef = useRef(null);
  let ThirdWhiteBgRef = useRef(null);
  let ThirdPicRef = useRef(null);
  let ThirdPicContainerRef = useRef(null);

  const timeLine = gsap.timeline();

  useEffect(() => {
    timeLine
      .add(
        MainPicAnimStart(
          MustangPictureOverlayRef,
          MainTitleRef,
          UnderlineRef,
          MainBGRef,
          MustangPictureMaskRef,
          FirstBlockRef,
          FirstWhiteBlockRef
        )
      )
      .add(
        SecondAnimSection(
          SecondSectionRef,
          SecondBlockRef,
          SecondWhiteRef,
          SecondPicRef,
          SecondPicBgimg,
        )
      )
      .add(ThirdAnimSection(
        ThirdMainBlockRef,
        ThirdBlockRef,
        ThirdWhiteBgRef,
        ThirdPicRef,
        ThirdPicContainerRef,
      ))
  });

  return (
    <>
      <Box ref={MainBGRef}>
        <MainPicHeader
          MustangPictureMaskRef={MustangPictureMaskRef}
          UnderlineRef={UnderlineRef}
          MainTitleRef={MainTitleRef}
          MustangPictureRef={MustangPictureRef}
          MustangPictureOverlayRef={MustangPictureOverlayRef}
          FirstBlockRef={FirstBlockRef}
          FirstWhiteBlockRef={FirstWhiteBlockRef}
        />
        <SecondSection
          SecondSectionRef={SecondSectionRef}
          SecondBlockRef={SecondBlockRef}
          SecondWhiteRef={SecondWhiteRef}
          SecondPicRef={SecondPicRef}
          SecondPicBgimg={SecondPicBgimg}
        />
        <ThirdMainBlock
          ThirdMainBlockRef={ThirdMainBlockRef}
          ThirdBlockRef={ThirdBlockRef}
          ThirdWhiteBgRef={ThirdWhiteBgRef}
          ThirdPicRef={ThirdPicRef}
          ThirdPicContainerRef={ThirdPicContainerRef}
        />
        <Copyright>Pictures from caricos.com</Copyright>
      </Box>
    </>
  );
};

export default MainBG;

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 2500px;
  margin: auto;
  background-color: #494d60;
  opacity: 1;
  margin-top: 0;
  border-radius: 0px;
`;

export const Copyright = styled.p`
margin-top: 300px;
font-family: "Oswald";
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 4px;
    color: white;
    text-align: center;
`;