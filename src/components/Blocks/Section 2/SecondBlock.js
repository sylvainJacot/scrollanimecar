import styled from "styled-components";

const SecondBlock = (props) => {
  return (
    <>
      <Container ref={props.SecondBlockRef}>Content z-index:0</Container>
    </>
  );
};

export default SecondBlock;

export const Container = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background-color: yellow;
  z-index: 0;
  transform: translate(176px, 40px);
`;
