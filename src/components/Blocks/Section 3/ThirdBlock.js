import styled from "styled-components";

const ThirdBlock = (props) => {
  return (
    <>
      <Container ref={props.ThirdBlockRef}>
        </Container>
    </>
  );
};

export default ThirdBlock;

export const Container = styled.div`
  position: absolute;
  height: 320px;
  width: 320px;
  background: rgb(73,77,96);
background: linear-gradient(45deg, rgba(73,77,96,1) 0%, rgba(94,102,138,1) 100%);
box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.3);
  z-index: 3;
`;



