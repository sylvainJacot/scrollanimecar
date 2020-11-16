import styled from "styled-components";

const SecondBlock = (props) => {
  return (
    <>
      <Container ref={props.SecondBlockRef}>z-index 1</Container>
    </>
  );
};

export default SecondBlock;

export const Container = styled.div`
    position: absolute;
    display: block;
    height: 400px;
    width: 400px;
    background-color: blue;
    top: 50%;
    right: -400px;
    transform: translateY(-50%);
    z-index: 1;
`;
