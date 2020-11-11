import styled from "styled-components";
import MustangPictureSrc from "./images/low-key-Mustang-Toy-1423495-pxhere.com.jpg";
import MustangPictureSrc2 from "./images/low-key-Mustang-Toy-1423495.jpg";

const MainPicHeader = (props) => {
  return (
    <>
      <MustangPictureMask>
        <Underline ref={props.UnderlineRef}></Underline>
        <MainTitle ref={props.MainTitleRef}>MUSTANG</MainTitle>
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
    z-index: 1;
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
    width: 100%;
    height: auto;
    transform: translateY(-120px);
  }
`;

export const MustangPicture = styled.img``;

export const MustangPictureOverlay = styled.img`
  opacity: 0;
`;
