import styled from "styled-components";

const SecondPic = (props) => {
  return (
    <>
      <Container ref={props.SecondPicRef}>z-index 1</Container>
    </>
  );
};

export default SecondPic;

export const Container = styled.div`
  position: absolute;
  display: block;
  height: 400px;
  width: 400px;
  background-color: blue;
  top: 50%;
  right: -600px;
  transform: translate(-50%, -50%);
  z-index: 2;
  box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.3);
`;

