import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import MainPicHeader from "./MainPicHeader";
import {
  MainBgAnim,
  MainPicAnimStart,
  MainPicAnimEnd
} from "../gsap-animations";

const MainBG = () => {
  let MainTitleRef = useRef(null);
  let UnderlineRef = useRef(null);
  let MainBGRef = useRef(null);
  let MustangPictureRef = useRef(null);
  let MustangPictureOverlayRef = useRef(null);

  const timeLine = gsap.timeline();

  useEffect(() => {
    timeLine.add(MainPicAnimStart(MustangPictureOverlayRef, MainTitleRef, UnderlineRef));
    timeLine.add(MainBgAnim(MainBGRef));
    timeLine.add(MainPicAnimEnd(MainTitleRef));
  });

  return (
    <>
      <Box ref={MainBGRef}>
        <MainPicHeader
          UnderlineRef={UnderlineRef}
          MainTitleRef={MainTitleRef}
          MustangPictureRef={MustangPictureRef}
          MustangPictureOverlayRef={MustangPictureOverlayRef}
        />
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
  margin-top: 0;
`;
