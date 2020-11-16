import styled from "styled-components";
import SecondBlock from "./SecondBlock";
import SecondSectionWhiteBG from "./SecondSectionWhiteBG";

const SecondSection = (props) => {
  return (
    <>
      <Container ref={props.SeconSectionRef}>
        z-index 0
        <SecondSectionWhiteBG
          SecondSectionWhiteBGRef={props.SecondSectionWhiteBGRef}
        />
        <SecondBlock SecondBlockRef={props.SecondBlockRef} />
      </Container>
    </>
  );
};

export default SecondSection;

export const Container = styled.div`
  position: relative;
  height: 320px;
  width: 440px;
  margin-top: 480px;
  background-color: yellow;
  transform: translateX(-72px);
  z-index: 0;
`;
