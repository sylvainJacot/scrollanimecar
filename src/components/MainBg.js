import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import MainPicHeader from "./MainPicHeader";
import {MainPicAnimStart, MainPicAnimTrigger} from "../gsap-animations";
import TestBlock from "./Blocks/Section 2/TestBlock";

const MainBG = () => {
  let MainTitleRef = useRef(null);
  let UnderlineRef = useRef(null);
  let MainBGRef = useRef(null);
  let MustangPictureRef = useRef(null);
  let MustangPictureOverlayRef = useRef(null);
  let MustangPictureMaskRef = useRef(null);
  let FirstBlockRef = useRef(null);
  let FirstWhiteBlockRef = useRef(null);
  let TestBlockRef = useRef(null);
  

  const timeLine = gsap.timeline();

  useEffect(() => {
    timeLine.add(MainPicAnimStart(  MustangPictureOverlayRef,
      MainTitleRef,
      UnderlineRef,
      MainBGRef,
      MustangPictureMaskRef,
      FirstBlockRef,
      FirstWhiteBlockRef))
      .add(MainPicAnimTrigger(FirstBlockRef))
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
        <TestBlock TestBlockRef={TestBlockRef}/>
      </Box>
    </>
  );
};

export default MainBG;

export const Box = styled.div`
position: relative;
  width: 100%;
  height: 2000px;
  margin: auto;
  background-color: #494d60;
  opacity: 1;
  margin-top: 0;
  border-radius: 0px;
`;
