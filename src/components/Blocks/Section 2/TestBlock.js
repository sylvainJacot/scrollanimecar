import styled from "styled-components";

const TestBlock = (props) => {
  return (
    <>
      <Container ref={props.TestBlockRef}>TestBlockRef</Container>
    </>
  );
};

export default TestBlock;

export const Container = styled.div`
  margin-top: 480px;
  width: 100%;
  height: 40px;
  background-color: yellow;
`;
