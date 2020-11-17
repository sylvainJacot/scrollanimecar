import styled from "styled-components";
import SecondBlock from "./SecondBlock";
import SecondPic from "./SecondPic";
import SecondSectionWhiteBG from "./SecondSectionWhiteBG";

const SecondSection = (props) => {
  return (
    <>
      <Container ref={props.SecondSectionRef}>
        <SecondBlock SecondBlockRef={props.SecondBlockRef} />
        <SecondSectionWhiteBG
          SecondWhiteRef={props.SecondWhiteRef}
        />
        <SecondPic SecondPicRef={props.SecondPicRef} SecondPicBgimg={props.SecondPicBgimg}/>
      </Container>
    </>
  );
};

export default SecondSection;

export const Container = styled.div`
  position: relative;
  /* border: 1px solid red; */
  height: 320px;
  width: 440px;
  margin-top: 480px;
  transform: translateX(-72px);
  z-index: 0;
`;
