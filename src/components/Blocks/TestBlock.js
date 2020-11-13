import styled from "styled-components";

const TestBlock = (props) => {
  return (
    <>
      <Container ref={props.TestBlockRef}></Container>
    </>
  );
};

export default TestBlock;

export const Container = styled.div`
  position: relative;
  width: 40%;
  height: 320px;
  background-color: red;
  transform: translateX(-80px);
  z-index: 1;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
`;
