import styled from "styled-components";

const SecondSectionWhiteBG = (props) => {
  return (
    <>
      <Container ref={props.FirstWhiteBlockRef}>z-index -1</Container>
    </>
  );
};

export default SecondSectionWhiteBG;

export const Container = styled.div`
  position: absolute;
  width: 400px;
  height: 320px;
  background-color: white;
  top: 40px;
  left: 40px;
  z-index: -1;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.3);
`;
