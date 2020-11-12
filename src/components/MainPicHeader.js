import styled from "styled-components";
import MustangPictureSrc from "./images/low-key-Mustang-Toy-1423495-pxhere.com.jpg";
import MustangPictureSrc2 from "./images/low-key-Mustang-Toy-1423495.jpg";
import FirstBlock from "../components/Blocks/FirstBlock";
import FirstWhiteBlock from "./Blocks/FirstWhiteBlock";

const MainPicHeader = (props) => {
  return (
    <>
      <MustangPictureMask ref={props.MustangPictureMaskRef}>

        <Underline ref={props.UnderlineRef}></Underline>

        <MainTitle ref={props.MainTitleRef}>MUSTANG</MainTitle>

        <FirstBlock FirstBlockRef={props.FirstBlockRef} />

        <FirstWhiteBlock FirstWhiteBlockRef={props.FirstWhiteBlockRef} />

        <MustangPicture src={MustangPictureSrc} ref={props.MustangPictureRef} />

        <MustangPictureOverlay
          src={MustangPictureSrc2}
          ref={props.MustangPictureOverlayRef}
        />

      </MustangPictureMask>
    </>
  );
};

export default MainPicHeader;

export const MainTitle = styled.h1``;
export const Underline = styled.div``;

export const MustangPictureMask = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  & ${MainTitle} {
    position: absolute;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 8px;
    color: white;
    z-index: 2;
    right: 0;
    left: 0;
    text-align: center;
    opacity: 0;
    margin: 0;
    transform: translateY(-0px);
  }

  & ${Underline} {
    position: absolute;
    display: block;
    content: "";
    height: 8px;
    background-color: red;
    z-index: 1;
    top: 0;
    left: calc(50% - 4px);
    transform: translate(-50%, -50%);
    width: 0;
  }

  & img {
    position: absolute;
    height: auto;
    left: 50%;
    transform: translate(-50%,-120px);
    transform-origin: center;
  }
`;

export const MustangPicture = styled.img`
  width: 100%;
`;

export const MustangPictureOverlay = styled.img`
  opacity: 0;
  width: 100%;
`;
