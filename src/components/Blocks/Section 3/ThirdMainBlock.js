import styled from "styled-components";
import ThirdBlock from "../Section 3/ThirdBlock";
import ThirdPic from "../Section 3/ThirdPic";
import ThirdWhiteBg from "../Section 3/ThirdWhiteBg";

const ThirdMainBlock = (props) => {
  return (
    <>
      <Container ref={props.ThirdMainBlockRef}>
        <ThirdBlock ThirdBlockRef={props.ThirdBlock} />
        <ThirdPic 
        ThirdPicContainerRef={props.ThirdPicContainerRef}
        ThirdPic={props.ThirdPicRef}
        />
        <ThirdWhiteBg ThirdWhiteBgRef={props.ThirdWhiteBgRef} />
      </Container>
    </>
  );
};

export default ThirdMainBlock;

export const Container = styled.div`
  position: relative;
  /* border: 1px solid red; */
  height: 320px;
  width: 320px;
  margin-top: 480px;
  transform: translateX(-24px);
  z-index: 0;
`;
