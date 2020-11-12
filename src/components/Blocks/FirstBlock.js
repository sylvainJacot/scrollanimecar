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
  position: fixed;
  width: 40%;
  height: 320px;
  background-color: #494d60;
  transform: translateX(190%);
  top: 44%;
  z-index: 1;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
  visibility: hidden;
`;
