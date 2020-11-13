import styled from "styled-components";

const FirstBlock = (props) => {
  return (
    <>
      <Container ref={props.FirstBlockRef}></Container>
    </>
  );
};

export default FirstBlock;

export const Container = styled.div`
  position: absolute;
  height: 320px;
  width: 560px;
  top: 270px;
  transform: translateX(200%);
  background-color: red;
  z-index: 1;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.3);
  visibility: hidden;
`;
