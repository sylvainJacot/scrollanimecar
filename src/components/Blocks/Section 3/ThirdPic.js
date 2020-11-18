import styled from "styled-components";
import SecondPicBgimg from "../../images/ford_mustang_gt_v8_4k_8k_3840x2160_3840x2160.jpg";

const ThirdPic = (props) => {
  return (
    <>
      <Container ref={props.ThirdPicContainerRef}>
      <BgImg ref={props.ThirdPic} src={SecondPicBgimg} />
      </Container>
    </>
  );
};

export default ThirdPic;

export const Container = styled.div`
  position: absolute;
  display: flex;
  height: 320px;
  width: 320px;
  left: -300%;
  top: -16%;
  background-color: yellow;
  transform: translateX(-24px);
  z-index: 2;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const BgImg = styled.img`
display: block;
  width: auto;
  height: 100%;
  transform: scale(1.5);
  margin-left: 0;

  `;




